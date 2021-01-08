import React from 'react';
import { useField } from 'formik';
import TextError from '../common/TextError.component';
import InputIcon from '../common/InputIcon.component';
import {
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

function TextInput(props) {
  const { className, icon, label, showCheck, ...rest } = props;

  const [field, meta] = useField(rest);
  const hasError = meta.touched && meta.error;
  const errorClasses = `text-red-300 bg-red-100 border-red-300 
    focus:border-red-300 placeholder-red-600`;

  const rightIcon = hasError
    ? faExclamationTriangle
    : showCheck
    ? faCheck
    : null;

  const fieldClassName = `py-1 pl-2 placeholder-gray-400 relative bg-white bg-white border border-gray-300 rounded focus:ring-0
  text-sm shadow-sm focus:outline-none w-full ${icon ? 'pl-10' : ''} ${
    hasError ? 'pr-10 focus:border-red-300' : 'focus:border-blue-300'
  } ${hasError ? errorClasses : ''}`;
  return (
    <>
      <label htmlFor={field.name} className="text-lg">
        {label}
      </label>
      <div className={`relative flex flex-wrap items-stretch ${className}`}>
        <div className="flex w-full">
          <InputIcon className="pl-3" icon={icon} />
          <input className={fieldClassName} {...field} {...rest} />
          {meta.touched && (
            <InputIcon
              className="right-0"
              iconClassName={`${hasError ? 'text-red-700' : 'text-green-700'}`}
              icon={rightIcon}
            />
          )}
        </div>
      </div>
      <TextError errorMessage={meta.touched && meta?.error} />
    </>
  );
}
TextInput.defaultProps = {
  className: '',
  icon: null,
  showCheck: true,
};

export default TextInput;
