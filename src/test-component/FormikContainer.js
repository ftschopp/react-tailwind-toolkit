import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../lib/ui-core/formik/FormikControl.component';

function FormikContainer() {
  const initialValues = {
    email: '',
    comments: '',
    colors: [],
    country: '',
    birthdate: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    // comments: Yup.string().required(),
    // colors: Yup.array().min(1).required(),
    // transport: Yup.string().required(),
    country: Yup.string().required(),
    birthdate: Yup.string().required(),
  });
  const onSubmit = (values) => console.log('form data', values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            name="email"
            label="Email"
          />

          <FormikControl
            control="select"
            name="country"
            label="Paises"
            options={[
              { id: '1', description: 'Argentina' },
              { id: '2', description: 'Brasil' },
              { id: '3', description: 'Uruguay' },
              { id: '4', description: 'Paraguay' },
              { id: '5', description: 'Chile' },
              { id: '6', description: 'Bolivia' },
              { id: '7', description: 'Peru' },
            ]}
          />

          <FormikControl
            control="date"
            type="text"
            name="birthdate"
            label="Fecha de nacimiento"
          />

          {/* <FormikControl
            control="textarea"
            type="text"
            name="comments"
            label="Comments"
            rows="5"
          />

          <FormikControl
            control="radio"
            name="transport"
            label="Transport Option"
            options={[
              { id: '1', description: 'Auto' },
              { id: '2', description: 'Colectivo' },
            ]}
          />

          <FormikControl
            control="checkbox"
            name="colors"
            label="Colors"
            options={[
              { id: '1', description: 'Red' },
              { id: '2', description: 'Blue' },
            ]}
          /> */}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
