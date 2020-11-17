import React from 'react';

const Checkbox = ({ label, value, bgColor, textColor, ...props }) => {
  return (
    <label className="inline-flex items-center mt-3">
      <input
        type="checkbox"
        className={`form-checkbox h-5 w-5 ${bgColor}`}
        defaultChecked={value}
      />
      <span className={`ml-2 ${textColor}`}>{label}</span>
    </label>
  );
};

Checkbox.defaultProps = {
  bgColor: 'text-gray-600',
  textColor: 'text-gray-700',
  value: false,
};

export default Checkbox;
