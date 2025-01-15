import { useState } from "react";
import aboutOne from "../../../assets/image/a1.png";
import aboutTwo from "../../../assets/image/a2.png";
import one from "../../../assets/image/c1.png";
import two from "../../../assets/image/c2.png";
import three from "../../../assets/image/c3.png";
import four from "../../../assets/image/c4.png";
import peopleIcon from "../../../assets/image/t1.png";
import awardIcon from "../../../assets/image/t2.png";
import sellIcon from "../../../assets/image/t3.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("selling");

  return (
    <>
      <div id="jibrado" className="bg-[#FAF9F5]">
        <div className="max-w-[1350px] mx-auto px-[15px] py-12 sm:py-16 md:py-20 lg:py-[100px]">
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
            <div className="relative w-full md:w-[47%] flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-6 pb-10">
              <div className=" overflow-hidden rounded-[16px]">
                <img src={aboutOne} alt="" />
              </div>
              <div className=" overflow-hidden rounded-[16px] pb-5">
                <img src={aboutTwo} alt="" />
              </div>
              <div className="sm:absolute bottom-0 right-[37px] flex flex-col items-center justify-center gap-6 rounded-[16px] border border-[#ECEFF3] bg-[#F8FAFB] p-8">
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
            <div className="w-full md:w-[49%] flex flex-col items-start gap-4">
              <h2 className="text-[#0D0D12] text-[28px] sm:text-[32px] lg:text-[48px] font-semibold leading-[130%]">
                Why work with Jibrado?
              </h2>
              <div className="flex flex-col items-start gap-6">
                {/* Tab Header */}
                <div className="flex justify-center bg-[#E9EAF3] rounded-[12px] p-2 gap-1 sm:gap-4">
                  <button
                    className={`px-4 sm:px-6 py-3 text-[13px] sm:text-[14px] font-medium font-['Montserrat'] flex justify-center items-center gap-[10px] rounded-[8px] ${
                      activeTab === "selling"
                        ? "bg-[#23298B] text-white"
                        : "bg-transparent text-[#23298B]"
                    }`}
                    onClick={() => setActiveTab("selling")}
                  >
                    Selling a home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M9.96012 8.9682L18.0832 7.53588C18.1912 7.51684 18.3011 7.51953 18.4095 7.5435C18.5171 7.567 18.6183 7.6115 18.707 7.67363C18.7958 7.73577 18.8717 7.81631 18.9311 7.90876C18.9907 8.00236 19.0308 8.10477 19.0499 8.2127L20.4822 16.3358C20.5622 16.7896 20.2601 17.2211 19.8063 17.3011C19.3525 17.3811 18.921 17.079 18.841 16.6252L17.7578 10.4821L10.308 21.1215C10.0442 21.4983 9.52493 21.5905 9.14744 21.3262C8.76994 21.0618 8.67895 20.5424 8.94279 20.1656L16.3926 9.52618L10.2495 10.6094C9.79571 10.6894 9.36425 10.3873 9.28423 9.93348C9.20421 9.47968 9.50633 9.04822 9.96012 8.9682Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    className={`px-4 sm:px-6 py-3 text-[13px] sm:text-[14px] font-['Montserrat'] font-medium flex justify-center items-center gap-[10px] rounded-[8px] ${
                      activeTab === "buying"
                        ? "bg-[#23298B] text-white"
                        : "bg-transparent text-[#23298B]"
                    }`}
                    onClick={() => setActiveTab("buying")}
                  >
                    Buying a home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M9.96012 8.9682L18.0832 7.53588C18.1912 7.51684 18.3011 7.51953 18.4095 7.5435C18.5171 7.567 18.6183 7.6115 18.707 7.67363C18.7958 7.73577 18.8717 7.81631 18.9311 7.90876C18.9907 8.00236 19.0308 8.10477 19.0499 8.2127L20.4822 16.3358C20.5622 16.7896 20.2601 17.2211 19.8063 17.3011C19.3525 17.3811 18.921 17.079 18.841 16.6252L17.7578 10.4821L10.308 21.1215C10.0442 21.4983 9.52493 21.5905 9.14744 21.3262C8.76994 21.0618 8.67895 20.5424 8.94279 20.1656L16.3926 9.52618L10.2495 10.6094C9.79571 10.6894 9.36425 10.3873 9.28423 9.93348C9.20421 9.47968 9.50633 9.04822 9.96012 8.9682Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="space-y-4">
                  {activeTab === "selling" ? (
                    <>
                      <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                        <div className="w-12 h-12 shrink-0">
                          <img src={peopleIcon} alt="" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                            Compare reviews & services offered
                          </h3>
                          <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                            Evaluate agent proposals including reviews and
                            services to pick the best agent for a successful
                            sale.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                        <div className="w-12 h-12 shrink-0">
                          <img src={awardIcon} alt="" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                            Work only with top agents
                          </h3>
                          <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                            Jibrado only works with the best agents in your
                            area.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                        <div className="w-12 h-12 shrink-0">
                          <img src={sellIcon} alt="" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                            Sell faster and for more
                          </h3>
                          <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                            Sell your home faster and for more than the national
                            average.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                        <div className="w-12 h-12 shrink-0">
                          <img src={awardIcon} alt="" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                            Work only with top agents
                          </h3>
                          <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                            Jibrado only works with the best agents in your
                            area.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                        <div className="w-12 h-12 shrink-0">
                          <img src={peopleIcon} alt="" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                            Compare reviews & services offered
                          </h3>
                          <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                            Evaluate agent proposals including reviews and
                            services to pick the best agent for a successful
                            sale.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-top gap-4 px-3 py-5 bg-white rounded-[8px] border border-[#F6F8FA]">
                        <div className="w-12 h-12 shrink-0">
                          <img src={sellIcon} alt="" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <h3 className="text-[#0F113A] text-[20px] lg:text-[24px] font-semibold leading-[130%]">
                            Sell faster and for more
                          </h3>
                          <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%]">
                            Sell your home faster and for more than the national
                            average.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
