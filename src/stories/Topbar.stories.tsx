// this is the Name.stories.tsx file
import React from "react";
import { Topbar } from "./Topbar";

export default {
  title: "Topbar",
  component: Topbar,
};

const Template = (args) => <Topbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Topbar",
};
