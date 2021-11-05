import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput.component';

const meta: Meta = {
  title: 'Input/TextInput',
  component: TextInput,
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

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  value: '',
  className: 'w-64',
  error: '',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Username',
  value: 'somenthing invalid',
  className: 'w-64',
  validationMessage: 'the field is invalid',
  touched: true,
};

export const Playwith = () => {
  return (
    <TextInput
      label="Nombdre"
      name="Nombre"
      dimension="md"
      error=""
      validationMessage=""
      touched={false}
      isInvalid={false}
      required={false}
    />
  );
};
