import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from './Select.component';

const meta: Meta = {
  title: 'Input/Select',
  component: Select,
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

const Template: Story<any> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  value: 'somenthing invalid',
  className: 'w-64',
  validationMessage: 'the field is invalid',
  touched: true,
  isOpen: true,
  onChange: (opt) => console.log('AAAA', opt),
};

export const PlayWith = () => {
  const [valor, setValor] = useState();

  const options: [{ key: number; heading?: string; title: string }] = [
    { key: 1, title: 'Orange' },
    { key: 2, title: 'Bananas' },
    { key: 3, title: 'Sandias' },
    { key: 4, title: 'Melones' },
    { key: 5, title: 'Mandarinas' },
    { key: 6, title: 'Frutillas' },
    { key: 7, title: 'Pelones' },
    { key: 8, title: 'Kiwis' },
    { key: 9, title: 'Arandanos' },
  ];

  return (
    <div>
      <Select
        name="fruitId"
        label="Frutas"
        options={options}
        selectedValue={valor}
        touched={false}
        // validationMessage="Oh algo no esta bien"

        onChange={(o: any) => {
          console.log('onChange', o);
          setValor(o);
        }}
      />

      <h1>hola</h1>
    </div>
  );
};
