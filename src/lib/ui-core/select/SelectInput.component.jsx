import React from 'react';
import { isNilOrEmpty } from 'ramda-adjunct';
import { Icon } from '../../icons';
// import { Fo ntAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
      justify-between relative rounded shadow-sm sm:leading-1 sm:text-sm text-left 
      transition w-full ${hasError ? errorClasses : ''} ${className}`}
    >
      <div className="w-full flex items-center pl-2">
        <input
          readOnly={true}
          className={`cursor-pointer py-1 pl-2 placeholder-gray-400 relative bg-transparent border border-transparent rounded focus:ring-0
          text-sm focus:outline-none w-full focus:border-transparent ${
            !selected ? 'text-gray-400' : ''
          }`}
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
              <Icon name="cross" className="fill-current text-gray-500" />
            </div>
            <span className="self-stretch bg-gray-400 w-px box-border my-1"></span>
          </>
        )}
        <div
          aria-hidden="true"
          className="text-gray-400 flex p-1 box-border px-2"
          onClick={onClick}
        >
          <Icon name="chevron-down" className="fill-current text-gray-500" />
        </div>
      </div>
    </div>
  );
};

SelectInput.defaultProps = {
  className: '',
};
export default SelectInput;
