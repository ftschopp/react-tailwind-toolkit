import React from 'react';
import Radio from './controls/radio/Radio.component';
import TextInput from './controls/text-input/TextInput.component';
import TextArea from './controls/textarea/Textarea.component';
import Checkbox from './controls/checkbox/Checkbox.component';
import MySelect from './controls/select/MySelect.component';
import Date from './controls/date/Date.component';

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <TextInput {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'select':
      return <MySelect {...rest} />;
    case 'date':
      return <Date {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
