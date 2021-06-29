import React, { useState, useCallback, useMemo } from 'react';
import AutocompleteInput from './AutocompleteInput.component';
import { withKnobs } from '@storybook/addon-knobs';
import { filter, compose, includes, propOr, toLower } from 'ramda';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/AutocompleteInput',
  component: AutocompleteInput,
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState();
  const [selectedOption, setSelectedOption] = useState();

  const onSubmit = useCallback(async (values, actions) => {
    console.log('values', values);
  }, []);

  const onSearch = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setResult(employees);
      setLoading(false);
    }, 1200);
  }, [employees]);

  const [result, setResult] = useState([]);
  return (
    <div>
      <form className="p-8" onSubmit={onSubmit} autoComplete="off">
        <div className="flex min-h-screen items-center justify-center">
          <AutocompleteInput
            fieldTitle="document"
            fieldName="name"
            options={result}
            value={selectedOption}
            onChange={setSelectedOption}
            onSearch={onSearch}
            loading={loading}
          />
        </div>
        <h1>algo</h1>
      </form>
    </div>
  );
};

export const WithError = args => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <AutocompleteInput
          fieldTitle="document"
          fieldName="name"
          options={[]}
          value=""
          error="Es requerido"
          touched={true}
        />
      </div>
    </div>
  );
};
