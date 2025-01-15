// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/image/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="bg-transparent absolute top-0 left-0 right-0 bottom-auto">
        {/* Desktop */}
        <div className="max-w-[1350px] px-[15px] mx-auto">
          <div className="navbar py-[14px]">
            <div className="navbar-start">
              <a href="/" className="">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink
                    to={"#multiple-proposals"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                        : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                    }
                  >
                    Multiple proposals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"#jibrado"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                        : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                    }
                  >
                    Why Jibrado
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"#partner-agents"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                        : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                    }
                  >
                    Partner Agents
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"#reviews"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                        : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                    }
                  >
                    Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"#faq"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                        : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                    }
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a href="/" className="text-white text-[16px] font-['Plus Jakarta Sans'] bg-[#23298B] hover:bg-white hover:text-[#23298B] rounded-[8px] py-[10px] px-3 transition-colors duration-300 hidden sm:block">
                Get Started
              </a>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink
                      to={"#multiple-proposals"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                          : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                      }
                    >
                      Multiple proposals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"#jibrado"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                          : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                      }
                    >
                      Why Jibrado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"#partner-agents"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                          : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                      }
                    >
                      Partner Agents
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"#reviews"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                          : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                      }
                    >
                      Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"#faq"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ffffff] text-[16px] font-semibold transition-colors duration-500"
                          : "text-[16px] text-[#ffffff] font-normal transition-colors duration-500"
                      }
                    >
                      FAQ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
