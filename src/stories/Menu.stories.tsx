// this is the Name.stories.tsx file
import React from "react";
import { Menu } from "./Menu";

export default {
  title: "Molecules/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Menu",
};
