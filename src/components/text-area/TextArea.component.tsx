import React from 'react';
import Icon from '../icon/Icon.component';
import { Size } from '../types/types';
import { heightSizeClasses } from '../utils/classes.utils';

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  size: Size;
  isInvalid: boolean;
  validationMessage: string;
  description?: string;
  required: boolean;
  error: string;
  touched: boolean;
}

export const TextArea = ({
  className,
  name,
  // icon,
  size,
  label,
  description,
  touched,
  error,
  validationMessage,
  // autocomplete,
  ...rest
}: TextAreaProps) => {
  const errorClasses = `text-red-500 border-red-300 focus:border-red-300 placeholder-red-600`;
  const inputClasses = `p-2 placeholder-gray-400 relative bg-white bg-white border rounded focus:ring-0 shadow-sm focus:outline-none w-full`;
  const inputSizeClasses = heightSizeClasses[size];
  const hasError = touched && validationMessage != '';
  return (
    <div className="relative flex flex-col flex-wrap items-stretch space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-gray-900">
        {label}
      </label>
      {description && <p className="text-xs text-gray-500">{description}</p>}
      <div className={`relative flex flex-wrap items-stretch ${className}`}>
        <div className="flex w-full">
          {/* <InputIcon className="pl-3" icon={icon} /> */}
          {/* <Icon name={rightIconName} className={`pl-3 fill-current `} /> */}
          <textarea
            className={`${inputClasses} ${inputSizeClasses} ${
              hasError ? errorClasses : ''
            }`}
            name={name}
            {...rest}
          />
          {/* {touched && (
            <div className="flex z-10 leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 right-0">
              <Icon
                name={rightIconName}
                className={`fill-current ${
                  hasError ? 'text-red-700' : 'text-green-700'
                }`}
              />
            </div>
          )} */}
        </div>
        {hasError && (
          <div className="flex items-center py-1 space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs text-red-500">{validationMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};
TextArea.defaultProps = {
  className: 'w-full',
  icon: null,
  showCheck: true,
  size: 'md',
  description: null,
};
