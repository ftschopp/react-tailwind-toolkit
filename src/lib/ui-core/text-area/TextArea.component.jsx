import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { isNil, isEmpty } from 'ramda';

const isNilOrEmpty = (value) => isNil(value) || isEmpty(value);

const TextArea = ({ label, touched, error, ...props }) => {
  const hasError = !isNilOrEmpty(error);

  const errorClasses = `text-red-300 bg-red-100 border-red-300 
    focus:border-red-300 placeholder-red-600`;

  return (
    <>
      <div className="relative flex w-full flex-wrap items-stretch">
        <textarea
          type="text"
          placeholder="Placeholder"
          className={`resize-none px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white border border-gray-400 rounded text-sm shadow outline-none focus:outline-none focus:border-blue-300 w-full
            ${hasError ? 'pr-10' : ''} ${hasError ? errorClasses : ''}`}
          {...props}
        />
        {touched && !hasError && (
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-green-700 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 py-2">
            <FontAwesomeIcon
              className={` ${hasError ? 'text-green-700' : ''}`}
              icon={faCheck}
            />
          </span>
        )}
        {hasError && (
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 py-2">
            <FontAwesomeIcon
              className={`text-gray-500 text-red-700`}
              icon={faTimes}
            />
          </span>
        )}
        <p className="text-xs text-red-600 h-5">{hasError ? error : ''}</p>
      </div>
    </>
  );
};

// Same approach for defaultProps too
TextArea.defaultProps = {
  icon: null,
};

export default TextArea;
