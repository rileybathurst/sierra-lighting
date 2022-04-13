import React from 'react';
import { Denim } from './Denim';

export default {
  title: 'Denim',
  component: Denim,
};

const Template = (args) => <Denim {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Denim',
};
