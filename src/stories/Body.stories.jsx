import React from 'react';
import { Body } from './Body';

export default {
  title: 'Body',
  component: Body,
};

const Template = (args) => <Body {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Body',
};
