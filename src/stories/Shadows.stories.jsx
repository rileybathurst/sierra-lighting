import React from 'react';
import { Shadows } from './Shadows';

export default {
  title: 'Shadows',
  component: Shadows,
};

const Template = (args) => <Shadows {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Shadows',
};
