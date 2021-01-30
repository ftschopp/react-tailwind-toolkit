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

export const Standard = (args) => (
  <PopConfirm
    {...args}
    onConfirm={() => alert('On button confirm!')}
    onCancel={() => alert('On button cancel!')}
  />
);

export const Warning = (args) => (
  <PopConfirm
    {...args}
    onConfirm={() => alert('On button confirm!')}
    onCancel={() => alert('On button cancel!')}
  />
);
Warning.args = {
  title: '¿Esta seguro de realizar la acción?',
  type: 'warning',
  icon: 'edit',
  iconClassName: 'fill-current text-yellow-600',
  message: 'Tenga en cuenta que esta acción es irreversible!',
};
