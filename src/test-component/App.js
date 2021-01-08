import React, { useState } from 'react';

import '../tailwind.output.css';
import FormikContainer from './FormikContainer';

function App() {
  return (
    <div className="App px-64 py-32">
      {/* <Button className="py-2 w-32" label="Siguiente" type="submit" /> */}
      <h1>Probando Formik</h1>
      <FormikContainer />

      {/* <div className="flex">
        <div className="w-1/3 mx-2">
          <ProgressStepBar steps={steps} activeStep={1} />
          <Datepicker value={'2020-04-24T00:00:00'} />
          <Dropdown
            options={options}
            onBlur={() => console.log('blur')}
            onChange={null}
            touched={null}
            error={''}
            onChange={() => console.log('onChange')}
          />

          <Select options={options} />
          <Dropdown
            options={options}
            onChange={() => console.log('a')}
            onBlur={() => console.log('s')}
          />

          <Select
            options={options}
            value={id}
            onChange={(e) => {
              console.log('EVENT CHANGE', e);
              setId(e.id);
            }}
            error={id === '' ? 'Error' : ''}
          />
          <p className="h-64 bg-yellow-100">este es un parrafo cualquiera</p>
        </div>

        <div className="w-1/3 mx-2">
          <TextInput error={id === '' ? 'Error' : ''} showCheck={true} />
          <p className="h-64 bg-yellow-100">este es un parrafo cualquiera</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
