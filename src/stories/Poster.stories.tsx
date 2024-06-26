// this is the Name.stories.jsx file
import React from "react";
import { Poster } from "./Poster";

export default {
  title: "Atoms/Poster",
  component: Poster,
};

const Template = (args) => <Poster {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Poster",
};
