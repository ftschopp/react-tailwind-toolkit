import React from 'react';
import { Icon } from '../../icons';
// import InputIcon from '../input-icon/InputIcon.component';

// import {
//   faCheck,
//   faExclamationTriangle,
// } from '@fortawesome/free-solid-svg-icons';

function TextInput(props) {
  const {
    className,
    name,
    icon,
    label,
    showCheck,
    touched,
    error,
    autocomplete,
    ...rest
  } = props;

  const hasError = touched && error;
  const errorClasses = `text-red-300 bg-red-100 border-red-300 
    focus:border-red-300 placeholder-red-600`;

  const rightIconName = hasError ? 'cross' : showCheck ? 'tick' : null;

  const fieldClassName = `py-1 pl-2 placeholder-gray-400 relative bg-white bg-white border border-gray-300 rounded focus:ring-0
  text-sm shadow-sm focus:outline-none w-full ${icon ? 'pl-10' : ''} ${
    hasError ? 'pr-10 focus:border-red-300' : 'focus:border-blue-300'
  } ${hasError ? errorClasses : ''}`;
  return (
    <div className="relative flex flex-col flex-wrap items-stretch">
      <label htmlFor={name} className="text-sm text-gray-600">
        {label}
      </label>
      <div className={`relative flex flex-wrap items-stretch ${className}`}>
        <div className="flex w-full">
          {/* <InputIcon className="pl-3" icon={icon} /> */}
          {/* <Icon name={rightIconName} className={`pl-3 fill-current `} /> */}
          <input className={fieldClassName} name={name} {...rest} />
          {touched && (
            <div className="flex z-10 leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 right-0">
              <Icon
                name={rightIconName}
                className={`fill-current ${
                  hasError ? 'text-red-700' : 'text-green-700'
                }`}
              />
            </div>
          )}
        </div>
        {touched && error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    </div>
  );
}
TextInput.defaultProps = {
  className: 'w-full',
  icon: null,
  showCheck: true,
};

export default TextInput;
