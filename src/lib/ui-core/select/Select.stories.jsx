import React from 'react';
import Select from './Select.component';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/Select',
  component: Select,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    value: { control: 'text' },
    options: { control: 'text' },
  },
};

export const Standard = (args) => (
  <Select
    {...args}
    onConfirm={() => alert('On button confirm!')}
    onCancel={() => alert('On button cancel!')}
  />
);

Standard.args = {
  label: 'Countries',
  options: [
    { id: '1', description: 'Argentina' },
    { id: '2', description: 'Brasil' },
    { id: '3', description: 'Uruguay' },
  ],
};

export const WithSelection = (args) => (
  <Select
    {...args}
    onConfirm={() => alert('On button confirm!')}
    onCancel={() => alert('On button cancel!')}
  />
);

WithSelection.args = {
  label: 'Countries',
  value: '1',
  options: [
    { id: '1', description: 'Argentina' },
    { id: '2', description: 'Brasil' },
    { id: '3', description: 'Uruguay' },
  ],
};
