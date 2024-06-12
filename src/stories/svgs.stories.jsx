import React from "react";
import { Svgs } from "./Svgs";

export default {
  title: "Svg",
  component: Svgs,
};

const Template = (args) => <Svgs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Svgs",
};
