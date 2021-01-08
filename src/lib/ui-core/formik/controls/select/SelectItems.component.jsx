import React from 'react';

const SelectItems = ({ options, onClick, ...props }) => {
  const hasOptions = options && options.length > 0;

  return (
    <div className="absolute bg-white border border-gray-300 max-h-24 mt-1 overflow-y-scroll rounded-md w-full z-20">
      <ul
        tabIndex="-1"
        className="text-base leading-6 overflow-auto focus:outline-none sm:text-sm sm:leading-5 max-h-24 overflow-y-scroll"
      >
        {options &&
          options.map((option) => (
            <li
              key={option.id}
              id="listbox-item-0"
              className="text-gray-900 cursor-default select-none relative py-1 pl-3 pr-9 cursor-pointer hover:bg-blue-100"
              onClick={() => onClick(option)}
            >
              <div className="flex items-center space-x-2">
                <span className="font-normal block truncate">
                  {option.description}
                </span>
              </div>
            </li>
          ))}
        {!hasOptions && (
          <p className="flex items-center justify-center h-100">
            No hay elementos
          </p>
        )}
      </ul>
    </div>
  );
};

export default SelectItems;
