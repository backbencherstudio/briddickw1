
import { Link } from "react-router-dom";

const Button = ({ buttonText, buttonLink }) => {
  return (
    <Link
      to={buttonLink}
      className="flex items-center justify-center gap-[10px] px-6 py-[17px] text-white hover:text-[#23298B] bg-[#23298B] hover:bg-white border border-transparent hover:border-[#23298B] transition-colors duration-500 rounded-[8px]"
    >
      <p className="text-[14px] font-['Montserrat'] font-medium leading-[140%]">
        {buttonText}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29"
        viewBox="0 0 28 29"
        fill="none"
      >
        <path
          d="M9.96015 8.9682L18.0833 7.53588C18.1912 7.51684 18.3012 7.51953 18.4095 7.5435C18.5172 7.567 18.6183 7.6115 18.7071 7.67363C18.7958 7.73577 18.8718 7.81631 18.9311 7.90876C18.9907 8.00236 19.0308 8.10477 19.0499 8.2127L20.4822 16.3358C20.5622 16.7896 20.2601 17.2211 19.8063 17.3011C19.3525 17.3811 18.9211 17.079 18.841 16.6252L17.7578 10.4821L10.3081 21.1215C10.0442 21.4983 9.52496 21.5905 9.14747 21.3262C8.76998 21.0618 8.67898 20.5424 8.94282 20.1656L16.3926 9.52618L10.2495 10.6094C9.79574 10.6894 9.36428 10.3873 9.28426 9.93348C9.20424 9.47968 9.50636 9.04822 9.96015 8.9682Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
};

export default Button;
