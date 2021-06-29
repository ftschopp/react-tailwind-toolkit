import React from 'react';
import { Icon } from '../../icons';

const LoadingComponent = ({}) => {
  return (
    <svg
      className="flex justify-center w-full animate-spin h-5 w-5 text-white"
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
  );
};

const ButtonContent = ({
  leftIcon,
  leftIconClassName,
  rightIcon,
  rightIconClassName,
  children,
}) => {
  return (
    <>
      <span className="flex justify-center w-8 px-2">
        {leftIcon && (
          <Icon name={leftIcon} width="18px" height="18px" className={leftIconClassName} />
        )}
      </span>
      <span className="w-full text-sm text-white py-1">{children}</span>
      <span className="flex justify-center w-8 px-2">
        {rightIcon && (
          <Icon name={rightIcon} width="16px" height="16px" className={rightIconClassName} />
        )}
      </span>
    </>
  );
};

const Button = ({
  className,
  leftIcon,
  leftIconClassName,
  rightIcon,
  rightIconClassName,
  isLoading,
  loadingText,
  children,
  ...props
}) => {
  const cursor = isLoading ? 'cursor-not-allowed' : 'cursor-pointer';
  const classes = `w-32 border border-gray-light inline-flex items-center rounded-md transition
  ease-in-out duration-150 ${cursor}`;
  const focusClasses = `focus:outline-none`;
  const hoverClasses = `hover:bg-gray-100 hover:border-gray-400`;
  const textClasses = `text-base leading-6 font-medium`;

  return (
    <>
      <button
        className={`${classes} ${focusClasses} ${textClasses} ${hoverClasses} ${className}`}
        {...props}
      >
        {isLoading && <LoadingComponent />}
        {!isLoading && (
          <ButtonContent
            leftIcon={leftIcon}
            leftIconClassName={leftIconClassName}
            rightIcon={rightIcon}
            rightIconClassName={rightIconClassName}
            children={children}
          />
        )}
      </button>
    </>
  );
};

// Same approach for defaultProps too
Button.defaultProps = {
  className: 'bg-blue-200',
  leftIcon: '',
  rightIcon: '',
  loadingText: '',
};

export default Button;
