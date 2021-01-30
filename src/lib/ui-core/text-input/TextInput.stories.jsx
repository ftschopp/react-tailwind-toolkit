import React from 'react';

import TextInput from './TextInput.component';

export default {
  title: 'ui-core/TextInput',
  component: TextInput,
};

export const Standard = () => (
  <TextInput
    label="Username"
    value=""
    className="w-64"
    error=""
    touched={false}
    showCheck={true}
  />
);

export const WithError = () => (
  <TextInput
    label="Username"
    value=""
    className="w-64"
    error="auhh eso duele"
    touched={true}
    showCheck={true}
  />
);

export const WithValueOk = () => (
  <TextInput
    label="Username"
    value="email@domain.com"
    className="w-64"
    error=""
    touched={true}
    showCheck={true}
  />
);
