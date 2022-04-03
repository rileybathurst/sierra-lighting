import React from 'react';
import { Neon } from './Neon';

export default {
  title: 'Neon',
  component: Neon,
};

const Template = (args) => <Neon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Neon 🦄',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Neon',
};