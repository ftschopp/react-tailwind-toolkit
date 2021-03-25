import React from 'react';

function CalendarInput({ name, value, onClick, hasError }) {
  const iconClass = `flex z-10 leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center h-8 w-8 right-0 cursor-pointer`;
  const errorClasses = `text-red-300 bg-red-100 border-red-300 
    focus:border-red-300 placeholder-red-600`;
  return (
    <div className="flex w-full max-h-8 h-8">
      <input
        name={name}
        readOnly={true}
        type="text"
        className={`pl-2 placeholder-gray-400 relative bg-white bg-white border border-gray-300 rounded text-sm shadow-sm outline-none focus:outline-none focus:border-blue-300 w-full cursor-pointer focus:ring-0 ${
          hasError ? errorClasses : ''
        }`}
        value={value}
        onClick={onClick}
      />
      <span className={iconClass} onClick={onClick}>
        <div className="px-3 py-2">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </span>
    </div>
  );
}

export default CalendarInput;
