import React, { useState, useCallback } from 'react';

import TextAutocompleteInput from './TextAutocompleteInput.component';
import { withKnobs } from '@storybook/addon-knobs';
import { filter, compose, includes, propOr, toLower } from 'ramda';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/TextAutocompleteInput',
  component: TextAutocompleteInput,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
    loading: { control: 'boolean' },
    showSuggestions: { control: 'boolean' },
    value: { control: 'text' },
  },
};

export const Standard = args => {
  // const [value, setValue] = useState('Juan');

  const employees = [
    { id: '1', name: 'Juan Pedro Hacha', document: 'Legajo 78411515' },
    { id: '2', name: 'Juan Carlos Gonzalez', document: 'Legajo 78411515' },
    { id: '3', name: 'Juan Pablo Gonzalez', document: 'Legajo 78411515' },
    { id: '4', name: 'Juana Lopez', document: 'Legajo 78411515' },
    { id: '5', name: 'Fernando Tschoppp', document: 'Legajo 33035151' },
    { id: '6', name: 'Pablo Garcia', document: 'Legajo 342566' },
    { id: '7', name: 'Samantha Se Labanca', document: 'Legajo 1111111' },
    { id: '8', name: 'Maria Lopez', document: 'Legajo 67895432677' },
  ];

  const [open, setOpen] = useState(false);
  const getEmployeesFiltered = useCallback(
    (lista, value) =>
      filter(compose(includes(toLower(value)), toLower, propOr('', 'name')))(employees),
    [employees],
  );
  const [listaEmployees, setListaEmployees] = useState([]);
  const [value, setValue] = useState();
  const onSearch = useCallback(
    value => {
      setTimeout(() => {
        const lista = value !== '' ? getEmployeesFiltered(employees, value) : [];
        setListaEmployees(lista);
      }, 800);
    },
    [employees, getEmployeesFiltered],
  );

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <TextAutocompleteInput
        name="employeeName"
        type="text"
        fieldValue="name"
        fieldTitle="document"
        placeholder="Ingrese una descripción general"
        value={value}
        options={listaEmployees}
        onSearch={onSearch}
        onChange={handleChange}
        onOptionClick={opt => {
          setValue(opt.name);
        }}
      />
      <h1>algo</h1>
    </div>
  );
};

export const WithoutResult = args => {
  const [value, setValue] = useState('Juan');

  const options = [];
  return (
    <div>
      <TextAutocompleteInput
        label="Username"
        {...args}
        showSuggestions={true}
        value={value}
        className="w-64"
        options={options}
        fieldValue="name"
        fieldTitle="document"
        error=""
        touched={false}
        onOptionClick={e => alert(JSON.stringify(e))}
        onChange={e => setValue(e.target.value)}
      />
      <h1>algo</h1>
    </div>
  );
};

export const WithError = args => {
  const [value, setValue] = useState('Juan');

  const options = [];
  return (
    <div>
      <TextAutocompleteInput
        label="Username"
        {...args}
        value={value}
        className="w-64"
        options={options}
        fieldValue="name"
        fieldTitle="document"
        error="Campo requerido"
        touched={true}
        onOptionClick={e => alert(JSON.stringify(e))}
        onChange={e => setValue(e.target.value)}
        onBlur={e => alert('On Blur')}
      />
    </div>
  );
};
