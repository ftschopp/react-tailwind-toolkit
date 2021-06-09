import React from 'react';
import PopConfirm from './PopConfirm.component';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/PopConfirm',
  component: PopConfirm,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
    icon: { control: 'text' },
    iconClassName: { control: 'text' },
    type: { control: 'text' },
    title: { control: 'text' },
    message: { control: 'text' },
    acceptTextButton: { control: 'text' },
    cancelTextButton: { control: 'text' },
  },
};

export const Standard = args => (
  <PopConfirm
    {...args}
    onConfirm={() => alert('On button confirm!')}
    onCancel={() => alert('On button cancel!')}
  />
);

export const Warning = args => (
  <PopConfirm
    {...args}
    onConfirm={() => alert('On button confirm!')}
    onCancel={() => alert('On button cancel!')}
  />
);

export const Information = args => (
  <PopConfirm
    {...args}
    onConfirm={() => alert('On button confirm!')}
    onCancel={() => alert('On button cancel!')}
  />
);

Information.args = {
  title: 'Operación exitosa',
  message: 'La entidad ha sido creado exitosamente',
  iconName: 'info-sign',
  iconClass: 'fill-current text-blue-500',
  iconBackgroundColor: '',
  acceptButtonClass:
    'bg-blue-900 hover:bg-blue-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray',
  acceptButtonText: 'Aceptar',
  cancelButtonText: 'Cancelar',
};

Warning.args = {
  title: '¿Esta seguro de realizar la acción?',
  message: 'Tenga en cuenta que esta acción es irreversible!',
  iconName: 'edit',
  iconClass: 'fill-current text-yellow-500',
  iconBackgroundColor: 'bg-yellow-100',
  acceptButtonClass:
    'bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow',
  acceptButtonText: 'Aceptar',
  cancelButtonText: 'Cancelar',
};
