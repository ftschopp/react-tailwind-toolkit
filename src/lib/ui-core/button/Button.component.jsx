import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  className,
  color,
  label,
  iconLeft,
  iconRight,
  isLoading,
  loadingText,
  icon,

  ...props
}) => {
  const bgColor = `bg-${color}-600 hover:bg-${color}-500`;
  const activeColor = `focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700`;
  // const cursor = isLoading ? 'cursor-not-allowed' : 'cursor-pointer';
  // const labelBtn = isLoading ? loadingText : label;
  // const padding = isLoading ? 'px-8' : 'px-12';
  return (
    <>
      <button
        className={`inline-flex justify-center items-center border border-transparent text-base leading-6 font-medium rounded-md 
        text-white ${bgColor} ${activeColor} transition ease-in-out duration-150 ${className}`}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {icon && <FontAwesomeIcon icon={icon} />}
        {!icon && label}
      </button>
    </>
  );
};

// Same approach for defaultProps too
Button.defaultProps = {
  className: '',
  color: 'blue',
  loadingText: '',
  type: 'button',
};

export default Button;
