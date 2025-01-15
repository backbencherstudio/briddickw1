// eslint-disable-next-line no-unused-vars
import React from "react";
import imageOne from "../../../assets/image/pi1.png";
import imageTwo from "../../../assets/image/pi2.png";
import imageThree from "../../../assets/image/pi3.png";
import formIcon from "../../../assets/image/formIcon.png";
import matchIcon from "../../../assets/image/matchIcon.png";
import handIcon from "../../../assets/image/handIcon.png";
import one from "../../../assets/image/c1.png";
import two from "../../../assets/image/c2.png";
import three from "../../../assets/image/c3.png";
import four from "../../../assets/image/c4.png";
import Button from "../../../components/Button/Button";

const Process = () => {
  return (
    <>
      <div id="faq" className="bg-[#FAF9F5]">
        <div className="max-w-[1350px] mx-auto px-[15px] py-12 sm:py-16 md:py-20 lg:py-[100px]">
          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8">
            <div className="relative w-full lg:w-[47%] flex flex-col sm:flex-row items-center lg:justify-between gap-6 pb-14">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className=" overflow-hidden rounded-[16px]">
                  <img src={imageOne} alt="" />
                </div>
                <div className=" overflow-hidden rounded-[16px]">
                  <img src={imageTwo} alt="" />
                </div>
              </div>
              <div className=" overflow-hidden rounded-[16px]">
                <img src={imageThree} alt="" />
              </div>
              <div className="sm:absolute bottom-0 left-[120px] flex flex-col items-center justify-center gap-6 rounded-[16px] border border-[#ECEFF3] bg-[#F8FAFB] p-8">
                <div className="flex items-center justify-start">
                  <img src={one} alt="" />
                  <img className=" ms-[-24px]" src={two} alt="" />
                  <img className=" ms-[-24px]" src={three} alt="" />
                  <img className=" ms-[-24px]" src={four} alt="" />
                  <div className="ms-[-24px] w-16 h-16 bg-[#6BC04A] rounded-full border-2 border-white text-white text-[30px] font-semibold flex text-center justify-center leading-[160%]">
                    +
                  </div>
                </div>
                <p className="text-[#4A4C56] text-[18px] font-medium leading-[160%]">
                  Average Of 2k+ Customer Reviews
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[49%] flex flex-col items-start gap-6">
              <h2 className="text-[#0D0D12] text-[28px] sm:text-[32px] lg:text-[48px] font-semibold leading-[130%]">
                How it works?
              </h2>
              <div className="flex flex-col items-stretch gap-6">
                <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                  <div className="w-12 h-12 shrink-0">
                    <img src={formIcon} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                      Fill out the form
                    </h3>
                    <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                      Tell us what you’re looking for—whether it’s buying or
                      selling. Provide details about your needs and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                  <div className="w-12 h-12 shrink-0">
                    <img src={matchIcon} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                      Get matched with a top agent
                    </h3>
                    <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                      We’ll connect you with the best agent in your area who
                      specializes in your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                  <div className="w-12 h-12 shrink-0">
                    <img src={handIcon} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                      Buy or sell and save
                    </h3>
                    <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                      Work with your matched agent to achieve your goals while
                      saving money and time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Button buttonText={"Compare Agent"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
