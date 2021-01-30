import React from 'react';
import Button from './Button.component';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/Button',
  component: Button,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
    isLoading: { control: 'boolean' },
    leftIcon: { control: 'text' },
    leftIconClassName: { control: 'text' },
    rightIcon: { control: 'text' },
    rightIconClassName: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    fillColor: { control: 'text' },
  },
};

export const Standard = (args) => (
  <Button {...args} onClick={() => alert('On button clicked!')}>
    Reset
  </Button>
);
Standard.args = {
  width: 24,
  height: 24,
};
