import React, { useRef, useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { isNil, isEmpty } from 'ramda';

const isNilOrEmpty = (value) => isNil(value) || isEmpty(value);

const Dropdown = ({
  label,
  error,
  value,
  touched,
  onChange,
  onBlur,
  ...props
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [showOptions, setShowOptions] = useState(false);

  const hasError = !isNilOrEmpty(error);
  //   const errorClasses =
  //     'text-red-300 bg-red-100 border-red-300 focus:border-red-300 placeholder-red-600';
  const { options } = props;
  const selectedValue = options.find((x) => x.id === value);
  const [selected, setSelected] = useState(selectedValue);

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert('You clicked outside of me!');
          setShowOptions(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const onKeyPress = useCallback((event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setShowOptions(false);
    }
  }, []);

  return (
    <div className="space-y-1" tabIndex="0" ref={wrapperRef}>
      <div className="relative">
        <span className="inline-block w-full rounded-md shadow-sm h-8 max-h-8">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className={`shadow-sm cursor-pointer relative w-full rounded border border-gray-300 bg-white pl-2 pr-10 py-1 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-1
            ${
              hasError && !showOptions
                ? ' bg-red-100 border border-red-400 text-red-600'
                : ''
            }`}
            onClick={() => {
              setShowOptions(!showOptions);
              onBlur();
            }}
            onKeyPress={onKeyPress}
            // onBlur={() => setShowOptions(false)}
          >
            <div className="flex items-center space-x-3">
              {selected && (
                <span className="block truncate">{selected.description}</span>
              )}
              {!selected && (
                <span className="block truncate">Seleccione una opción</span>
              )}
            </div>
            {!hasError && (
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.0"
                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                  ></path>
                </svg>
              </span>
            )}
            {hasError && !showOptions && (
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-base">
                <FontAwesomeIcon
                  className={`text-gray-500 text-red-700`}
                  icon={faTimes}
                />
              </span>
            )}
          </button>
        </span>

        {showOptions && (
          <div className="z-20 absolute w-full rounded-md bg-white shadow-md max-h-40">
            <ul
              tabIndex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="rounded-md text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5 max-h-24 overflow-y-scroll"
            >
              {options &&
                options.map((x) => (
                  <li
                    key={x.id}
                    id="listbox-item-0"
                    role="option"
                    className="text-gray-900 cursor-default select-none relative py-1 pl-3 pr-9 cursor-pointer hover:bg-blue-100"
                    onClick={() => {
                      setSelected(x);
                      setShowOptions(!showOptions);
                      onChange(x);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-normal block truncate">
                        {x.description}
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      {hasError && !showOptions ? (
        <p className="text-xs text-red-600">{error}</p>
      ) : null}
    </div>
  );
};

export default Dropdown;
