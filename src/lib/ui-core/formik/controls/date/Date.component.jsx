import React from 'react';
import { Field, useField } from 'formik';

import Datepicker from '../../../datepicker/Datepicker.component';
import TextError from '../common/TextError.component';
function Date(props) {
  const { label, ...rest } = props;

  const [field, meta] = useField(rest);

  return (
    <div className="flex flex-col">
      <label htmlFor={field.name} className="text-lg">
        {label}
      </label>

      <div className="flex">
        <Field name={field.name}>
          {({ form, field }) => {
            const { setFieldValue, setFieldTouched } = form;
            const { value } = field;
            return (
              <Datepicker
                hasError={meta.touched && meta.error}
                value={value}
                onChange={(val) => setFieldValue(field.name, val)}
                onBlur={() => setFieldTouched(field.name, true)}
              />
            );
          }}
        </Field>
      </div>
      <TextError errorMessage={meta.touched && meta?.error} />
    </div>
  );
}

export default Date;
