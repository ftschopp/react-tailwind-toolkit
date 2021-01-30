import React from 'react';
import Checkbox from './Checkbox.component';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/Checkbox',
  component: Checkbox,
};

export const Standard = () => (
  <Checkbox
    label=""
    className=""
    description="Algo para chequear"
    checked="true"
  />
);
