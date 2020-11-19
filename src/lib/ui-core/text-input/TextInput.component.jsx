import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { isNil, isEmpty } from 'ramda';

const isNilOrEmpty = (value) => isNil(value) || isEmpty(value);

const TextInput = ({
  name,
  className,
  label,
  value,
  type,
  placeholder,
  icon,
  showOk,
  touched,
  error,
  onChange,
  autocomplete,
  ...props
}) => {
  const hasError = !isNilOrEmpty(error);
  const hasValue = !isNilOrEmpty(props.value);
  const errorClasses = `text-red-300 bg-red-100 border-red-300 
    focus:border-red-300 placeholder-red-600`;

  const showCheck = showOk && hasValue && !hasError;
  // const textColor = showCheck ? 'text-green-700' : hasError ? '' : 'text-gray-400';
  const iconClass = `flex z-10 leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 `;
  const rightIcon = showCheck
    ? faCheck
    : hasError
    ? faExclamationTriangle
    : null;
  return (
    <>
      <div className={`relative flex flex-wrap items-stretch ${className}`}>
        <div className="flex w-full">
          {icon && (
            <span className={`${iconClass} pl-3`}>
              <FontAwesomeIcon className="text-gray-500" icon={icon} />
            </span>
          )}
          <input
            type="text"
            autocomplete={autocomplete}
            className={`py-1 pl-2 placeholder-gray-400 relative bg-white bg-white border border-gray-300 rounded text-sm shadow-sm outline-none focus:outline-none focus:border-blue-300 w-full ${
              icon ? 'pl-10' : ''
            }  ${hasError ? 'pr-10' : ''} ${hasError ? errorClasses : ''}`}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange ? onChange : null}
          />
          <span className={`${iconClass} right-0`}>
            {rightIcon && (
              <FontAwesomeIcon
                className={`${hasError ? 'text-red-700' : 'text-green-700'}`}
                icon={rightIcon}
              />
            )}
          </span>
          {/* <div className="absolute top-0 z-10 w-32 p-2 -mt-1 text-sm leading-tight text-white transform -translate-x-1/2 -translate-y-full bg-orange-500 rounded-lg shadow-lg">
            Hi, I am Tooltip
          </div> */}
        </div>
      </div>
      <p className="text-xs text-red-600 h-5">{hasError ? error : ''}</p>
    </>
  );
};

// Same approach for defaultProps too
TextInput.defaultProps = {
  icon: null,
  className: '',
};

export default TextInput;
