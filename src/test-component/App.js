import React, { useState } from 'react';
import { Datepicker, Dropdown, Select, TextInput } from '../lib';
import '../tailwind.output.css';

function App() {
  const options = [
    { id: '1', description: 'opcion A' },
    { id: '2', description: 'opcion B' },
    { id: '3', description: 'opcion C' },
    { id: '4', description: 'opcion D' },
    { id: '5', description: 'opcion E' },
    { id: '6', description: 'opcion F' },
    { id: '7', description: 'opcion G' },
    { id: '8', description: 'opcion H' },
    { id: '9', description: 'opcion I' },
    { id: '10', description: 'opcion J' },
    { id: '11', description: 'opcion K' },
    { id: '12', description: 'opcion L' },
    { id: '13', description: 'opcion M' },
  ];

  const [id, setId] = useState('');
  return (
    <div className="App">
      {/* <Button className="py-2 w-32" label="Siguiente" type="submit" /> */}

      <div className="flex">
        <div className="w-1/3 mx-2">
          {/* <Datepicker value={'2020-04-24T00:00:00'} /> */}
          {/* <Dropdown
            options={options}
            onBlur={() => console.log('blur')}
            onChange={null}
            touched={null}
            error={''}
            onChange={() => console.log('onChange')}
          /> */}

          {/* <Select options={options} /> */}
          {/* <Dropdown
            options={options}
            onChange={() => console.log('a')}
            onBlur={() => console.log('s')}
          /> */}

          <Select
            options={options}
            onChange={(e) => {
              console.log('EVENT CHANGE', e);
              setId(e.id);
            }}
            error={id === '' ? 'Error' : ''}
          />
          <p className="h-64 bg-yellow-100">este es un parrafo cualquiera</p>
        </div>

        <div className="w-1/3 mx-2">
          <TextInput error={id === '' ? 'Error' : ''} />
          <p className="h-64 bg-yellow-100">este es un parrafo cualquiera</p>
        </div>
      </div>
    </div>
  );
}

export default App;
