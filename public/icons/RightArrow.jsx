const RightArrowIcon = ({ className, ...props }) => (
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
        d="M44 108a3.988 3.988 0 0 1-2.828-1.172 3.997 3.997 0 0 1 0-5.656L78.344 64 41.172 26.828c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l40 40a3.997 3.997 0 0 1 0 5.656l-40 40A3.988 3.988 0 0 1 44 108z"
        fill="currentColor"
      />
    </svg>
  );
  
  export default RightArrowIcon;
  