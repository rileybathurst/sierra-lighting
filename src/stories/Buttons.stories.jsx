import React from "react";
import { Buttons } from "./Buttons";

export default {
  title: "Buttons",
  component: Buttons,
};

const Template = (args) => <Buttons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Buttons",
};
