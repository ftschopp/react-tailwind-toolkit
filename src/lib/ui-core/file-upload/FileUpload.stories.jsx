import React from 'react';
import FileUpload from './FileUpload.component';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/FileUpload',
  component: FileUpload,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
  },
};

export const Standard = args => <FileUpload {...args} />;
