import React, { useState } from 'react';

import TextAutocompleteInput from './TextAutocompleteInput.component';

export default {
  title: 'ui-core/TextAutocompleteInput',
  component: TextAutocompleteInput,
};

export const Standard = () => {
  const [value, setValue] = useState('Juan');
  const loading = true;
  const showSuggestions = false;
  const options = [
    { name: 'Juan Pedro Hacha', document: 'Legajo 78411515' },
    { name: 'Juan Carlos Gonzalez', document: 'Legajo 78411515' },
    { name: 'Juan Pablo Gonzalez', document: 'Legajo 78411515' },
    { name: 'Juana Lopez', document: 'Legajo 78411515' },
  ];
  return (
    <TextAutocompleteInput
      label="Username"
      value={value}
      className="w-64"
      loading={loading}
      options={options}
      showSuggestions={showSuggestions}
      fieldValue="name"
      fieldTitle="document"
      error=""
      touched={false}
      onChange={e => setValue(e.target.value)}
    />
  );
};
