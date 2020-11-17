import React from 'react';

const RadioButton = ({
  label,
  name,
  options,
  bgColor,
  textColor,
  ...props
}) => {
  return (
    <div className="mt-4">
      <span className="text-gray-700">{label}</span>
      <div className="mt-2">
        {options &&
          options.map((option) => {
            const { id, description } = option;
            return (
              <label key={id} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name={name}
                  value={id}
                />
                <span className="ml-2">{description}</span>
              </label>
            );
          })}
      </div>
    </div>
  );
};

RadioButton.defaultProps = {};

export default RadioButton;
