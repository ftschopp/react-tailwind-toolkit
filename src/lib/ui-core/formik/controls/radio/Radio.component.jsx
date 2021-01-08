import React from 'react';
import { useField } from 'formik';
import TextError from '../common/TextError.component';

function Radio(props) {
  const { className, options, label, showCheck, ...rest } = props;

  const [field, meta] = useField(rest);
  console.log('meta', meta);
  return (
    <div className="flex flex-col">
      <label htmlFor={field.name} className="text-lg">
        {label}
      </label>

      <div className="flex">
        {options &&
          options.map((option) => {
            const { id, description } = option;
            return (
              <label key={id} className="inline-flex items-center pr-4">
                <input
                  className="h-4 w-4 border-gray-300 text-blue-500"
                  type="radio"
                  id={id}
                  {...field}
                  value={id}
                  checked={field.value === id}
                />
                <span htmlFor={id} className="ml-2">
                  {description}
                </span>
              </label>
            );
          })}
      </div>
      <TextError errorMessage={meta?.error} />
    </div>
  );
}

export default Radio;
