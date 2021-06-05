import React from 'react';
import Icon from './Icon.component';
import { withKnobs } from '@storybook/addon-knobs';
import { icons } from './blueprint/all-icons';
import AssetNowIcon from './brands/AssetNowIcon.component';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/Icons',
  component: Icon,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    fillColor: { control: 'text' },
  },
};

export const Basic = args => <Icon {...args} />;
Basic.args = {
  className: 'fill-current text-blue-900',
  name: 'add',
  width: 24,
  height: 24,
};

export const ANBrand = args => <AssetNowIcon {...args} />;
ANBrand.args = {
  width: 100,
  height: 100,
};

export const All = args => {
  return (
    <div className="flex flex-wrap px-10">
      {Object.keys(icons).map((icon, key) => (
        <div key={key} className="mx-10 my-10 flex flex-col">
          <div className="flex w-full justify-center px-14">
            <Icon name={icon} width="30px" height="30px" />
          </div>
          <div className="flex w-full justify-center">
            <label className="text-xs mt-2">{icon}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

All.args = {
  className: 'fill-current text-blue-900',
  name: 'add',
  width: 24,
  height: 24,
};
