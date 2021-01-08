import React from 'react';
import { useField, useFormikContext } from 'formik';
import Select from './Select.component';

const MySelect = ({ options, label, onChange, ...props }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(props);

  /**
   * Will manually set the value belong to the name props in the Formik form using setField
   */
  function handleOptionChange(selection) {
    setFieldValue(props.name, selection.id);
    onChange && onChange(selection);
  }

  /**
   * Manually updated the touched property for the field in Formik
   */
  function updateBlur() {
    setFieldTouched(props.name, true);
  }

  return (
    <>
      <label className="text-xs" htmlFor={props.id || props.name}>
        {label}
      </label>
      <Select
        options={options}
        value={field.value}
        {...field}
        {...props}
        onBlur={updateBlur}
        onChange={handleOptionChange}
        touched={meta.touched}
        error={meta.touched && meta.error ? meta.error : ''}
      />
    </>
  );
};

export default MySelect;
