import React from 'react';
import { SelectOption } from './Select.component';

type ItemProps = {
  value: SelectOption;
  option: any;
  onClick: any;
};

type SelectListProps = {
  value: any;
  options: [SelectOption];
  onOptionClick: any;
};

const Item = ({ value, option, onClick }: ItemProps) => {
  const { title, key } = option;
  const isSelected = key === value?.key;
  return (
    <div
      onClick={() => onClick(option)}
      className={`p-2 text-xs h-8 bg-white cursor-pointer ${
        isSelected
          ? 'border-l-2 border-l-indigo-600 text-indigo-700 bg-indigo-100'
          : 'hover:bg-gray-50'
      }`}
    >
      {title}
    </div>
  );
};

function SelectList({ value, options, onOptionClick }: SelectListProps) {
  return (
    <div className="absolute top-8 w-full border border-t-0 rounded-b z-10 h-48 max-h-64 overflow-y-scroll divide-y">
      {options.map((x: SelectOption) => {
        return (
          <Item key={x.key} value={value} option={x} onClick={onOptionClick} />
        );
      })}
    </div>
  );
}

export default SelectList;
