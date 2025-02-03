import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Dialog components
import msg from "../../public/msg.png";
import thankYou from "../../public/thank-you.png";
import RightArrowIcon from "../../public/icons/RightArrow";
import LeftArrowIcon from "../../public/icons/LeftArrow";
import MinusIcon from "../../public/icons/MinusIcon";
import PlusIcon from "../../public/icons/PlusIcon";
import { toast, ToastContainer } from "react-toastify";
import { LocationStep } from "./LocationStep";
import { sendEmail } from "../lib/sendEmail";
import sendOtpMessage from "../lib/sendMessage";
import { baseurl } from "../util/base_url";

// Progress bar component
const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="w-full h-2 bg-gray-200 fixed top-0 left-0 z-90">
      <div
        className="h-full bg-orange-500 transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const INITIAL_FORM_DATA = {
  addressToSell: "",
  priceRange: [500],
  hasAgent: null,
  lookingToSell: null,
  additionalDetails: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  phoneNumber: "",
};

const INITIAL_ERRORS = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

// Define all possible values and their corresponding display formats
const getPricePoints = () => {
  const points = [];

  // Under 100K
  points.push({ value: 50, display: "Under $100K" });

  // $100K to $900K in 50K increments
  for (let i = 100; i < 950; i += 50) {
    points.push({
      value: i,
      display: `$${i}K - $${i + 50}K`,
    });
  }

  // Special case for 950K to 1M
  points.push({
    value: 950,
    display: "$950K - $1M",
  });

  // $1M to $2.25M in 250K increments
  for (let i = 1000; i < 2750; i += 250) {
    points.push({
      value: i,
      display:
        i === 1000
          ? `$1M - $${((i + 250) / 1000).toFixed(2)}M`
          : `$${(i / 1000).toFixed(2)}M - $${((i + 250) / 1000).toFixed(2)}M`,
    });
  }

  // Special ranges
  points.push({ value: 2750, display: "$2.75M - $3M" });
  points.push({ value: 3000, display: "$3M - $4M" });
  points.push({ value: 4000, display: "$4M - $5M" });
  points.push({ value: 5000, display: "$5M+" });

  return points;
};

const BuyMultipleFormWithMudal = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState(INITIAL_ERRORS); // State for error messages

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Clear error when user types
  };

  const handleNext = () => {
    if (currentStep === 0) {
      setIsModalOpen(true);
      setCurrentStep(1);
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const otpValues = inputRefs.current.map((input) => input.value).join("");

    if (otpValues.length < 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsLoading(true);

    const storedOtp = localStorage.getItem("zi5jd");
    if (otpValues !== storedOtp) {
      toast.error("Invalid OTP. Please try again.");
      setIsLoading(false);
      return;
    }

    console.log("formData", formData);
    // Format the data according to API requirements
    const finalFormData = {
      additionalDetails: formData.additionalDetails,
      addressToSell: formData.lookingToSell, 
      email: formData.email,
      firstName: formData.firstName,
      hasAgent: formData.hasAgent,
      lastName: formData.lastName,
      lookingToSell: formData.addressToSell.description,
      otp: otpValues,
      phoneNumber: formData.phoneNumber?.startsWith('+') 
        ? formData.phoneNumber 
        : `+${formData.phoneNumber}` || "",
      priceRange: formatPriceRange(formData.priceRange[0]) || ""
    };

    try {
      // Log the data being sent for debugging
      console.log("Sending data to API:", finalFormData);

      const response = await fetch(`${baseurl}/email/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });

      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to submit form");
      }

      toast.success("Form submitted successfully!");
      setCurrentStep(steps.length - 1);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpInput = (e, index) => {
    const { value } = e.target;

    // Move to the next input if a digit is entered
    if (
      value &&
      /^[0-9]$/.test(value) &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1].focus();
    }

    // Move to the previous input if backspace is pressed
    if (
      !value &&
      e.nativeEvent.inputType === "deleteContentBackward" &&
      index > 0
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").split("");
    if (pastedData.length === 6) {
      pastedData.forEach((digit, index) => {
        if (inputRefs.current[index]) {
          inputRefs.current[index].value = digit;
        }
      });
      inputRefs.current[5]?.focus(); // Focus last input after paste
    }
  };

  // Validation function
  const validateContactDetails = () => {
    let isValid = true;
    const newErrors = { ...INITIAL_ERRORS };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    setErrors(newErrors); // Set error messages to state
    return isValid;
  };

  const handleContactNext = () => {
    if (validateContactDetails()) {
      handleNext(); // Proceed if validation passes
    }
  };

  const handlePhoneVerificationNext = async () => {
    const isValid = await validatePhoneNumber();
    if (isValid) {
      handleNext(); // Only proceed to next step if validation succeeds
    }
  };

  const validatePhoneNumber = async () => {
    let isValid = true;
    const newErrors = { ...INITIAL_ERRORS };

    // Pattern for both USA (10 digits) and Bangladesh (11 digits) numbers
    const usaPattern = /^\d{10}$/; // For numbers like: 1234567890
    const bdPattern = /^\d{11}$/; // For numbers like: 01639523282

    const phoneNumber = formData.phoneNumber.trim().replace(/[-\s.]/g, ""); // Remove any spaces, dashes or dots

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!usaPattern.test(phoneNumber) && !bdPattern.test(phoneNumber)) {
      newErrors.phoneNumber =
        "Please enter a valid phone number (10 digits for USA)";
      isValid = false;
    }

    if (isValid) {
      try {
        setIsLoading(true); // Add loading state while API call is in progress

        // Format phone number with country code based on length
        let formattedPhone;
        if (phoneNumber.length === 10) {
          // USA number
          formattedPhone = `+1${phoneNumber}`;
        } else if (phoneNumber.length === 11) {
          // Bangladesh number (replace first '0' with '+880')
          formattedPhone = `+88${phoneNumber}`;
        }

        const response = await fetch(`${baseurl}/otp/send-otp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: formattedPhone,
          }),
        });
        console.log(response, response)

        const data = await response.json();

        if (data.success) {
          localStorage.setItem("zi5jd", data.otp);
          toast.success(data.message);
          return true; // Return true to indicate successful validation
        } else {
          toast.error("Failed to send OTP");
          isValid = false;
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        toast.error("Failed to send OTP. Please try again.");
        isValid = false;
      } finally {
        setIsLoading(false);
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle modal close with page reload
  const handleModalClose = () => {
    window.location.reload();
  };

  const pricePoints = useMemo(() => getPricePoints(), []);

  const formatPriceRange = (value) => {
    const pointIndex = pricePoints.findIndex((p) => p.value === value);
    return pricePoints[pointIndex].display;
  };

  const handleDecrease = () => {
    const currentValue = formData.priceRange[0];
    const currentIndex = pricePoints.findIndex((p) => p.value === currentValue);
    if (currentIndex > 0) {
      updateFormData("priceRange", [pricePoints[currentIndex - 1].value]);
    }
  };

  const handleIncrease = () => {
    const currentValue = formData.priceRange[0];
    const currentIndex = pricePoints.findIndex((p) => p.value === currentValue);
    if (currentIndex < pricePoints.length - 1) {
      updateFormData("priceRange", [pricePoints[currentIndex + 1].value]);
    }
  };

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();

        // Handle OTP verification separately
        if (currentStep === 7) {
          const otpValues = inputRefs.current
            .map((input) => input.value)
            .join("");
          if (otpValues.length === 6) {
            handleSubmit();
          }
          return;
        }

        // Handle other steps
        switch (currentStep) {
          case 0:
            if (formData.addressToSell.trim()) {
              handleNext();
            }
            break;

          case 1: // Price Range step
            if (formData.priceRange[0]) {
              handleNext();
            }
            break;

          case 2: // Agent Question
            if (formData.hasAgent !== null) {
              handleNext();
            }
            break;

          case 3: // Looking to Sell Question
            if (formData.lookingToSell !== null) {
              handleNext();
            }
            break;

          case 4: // Additional Details
            handleNext(); // Additional details is optional
            break;

          case 5: // Contact Details
            if (validateContactDetails()) {
              handleContactNext();
            }
            break;

          case 6: // Phone Verification
            if (formData.phoneNumber.trim()) {
              handlePhoneVerificationNext();
            }
            break;
        }
      }
    },
    [
      currentStep,
      formData,
      handleNext,
      handleSubmit,
      validateContactDetails,
      handleContactNext,
      handlePhoneVerificationNext,
    ]
  );

  // Add useEffect to handle the keypress event
  useEffect(() => {
    const handleGlobalKeyPress = (e) => {
      if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT") {
        // Don't trigger navigation if user is typing in a form field
        return;
      }
      handleKeyPress(e);
    };

    document.addEventListener("keydown", handleGlobalKeyPress);
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyPress);
    };
  }, [handleKeyPress]); // Now we only depend on the memoized handleKeyPress

  const steps = [
    // Step 1: Location Input (outside modal)

    {
      content: (
        <LocationStep
          formData={formData}
          updateFormData={updateFormData}
          handleNext={handleNext}
          placeholderTitle="Enter your city name"
        />
      ),
    },
    // Step 2: Price Range
    {
      content: (
        <div className="w-full h-full lg:h-[80vh] lg:w-[815px] mx-auto flex flex-col select-none">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-4 sm:px-6 lg:px-7 mt-16 lg:mt-24 mb-4">
          <h2 className="font-semibold text-[#0F113A] text-2xl sm:text-3xl lg:text-[32px] text-center lg:text-left">
          What price range are you looking to buy?
            </h2>
          </div>

          <div className="py-6 sm:py-8 w-full sm:w-[550px] md:w-[650px] lg:w-[750px] mx-auto font-bold text-2xl sm:text-3xl flex-grow">
            <div className="text-center mb-6">
              <div className="flex justify-between items-center mx-4 sm:mx-12 lg:mx-36">
                <div
                  className="border text-xl sm:text-2xl p-2 sm:p-3 inline-flex items-center justify-center cursor-pointer hover:border-[#0F113A] ease-linear duration-200"
                  onClick={handleDecrease}
                >
                  <MinusIcon className="w-4 h-4 md:w-6 md:h-6 text-current" />
                </div>
                <p className="mx-4 sm:mx-6">
                  {formatPriceRange(formData.priceRange[0])}
                </p>
                <div
                  className="border text-xl sm:text-2xl p-2 sm:p-3 inline-flex items-center justify-center cursor-pointer hover:border-[#0F113A] ease-linear duration-200"
                  onClick={handleIncrease}
                >
                  <PlusIcon className="w-4 h-4 md:w-6 md:h-6 text-current" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <Slider
                defaultValue={[0]}
                max={pricePoints.length - 1}
                min={0}
                step={1}
                value={[
                  pricePoints.findIndex(
                    (p) => p.value === formData.priceRange[0]
                  ),
                ]}
                onValueChange={(value) => {
                  updateFormData("priceRange", [pricePoints[value[0]].value]);
                }}
                className="bg-[#E9EAF3] my-6 text-center mx-auto"
              />
            </div>
            <div className="flex justify-between px-10 mt-2 text-lg md:text-2xl">
              <span>$100K</span>
              <span>$5M+</span>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 px-8 sm:px-10 lg:px-20 py-8 mt-auto">
            <Button
              className="flex items-center gap-1 text-[#23298B] shadow-sm hover:text-white transition-all duration-300 ease-in-out"
              variant="secondary"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              className="flex items-center gap-1 bg-[#23298B] text-white shadow-sm hover:text-[#23298B] transition-all duration-300 ease-in-out"
              variant="primary"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      ),
    },

    // Step 3: Agent Question
    {
      content: (
        <div
          className="w-full h-full l
    md:h-[80vh] mx-auto flex flex-col px-3 select-none"
      >
          <div className="md:px-10 px-4 mb-4 mt-24">
          <h2 className="font-medium md:font-semibold text-[#0F113A] text-3xl md:text-[32px]">
          Have you already hired a real estate Agent?
            </h2>
            <div className="flex-grow flex mt-10 items-center">
              <div className="flex space-x-4">
                <Button
                  variant={formData.hasAgent === true ? "primary" : "secondary"}
                  onClick={() => updateFormData("hasAgent", true)}
                >
                  Yes
                </Button>
                <Button
                  variant={formData.hasAgent === false ? "primary" : "secondary"}
                  onClick={() => updateFormData("hasAgent", false)}
                >
                  No
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Section for Buttons */}
          <div className="flex justify-between px-20 py-8 mt-auto">
            <Button
              className="flex items-center gap-1 text-[#23298B] shadow-sm hover:text-white transition-all duration-300 ease-in-out"
              variant="secondary"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              className={`flex items-center gap-1 ${
                formData.hasAgent !== null
                  ? "bg-[#23298B] text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
              } shadow-sm hover:text-[#23298B] transition-all duration-300 ease-in-out`}
              variant="primary"
              onClick={handleNext}
              disabled={formData.hasAgent === null}
            >
              Next
            </Button>
          </div>
        </div>
      ),
    },

    // Step 5: Selling Question
    {
      content: (
        <div className="w-full h-full lg:h-[80vh] px-3 mx-auto flex flex-col select-none">
          <div className="md:px-10 px-4 mb-4 mt-24">
            <h2 className="font-medium md:font-semibold text-[#0F113A] text-2xl md:text-[32px]">
            Are you also looking to sell a home?
            </h2>
            <div className="flex-grow flex mt-10 items-center">
              <div className="flex space-x-4">
                <Button
                  variant={formData.lookingToSell === true ? "primary" : "secondary"}
                  onClick={() => updateFormData("lookingToSell", true)}
                >
                  Yes
                </Button>
                <Button
                  variant={formData.lookingToSell === false ? "primary" : "secondary"}
                  onClick={() => updateFormData("lookingToSell", false)}
                >
                  No
                </Button>
              </div>
            </div>
          </div>
          {/* Footer Section for Buttons */}
          <div className="flex justify-between px-20 py-8 mt-auto">
            <Button
              className="flex items-center gap-1 text-[#23298B] shadow-sm hover:text-white transition-all duration-300 ease-in-out"
              variant="secondary"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              className={`flex items-center gap-1 ${
                formData.lookingToSell !== null
                  ? "bg-[#23298B] text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
              } shadow-sm hover:text-[#23298B] transition-all duration-300 ease-in-out`}
              variant="primary"
              onClick={handleNext}
              disabled={formData.lookingToSell === null}
            >
              Next
            </Button>
          </div>
        </div>
      ),
    },

    // Step 6: Additional Details
    {
      content: (
        <div className="w-full h-full md:h-[80vh] mx-auto flex flex-col select-none">
          <div className="md:px-10 px-4 mb-4 mt-24">
            <h2 className="font-medium md:font-semibold text-[#0F113A] text-2xl md:text-[32px] pb-5">
            Are there any other details you&apos;d like to share?
            </h2>
          <textarea
            className="w-full h-32 p-2 border rounded-md placeholder:text-lg bg-[#F8FAFB]"
            placeholder="Enter any details about your real estate needs..."
            value={formData.additionalDetails}
            onChange={(e) =>
              updateFormData("additionalDetails", e.target.value)
            }
          />
          </div>
          {/* Footer Section for Buttons */}
          <div className="flex justify-between px-20 py-8 mt-auto">
            <Button
              className="flex items-center gap-1  text-[#23298B] shadow-sm hover:text-white transition-all duration-300 ease-in-out"
              variant="secondary"
              onClick={handleBack}
            >
              <LeftArrowIcon className="w-6 h-6" />
              Back
            </Button>
            <Button
              className="flex items-center gap-1 bg-[#23298B] text-white shadow-sm hover:text-[#23298B] transition-all duration-300 ease-in-out"
              variant="primary"
              onClick={handleNext}
            >
              Next
              <RightArrowIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      ),
    },
    // Step 7: Contact Details
    {
      content: (
        <div className="w-full h-full md:h-[80vh] mx-auto flex flex-col select-none md:px-10 px-4 py-5">
          <div className="mb-4 mt-24">
            <h2 className="font-medium lg:font-semibold text-[#0F113A] text-2xl md:text-[32px]">
              Last step! Now just add a few contact details
            </h2>
          </div>
          <p className="md:text-lg text-gray-600">
            This is where RealEstateAgents.com and our agents will contact you
            to discuss your needs
          </p>
          <div className="space-y-4 lg:space-y-10 my-10">
            <div className="flex items-center gap-5">
              <div className="w-full">
                <Input
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className="px-5 py-6 bg-[#ECEFF3]"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Input
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className="px-5 py-6 bg-[#ECEFF3]"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <Input
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="px-5 py-6 bg-[#ECEFF3]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {/* Footer Section for Buttons */}
            <div className="mt-auto">
              <Button
                className="w-full py-6"
                variant="secondary"
                onClick={handleContactNext} // Call validation handler
              >
                Get Agents
              </Button>
            </div>
          </div>

          <p className="text-sm md:text-lg font-normal text-gray-500 mt-4">
            By clicking "Get Agents" I acknowledge and agree to RealEstateAgents{" "}
            <span className="text-[#23298B]">Terms of Use</span> and{" "}
            <span className="text-[#23298B]">Privacy Policy</span>, which
            includes binding arbitration and consent to receive electronic
            communications.
          </p>

          {/* Footer Section for Buttons */}
          <div className="flex justify-between mt-10">
            <Button
              className="flex items-center gap-1  text-[#23298B] shadow-sm hover:text-white transition-all duration-300 ease-in-out"
              variant="secondary"
              onClick={handleBack}
            >
              <LeftArrowIcon className="w-6 h-6" />
              Back
            </Button>
          </div>
        </div>
      ),
    },
    // Step 8: Phone Verification
    {
      content: (
        <div className="md:w-[815px] py-5 mx-auto flex flex-col px-3 select-none">
          <div className="mb-4 mt-5 md:mt-24">
            <h2 className="text-[#0F113A] text-xl lg:text-3xl font-semibold">
              We&apos;re preparing to connect you to at least 3 agents. Please
              verify the following information to get connected sooner:
            </h2>
          </div>
          <div className="md:w-1/2 flex space-x-3 mt-7 mb-16 md:mb-20 px-4">
            <div className="w-24">
              <select className="w-full border rounded-md p-2 py-3 bg-[#ECEFF3] text-sm md:text-base">
                <option>USA</option>
              </select>
            </div>
            <div className="md:w-full flex flex-col">
              <Input
                placeholder="Cell Number"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => updateFormData("phoneNumber", e.target.value)}
                className="px-5 py-6 bg-[#F8FAFB]"
              />
              <div className="h-5 mt-1">
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between px-4 md:px-0 md:mx-20 mb-5 md:my-10">
            <Button
              className="flex items-center gap-1 text-[#23298B] shadow-sm hover:text-white transition-all duration-300 ease-in-out"
              variant="secondary"
              onClick={handleBack}
            >
              <LeftArrowIcon className="w-6 h-6" />
              Skip
            </Button>
            <Button
              className="flex items-center gap-1 text-[#23298B]"
              variant="secondary"
              onClick={handlePhoneVerificationNext}
              disabled={isLoading}
            >
              Text Confirmation Code
            </Button>
          </div>
          <p className="text-gray-500 text-sm md:text-lg mt-10 md:mt-0">
            By clicking "Text Confirmation Code", I am providing my
            esign and express written consent to allow ReferralExchange and our
            affiliated Participating Agents, or parties calling on their behalf,
            to contact me at the phone number above for marketing purposes,
            including through the use of calls, SMS/MMS prerecorded and/or
            artificial voice messages using an automated dialing system to
            provide agent info, even if your number is listed on a corporate,
            state or federal Do-Not-Call list. Consent is not a condition for
            our service and you can revoke it at any time.
          </p>
        </div>
      ),
    },
    // Step 8: OTP Verification
    {
      content: (
        <div className="lg:w-[815px] py-5 mx-auto flex flex-col px-4 lg:px-0">
          <div className=" mb-4 mt-24">
            <div className="w-full">
              <img
                src={msg}
                alt="message"
                className="mx-auto bg-[#BBBDDB] p-4 rounded-2xl"
              />
            </div>

            <div className="w-full mx-auto text-center">
              <div className="mb-4">
                <h2 className="text-[#0F113A] text-3xl font-semibold leading-10 my-6">
                  Welcome Back!
                </h2>
              </div>

              <div
                className="flex justify-center gap-3 mt-6"
                onPaste={handlePaste}
              >
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-10 md:w-12 h-14 text-center border border-gray-300 rounded-md text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-[#ECEFF3]"
                      onChange={(e) => handleOtpInput(e, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                    />
                  ))}
              </div>
            </div>

            <p className="text-lg font-normal leading-7 text-gray-500 mt-8 text-center">
              A message with a verification code was just sent to{" "}
              {formData.phoneNumber}
            </p>

            <div className="flex justify-center mt-12">
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  <span className="text-lg font-semibold">Verifying...</span>
                </div>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="flex items-center gap-1 bg-[#23298B] text-white shadow-sm hover:text-[#23298B] transition-all duration-300 ease-in-out"
                  variant="primary"
                >
                  Submit
                </Button>
              )}
            </div>

            <p className="text-sm mt-8 text-gray-500 text-center">
              Didn't receive a code?{" "}
          
              <span className="text-indigo-600 font-semibold cursor-pointer hover:underline" onClick={handleBack}>
                create a new request
              </span>
            </p>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
          />
        </div>
      ),
    },

    // Step 8: Thank you
    {
      content: (
        <div className="lg:w-[815px] md:min-h-[80vh] py-5 mx-auto flex flex-col px-4 md:px-10">
          <div className=" mb-4 mt-10">
            <div>
              <img
                src={thankYou}
                alt="Thank you image"
                className="mx-auto w-40 md:w-64 my-4"
              />
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#0F113A] mb-4">
                  Thank you for submitting!
                </h2>
                <p className="my-4 text-gray-700 text-sm md:text-base">
                  Thank you for filling out our form and congratulations on
                  taking the next step of connecting with a top real estate
                  professional in your area. Agents will be contacting you soon.
                </p>

                <p className="my-4 text-gray-700 text-sm md:text-base">
                  Please check your inbox in the next few minutes as we will
                  also send you a list of 3 local agents that meet the following
                  criteria:
                </p>
              </div>
            </div>

            {/* Centered Unordered List */}
            <ul className="list-none mx-auto mt-6 md:space-y-4 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-600 mr-3 md:text-xl">✔️</span>
                <span className="md:text-lg font-medium">
                  Sold over 100+ homes in your market
                </span>
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-600 mr-3 md:text-xl">✔️</span>
                <span className="md:text-lg font-medium">
                  Have over 50 5-Star reviews
                </span>
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-600 mr-3 md:text-xl">✔️</span>
                <span className="md:text-lg font-medium">
                  Specialize in buying or listing property
                </span>
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-600 mr-3 md:text-xl">✔️</span>
                <span className="md:text-lg font-medium">
                  Have been in the business for 5+ years
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mt-8 text-center text-sm md:text-lg px-2">
              If you need anything in the meantime, don&apos;t hesitate to reach
              out to{" "}
              <a
                href="mailto:support@jibrado.com"
                className="text-indigo-600 font-semibold hover:underline"
              >
                support@jibrado.com
              </a>
              .
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center justify-center rounded-2xl rounded-t-none md:rounded-tr-2xl">
      {currentStep === 0 ? (
        <div className="w-full rounded-b-xl bg-white md:rounded-tr-2xl ">
          {steps[0].content}
        </div>
      ) : (
        <Dialog
          open={isModalOpen}
          onOpenChange={(open) => {
            if (!open) {
              handleModalClose();
            }
          }}
        >
          <DialogContent className="max-w-[1087px] p-0 rounded-2xl">
            <div className="sticky top-0 z-10">
              <ProgressBar
                currentStep={currentStep}
                totalSteps={steps.length}
              />
            </div>
            <div className="relative">{steps[currentStep].content}</div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default BuyMultipleFormWithMudal;
