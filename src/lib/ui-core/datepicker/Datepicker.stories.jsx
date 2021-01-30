import React from 'react';
import Datepicker from './Datepicker.component';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/Datepicker',
  component: Datepicker,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
  },
};

export const Standard = (args) => <Datepicker {...args} />;

export const WithValue = (args) => (
  <Datepicker {...args} value={'2021-01-01'} />
);

export const WithError = (args) => (
  <Datepicker {...args} touched={true} error="Seleccione una fecha" />
);
