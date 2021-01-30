import React from 'react';
import CheckboxGroup from './CheckboxGroup.component';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/CheckboxGroup',
  component: CheckboxGroup,
};

export const Standard = () => (
  <CheckboxGroup
    label="Colores"
    className=""
    optionsChecked={['1', '2']}
    options={[
      { id: '1', description: 'Blue', color: 'text-red-400' },
      { id: '2', description: 'Red', color: 'text-red-400' },
      { id: '3', description: 'Yellow', color: 'text-red-400' },
    ]}
    inline={false}
  />
);
