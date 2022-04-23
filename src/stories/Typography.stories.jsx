import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Light = Template.bind({});
Light.args = {
  primary: true,
  label: 'Typography',
};

export const Dark = Template.bind({});
Dark.args = {
  primary: true,
  label: 'Typography',
};
