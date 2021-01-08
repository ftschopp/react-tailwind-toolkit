import React from 'react';
import { useField } from 'formik';
import TextError from '../common/TextError.component';

function Checkbox(props) {
  const { className, options, label, showCheck, ...rest } = props;

  const [field, meta] = useField(rest);

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
                  id={id}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-red-600 focus:ring-0 cursor-pointer"
                  {...field}
                  value={id}
                  checked={field.value.includes(id)}
                />
                <span htmlFor={id} className="ml-2">
                  {description}
                </span>
              </label>
            );
          })}
      </div>
      <TextError errorMessage={meta.touched && meta?.error} />
    </div>
  );
}

export default Checkbox;
