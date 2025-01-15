const LeftArrowIcon = ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={24}
    
      viewBox="0 0 128 128" // Updated viewBox to fit the path
      className={className}
      {...props}
    >
      <path
      d="M84 108a3.988 3.988 0 0 1-2.828-1.172l-40-40a3.997 3.997 0 0 1 0-5.656l40-40c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656L49.656 64l37.172 37.172a3.997 3.997 0 0 1 0 5.656A3.988 3.988 0 0 1 84 108z"
      fill="currentColor"
    />
    </svg>
  );
  
  export default LeftArrowIcon;
  