import React from 'react';
import { Body } from './Body';

export default {
  title: 'Body',
  component: Body,
};

const Template = (args) => <Body {...args} />;

export const Light = Template.bind({});
Light.args = {
  primary: true,
  label: 'Body',
};

export const Dark = Template.bind({});
Dark.args = {
  primary: true,
  label: 'Body',
};
