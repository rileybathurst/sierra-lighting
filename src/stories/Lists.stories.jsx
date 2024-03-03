// this is the Name.stories.jsx file
import React from "react";
import { Lists } from "./Lists";

export default {
  title: "Lists",
  component: Lists,
};

const Template = (args) => <Lists {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Lists",
};
