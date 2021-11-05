// import React from 'react';

// import TextInput from './TextInput.component';

// export default {
//   title: 'ui-core/TextInput',
//   component: TextInput,
// };

// export const Standard = () => (
//   <TextInput
//     label="Username"
//     value=""
//     className="w-64"
//     error=""
//     touched={false}
//     showCheck={true}
//   />
// );

// export const WithError = () => (
//   <TextInput
//     label="Username"
//     value=""
//     className="w-64"
//     error="auhh eso duele"
//     touched={true}
//     showCheck={true}
//   />
// );

// export const WithValueOk = () => (
//   <TextInput
//     label="Username"
//     value="email@domain.com"
//     className="w-64"
//     error=""
//     touched={true}
//     showCheck={true}
//   />
// );

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextArea, TextAreaProps } from './TextArea.component';

const meta: Meta = {
  title: 'Input/TextArea',
  component: TextArea,
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

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

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
