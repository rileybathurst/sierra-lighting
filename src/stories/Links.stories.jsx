import React from 'react';
import { Links } from './Links';

export default {
  title: 'Links',
  component: Links,
};

const Template = (args) => <Links {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Links',
};
