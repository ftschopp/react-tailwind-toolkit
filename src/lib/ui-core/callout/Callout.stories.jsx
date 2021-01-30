import React from 'react';
import Callout from './Callout.component';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/Callout',
  component: Callout,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text' },
    message: { control: 'text' },
    type: { control: 'text' },
  },
};

export const Info = (args) => <Callout {...args} />;
Info.args = {
  title: 'Mensaje Informativo',
  type: 'info',
  message: 'A partir del dia saraza vas a navegar gratis!',
};

export const Warning = (args) => <Callout {...args} />;
Warning.args = {
  title: 'Mensaje Advertencia',
  type: 'warning',
  message: 'Cuidadoooo!',
};

export const Error = (args) => <Callout {...args} />;
Error.args = {
  title: 'Algo no anduvo bien',
  type: 'error',
  message: 'Se produjo un error en el modulo xyz!',
};

export const Success = (args) => <Callout {...args} />;
Success.args = {
  title: 'Vamos bien',
  type: 'success',
  message: 'Todo perfe!',
};
