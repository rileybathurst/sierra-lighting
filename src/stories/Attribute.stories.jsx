import React from "react";
import { Attribute } from "./Attribute";

export default {
  title: "Molecules/Attribute",
  component: Attribute,
};

const Template = (args) => <Attribute {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Attribute",
};
