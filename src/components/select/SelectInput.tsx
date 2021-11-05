import React from 'react';
import { heightSizeClasses } from '../utils/classes.utils';
import { SelectOption } from './Select.component';

type SelectInputProp = {
  name?: string;
  isOpen: boolean;
  value?: SelectOption;
  dimension: 'sm' | 'md' | 'lg' | 'xl';
  onClick: any;
};
function SelectInput({
  isOpen,
  name,
  value,
  dimension,
  onClick,
}: SelectInputProp) {
  return (
    <div
      className={`flex items-center space-between border rounded hover:cursor-pointer h-8 ${
        heightSizeClasses[dimension]
      } ${isOpen ? 'rounded-b-none' : ''} divide-x-2`}
    >
      <div className="w-full">
        <input
          name={name}
          className="w-full border-0 focus:outline-none px-2 text-xs"
          value={value?.title}
          onClick={onClick}
        />
      </div>
      <div>
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="fill-current text-gray-400 mx-2"
          onClick={onClick}
        >
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </div>
    </div>
  );
}

export default SelectInput;
