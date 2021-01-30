import React from 'react';

function Checkbox(props) {
  const { className, id, label, description, name, checked, color } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label>{label}</label>}
      <label className="inline-flex items-center pr-4">
        <input
          id={id}
          type="checkbox"
          className={`form-checkbox h-4 w-4 ${color} focus:ring-0 cursor-pointer`}
          name={name}
          value={id}
          checked={checked}
        />
        <span className="ml-2">{description}</span>
      </label>
    </div>
  );
}

Checkbox.defaultProps = {
  className: '',
  color: 'text-blue-600',
  checked: false,
};

export default Checkbox;
