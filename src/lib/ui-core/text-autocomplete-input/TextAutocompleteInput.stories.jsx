import React, { useState } from 'react';

import TextAutocompleteInput from './TextAutocompleteInput.component';
import { withKnobs } from '@storybook/addon-knobs';

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

  const options = [
    { name: 'Juan Pedro Hacha', document: 'Legajo 78411515' },
    { name: 'Juan Carlos Gonzalez', document: 'Legajo 78411515' },
    { name: 'Juan Pablo Gonzalez', document: 'Legajo 78411515' },
    { name: 'Juana Lopez', document: 'Legajo 78411515' },
    { name: 'Fernando Tschoppp', document: 'Legajo 33035151' },
    { name: 'Pablo Garcia', document: 'Legajo 342566' },
    { name: 'Samantha Se Labanca', document: 'Legajo 1111111' },
    { name: 'Maria Lopez', document: 'Legajo 67895432677' },
  ];
  return (
    <div>
      <TextAutocompleteInput
        label="Username"
        {...args}
        className="w-64"
        options={options}
        fieldValue="name"
        fieldTitle="document"
        onSearch={e => alert('on search: ' + e)}
        error=""
        touched={false}
        onOptionClick={e => alert(JSON.stringify(e))}
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
