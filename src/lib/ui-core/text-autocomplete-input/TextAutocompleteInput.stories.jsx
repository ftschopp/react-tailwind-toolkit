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
    loading: { control: 'boolean' },
  },
};

export const Standard = args => {
  const [value, setValue] = useState('Juan');

  const options = [
    { name: 'Juan Pedro Hacha', document: 'Legajo 78411515' },
    { name: 'Juan Carlos Gonzalez', document: 'Legajo 78411515' },
    { name: 'Juan Pablo Gonzalez', document: 'Legajo 78411515' },
    { name: 'Juana Lopez', document: 'Legajo 78411515' },
    { name: 'Juan Pedro Hacha', document: 'Legajo 78411515' },
    { name: 'Juan Carlos Gonzalez', document: 'Legajo 78411515' },
    { name: 'Juan Pablo Gonzalez', document: 'Legajo 78411515' },
    { name: 'Juana Lopez', document: 'Legajo 78411515' },
  ];
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
        error=""
        touched={false}
        onOptionClick={e => alert(JSON.stringify(e))}
        onChange={e => setValue(e.target.value)}
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
