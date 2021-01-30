import React from 'react';
import Checkbox from '../checkbox/Checkbox.component';

function CheckboxGroup(props) {
  const {
    className,
    inline,
    label,
    options,
    name,
    optionsChecked,
    error,
  } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="text-lg">
        {label}
      </label>
      <div className={`flex ${inline ? '' : 'flex-col'}`}>
        {options &&
          options.map((option) => {
            const { id, color, description } = option;
            return (
              <Checkbox
                color={color}
                description={description}
                checked={optionsChecked.includes(id)}
              />
            );
          })}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

CheckboxGroup.defaultProps = {
  className: '',
  label: '',
  inline: false,
};

export default CheckboxGroup;
