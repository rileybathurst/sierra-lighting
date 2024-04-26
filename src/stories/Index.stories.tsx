// this is the Name.stories.tsx file
import React from 'react';
import { Index } from './Index';

export default {
  title: 'Pages/Index',
  component: Index,
};

const Template = (args) => <Index {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Index',
};