// this is the Name.stories.jsx file
import React from 'react';
import { Affiliations } from './Affiliations';

export default {
  title: 'Affiliations',
  component: Affiliations,
};

const Template = (args) => <Affiliations {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Affiliations',
};