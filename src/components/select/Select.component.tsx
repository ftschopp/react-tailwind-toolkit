import React, { useState, useRef, useCallback } from 'react';
import SelectInput from './SelectInput';
import SelectList from './SelectList';
import useOnClickOutside from '../../hooks/click-outside';

type Dimension = 'sm' | 'md' | 'lg' | 'xl';

export type SelectOption = {
  key: string;
  heading?: string;
  title: string;
};

export interface SelectProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: [SelectOption];
  dimension: Dimension;
  touched: boolean;
  validationMessage: string;
  selectedValue?: SelectOption;

  // isInvalid: boolean;
  // validationMessage: string;
  // description?: string;
  // required: boolean;
  // error: string;
  // touched: boolean;
  // isOpen: boolean;
  // value: any;
  // name: string;
}

export const Select = ({
  dimension,
  label,
  name,
  touched,
  validationMessage,
  selectedValue,
  options,
  onChange,
  onBlur,
}: SelectProps) => {
  const ref = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const hasError = touched && validationMessage != '';
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  const onOptionClick = useCallback(
    (opt) => {
      console.log('clicked option', opt);
      setIsOpen(false);
      onChange && onChange(opt);
    },
    [isOpen, onChange]
  );

  const onClick = useCallback(
    (e) => {
      setIsOpen(!isOpen);
      onBlur && onBlur(e);
    },
    [isOpen, onBlur]
  );

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-gray-900">
        {label}
      </label>
      <div ref={ref} className="relative flex flex-col">
        <SelectInput
          dimension={dimension}
          isOpen={isOpen}
          value={selectedValue}
          name={name}
          onClick={onClick}
        />
        {isOpen && (
          <SelectList
            value={selectedValue}
            options={options}
            onOptionClick={onOptionClick}
          />
        )}
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
Select.defaultProps = {
  name: '',
  className: 'w-full',
  dimension: 'md',
  validationMessage: '',
};
