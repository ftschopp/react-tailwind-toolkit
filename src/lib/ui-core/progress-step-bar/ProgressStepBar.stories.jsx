import React from 'react';
import ProgressStepBar from './ProgressStepBar.component';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/ProgressStepBar',
  component: ProgressStepBar,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
  },
};

export const Standard = (args) => <ProgressStepBar {...args} />;

Standard.args = {
  label: 'Countries',
  steps: [
    {
      number: 1,
      description: 'Step saraza',
      porcentage: 100,
    },
    {
      number: '2',
      description: 'Step nose',
      porcentage: 40,
    },
    {
      number: 3,
      description: 'Step garlopa',
      porcentage: 0,
    },
    {
      number: 4,
      description: 'Step me fui',
      porcentage: 0,
    },
    {
      number: 5,
      description: 'Step aaaa fui',
      porcentage: 0,
    },
  ],
};

export const AllCompleted = (args) => <ProgressStepBar {...args} />;

AllCompleted.args = {
  label: 'Countries',
  steps: [
    {
      number: 1,
      description: 'Step saraza',
      porcentage: 100,
    },
    {
      number: '2',
      description: 'Step nose',
      porcentage: 100,
    },
    {
      number: 3,
      description: 'Step garlopa',
      porcentage: 100,
    },
  ],
};
