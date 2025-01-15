import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import TopArrowIcon from "../../public/icons/TopArrow";

export const LocationStep = ({ formData, updateFormData, handleNext, placeholderTitle }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [error, setError] = useState("");

  const resultRefs = useRef([]);
  

  const formatDisplayName = (rawDisplayName) => {
    const parts = rawDisplayName.split(",").map((item) => item.trim());
    const street = parts[0] && parts[1] ? `${parts[0]} ${parts[1]}` : parts[0];

    let city = "";
    for (let i = 2; i < parts.length; i++) {
      const val = parts[i].toLowerCase();
  
      if (
        !val.includes("washington") &&
        !val.includes("united states") &&
        !val.includes("county") &&
        !/^\d+$/.test(val) 
      ) {
        city = parts[i];
        break;
      }
    }

    const state = "WA";
    return `${street || ""}, ${city || ""}, ${state}`;
  };

  const searchLocation = async (query) => {
    if (!query) {
      setSearchResults([]);
      setFocusedIndex(-1);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query},Washington&format=json&countrycodes=us`
      );
      const data = await response.json();
      console.log("data:", data);
      

      // Filter to ensure we only keep US addresses (if you want)
      const usLocations = data.filter((result) =>
        result.display_name.includes("United States")
      );
      setSearchResults(usLocations);
      setFocusedIndex(-1);
    } catch (error) {
      console.error("Error searching locations:", error);
      toast.error("Error searching locations. Please try again.");
    }
    setIsSearching(false);
  };

  const handleLocationSelect = (location) => {
    const formattedAddress = formatDisplayName(location.display_name);

    updateFormData("addressToSell", formattedAddress);
    setSearchResults([]);
    setFocusedIndex(-1);
    setError(""); // Clear error if any
  };

  const handleKeyDown = (event) => {
    if (searchResults.length === 0) return;

    if (event.key === "ArrowDown") {
      // Navigate down
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      // Navigate up
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    } else if (event.key === "Enter" && focusedIndex >= 0) {
      // Select the focused result
      handleLocationSelect(searchResults[focusedIndex]);
    }
  };

   // Scroll focused result into view
   useEffect(() => {
    if (focusedIndex >= 0 && resultRefs.current[focusedIndex]) {
      resultRefs.current[focusedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [focusedIndex]);

  // Attach keydown listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchResults, focusedIndex]);

  const handleSubmit = () => {
    if (!formData.addressToSell.trim()) {
      setError("City name is required.");
      return;
    }
    handleNext();
  };

  return (
    <div className="md:w-[700px] lg:w-[987px] flex flex-col items-center lg:rounded-2xl rounded-tl-none ">
  <div className="relative px-4 py-1 w-[328px] md:w-[700px] lg:w-[987px] lg:rounded-2xl">
    <div className="p-4 lg:flex items-center gap-4 lg:rounded-2xl">
      <Input
        className={`py-7 placeholder:text-sm md:placeholder:text-base lg:placeholder:text-xl flex-grow border-none outline-none ${
          error ? "border-red-500" : ""
        }`}
        placeholder={placeholderTitle}
        value={formData.addressToSell}
        onChange={(e) => {
          updateFormData("addressToSell", e.target.value);
          searchLocation(e.target.value);
          setError("");
        }}
      />
      <Button
        className="w-full lg:w-40 my-2 flex items-center gap-1 md:px-4 md:py-3"
        variant="primary"
        onClick={handleSubmit}
      >
        Compare Agents
        <TopArrowIcon />
      </Button>
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
    {isSearching && <div className="mt-2 text-gray-600">Searching...</div>}

    {/* Box for Search Results */}
    {searchResults.length > 0 && (
      <div className="absolute bg-white top-[64px] left-0 mt-2 border rounded-md max-h-[250px] lg:max-h-[300px] w-full overflow-y-auto text-sm md:text-base lg:text-lg">
        {searchResults.map((result, index) => {
          const formattedName = formatDisplayName(result.display_name);
          return (
            <div
              key={index}
              className={`p-2 cursor-pointer ${
                index === focusedIndex
                  ? "bg-gray-200"
                  : "hover:bg-gray-100 rounded-2xl"
              }`}
              onClick={() => handleLocationSelect(result)}
            >
              <p className="">{formattedName}</p>
            </div>
          );
        })}
      </div>
    )}
  </div>
</div>


  );
};
