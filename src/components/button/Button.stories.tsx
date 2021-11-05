import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    title: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

// export const Default = Template.bind({});
// Default.args = {
//   title: 'Default',
//   disabled: false,
// };

// export const Primary = Template.bind({});
// Primary.args = {
//   title: 'Primary',
//   appareance: 'primary',
//   disabled: false,
// };

export const Minimal = Template.bind({});
Minimal.args = {
  color: 'primary',
  label: 'Primary',
  disabled: false,
};

export const Default = () => {
  return <Button label="hola Mundo!"></Button>;
};

export const Primary = () => {
  return <Button color="primary" label="Primary"></Button>;
};

export const PrimaryLoading = () => {
  return <Button color="primary" label="Primary" isLoading></Button>;
};

export const PrimaryDisabled = () => {
  return <Button color="primary" label="Primary" disabled></Button>;
};

export const Secondary = () => {
  return <Button color="secondary" label="Secondary"></Button>;
};
