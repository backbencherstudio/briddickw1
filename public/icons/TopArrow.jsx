const TopArrowIcon = ({ className, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={512}
      height={512}
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        d="M19 5.5v11a.5.5 0 0 1-1 0V6.707L5.854 18.854a.5.5 0 0 1-.708-.708L17.293 6H7.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .351.144l.003.002A.5.5 0 0 1 19 5.5z"
        fill="currentColor"
      />
    </svg>
  );
  
  export default TopArrowIcon;
  