import React from 'react';

type Dimension = 'sm' | 'md' | 'lg' | 'xl';
type Styled = 'outline' | 'filled';
type Color = 'default' | 'primary' | 'secondary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  dimension: Dimension;
  styled: Styled;
  color: Color;
  isLoading: boolean;
}

const LoadingComponent = ({ color, sizeClasses }: any) => {
  return (
    <svg
      className={`flex justify-center animate-spin ${sizeClasses} text-${color} mr-2`}
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

const heightSizeClasses = {
  sm: 'h-6 max-h-6',
  md: 'h-8 max-h-8 text-xs',
  lg: 'h-10 max-h-10',
  xl: 'h-12 max-h-12',
};

const iconSizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
  xl: 'h-5 w-5',
};
const appareanceClasses = {
  default: `bg-gray-50 border text-gray-600 hover:bg-gray-100 hover:border-gray-300 disabled:cursor-default `,
  primary: `border text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-200 disabled:cursor-default hover:border-gray-200 `,
  secondary: `border text-white bg-green-500 hover:bg-green-600 disabled:bg-green-300 disabled:cursor-default hover:border-gray-200 `,
};

const baseClasses = 'flex items-center font-mono px-5 rounded';

export const Button = ({
  color,
  dimension,
  isLoading,
  styled,
  disabled,
  label,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${heightSizeClasses[dimension]} ${baseClasses} ${appareanceClasses[color]} `}
      disabled={disabled}
      {...rest}
    >
      {isLoading && (
        <LoadingComponent
          color="gray-300"
          sizeClasses={iconSizeClasses[dimension]}
        />
      )}
      {label}
    </button>
  );
};
Button.defaultProps = {
  styled: 'filled',
  dimension: 'md',
  color: 'default',
  disabled: false,
  isLoading: false,
};
