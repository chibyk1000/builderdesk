import React from "react";

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_113_4329)">
        <path
          d="M6.29998 11.5498C9.19947 11.5498 11.55 9.19928 11.55 6.2998C11.55 3.40031 9.19947 1.0498 6.29998 1.0498C3.40049 1.0498 1.04999 3.40031 1.04999 6.2998C1.04999 9.19928 3.40049 11.5498 6.29998 11.5498Z"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.72498 6.3L5.77497 7.35L7.87497 5.25"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_4329">
          <rect width="12.6" height="12.6" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
