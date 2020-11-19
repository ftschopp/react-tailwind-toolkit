import React from 'react';
import { isNilOrEmpty } from 'ramda-adjunct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SelectInput = ({
  className,
  label,
  error,
  hasError,
  options,
  selected,
  onClick,
  onClearSelection,
  onChange,
  onKeyDown,
  touched,
  onBlur,
  ...props
}) => {
  const showClearButton = !isNilOrEmpty(selected?.id);

  const errorClasses = `text-red-300 bg-red-100 border-red-300 
  focus:border-red-300 placeholder-red-600`;

  return (
    <div
      className={`bg-white border border-gray-300 cursor-pointer duration-150 ease-in-out 
      flex flex-column focus:border-blue-300 focus:outline-none focus:shadow-outline-blue 
      justify-betweenrelative rounded shadow-sm sm:leading-1 sm:text-sm text-left 
      transition w-full ${hasError ? errorClasses : ''} ${className}`}
    >
      <div className="w-full flex items-center p-1 pl-2">
        <input
          className="bg-transparent focus:outline-none w-full"
          type="text"
          value={selected?.description}
          onClick={onClick}
          onChange={onChange}
        />
      </div>
      <div className="flex items-center">
        {showClearButton && (
          <>
            <div
              aria-hidden="true"
              className="text-gray-400 flex box-border px-2"
              onClick={onClearSelection}
            >
              <FontAwesomeIcon icon={faTimes} />
              {/* <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-6q0nyr-Svg"
              >
                <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
              </svg> */}
            </div>
            <span className="self-stretch bg-gray-400 w-px box-border my-1"></span>
          </>
        )}
        <div
          aria-hidden="true"
          className="text-gray-400 flex p-1 box-border px-2"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faAngleDown} size="1x" />
          {/* <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="text-gray-400"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg> */}
        </div>
      </div>
    </div>
  );
};

SelectInput.defaultProps = {
  className: '',
};
export default SelectInput;
