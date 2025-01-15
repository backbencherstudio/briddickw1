// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import lightLogo from "../../../assets/image/light-logo.png";
import insta from "../../../assets/image/insta.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#010320]">
        <div className="max-w-[1350px] px-[15px] mx-auto pt-10">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between py-10 gap-10 lg:gap-2">
            <div className="w-full lg:w-[17.27%] flex flex-col  items-start justify-center gap-8">
              <Link>
                <img src={lightLogo} alt="" />
              </Link>
              <div className="flex flex-col items-start gap-5">
                <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%]">
                  California BRE #01928572
                </p>
                <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%]">
                  Indiana PLA RC51800184
                </p>
                <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%]">
                  Follow Us
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link className="w-12 h-12 rounded-full bg-[#FFFFFF1A] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5425_24661)">
                      <path
                        d="M15.9975 4.26869H18.1885V0.452691C17.8105 0.400691 16.5105 0.283691 14.9965 0.283691C11.8375 0.283691 9.6735 2.27069 9.6735 5.92269V9.28369H6.1875V13.5497H9.6735V24.2837H13.9475V13.5507H17.2925L17.8235 9.28469H13.9465V6.34569C13.9475 5.11269 14.2795 4.26869 15.9975 4.26869Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5425_24661">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.285645)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link className="w-12 h-12 rounded-full bg-[#FFFFFF1A] flex items-center justify-center">
                  <img src={insta} alt="" />
                </Link>
                <Link className="w-12 h-12 rounded-full bg-[#FFFFFF1A] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link className="w-12 h-12 rounded-full bg-[#FFFFFF1A] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5425_24671)">
                      <path
                        d="M11.8577 8.46864L19.1431 0H17.4167L11.0908 7.3532L6.03835 0H0.210938L7.85124 11.1193L0.210938 20H1.93743L8.61771 12.2348L13.9535 20H19.7809L11.8573 8.46864H11.8577ZM9.49305 11.2173L8.71892 10.1101L2.55951 1.29967H5.2113L10.182 8.40994L10.9561 9.51718L17.4175 18.7594H14.7657L9.49305 11.2177V11.2173Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5425_24671">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[68.46%] flex flex-wrap items-start justify-between gap-[60px]">
              <div className="flex flex-col items-start justify-start gap-8">
                <h3 className="text-[#ffffff] text-[20px] md:text-[22px] lg:text-[26px] font-bold  leading-[120%]">
                  Company
                </h3>
                <div className="flex flex-col items-start justify-start gap-5">
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      About Us
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      FAQ
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      Terms of Services
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      Privacy Policy
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-8">
                <h3 className="text-[#ffffff] text-[20px] md:text-[22px] lg:text-[26px] font-bold  leading-[120%]">
                  Resources
                </h3>
                <div className="flex flex-col items-start justify-start gap-5">
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      Tips
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      Commission Stats
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      Reviews
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      Sellers
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      Top Agents
                    </p>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex items-start justify-start gap-4"
                  >
                    <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                      Realtor Commissions
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start gap-8">
                  <h3 className="text-[#ffffff] text-[20px] md:text-[22px] lg:text-[26px] font-bold  leading-[120%]">
                    Partner Agents
                  </h3>
                  <div className="flex flex-col items-start justify-start gap-5">
                    <Link
                      to={"/"}
                      className="flex items-start justify-start gap-4"
                    >
                      <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                        Agent sign up
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-8">
                  <h3 className="text-[#ffffff] text-[20px] md:text-[22px] lg:text-[26px] font-bold  leading-[120%]">
                    Resources
                  </h3>
                  <div className="flex flex-col items-start justify-start gap-5">
                    <Link
                      to={"/"}
                      className="flex items-start justify-start gap-4"
                    >
                      <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                        Download for iOS
                      </p>
                    </Link>
                    <Link
                      to={"/"}
                      className="flex items-start justify-start gap-4"
                    >
                      <p className="text-[#D2D2D5] text-[18px] font-normal leading-[144%] hover:text-[#ffffff] transition-colors duration-500">
                        Download for Android
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-t-[#E9E9EA30] py-8">
            <div className="max-w-[1254px] px-[15px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-3">
              <p className="text-[#A5A5AB] text-[18px] font-normal   leading-[144%]">
                Copyright©JIBRADO. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
