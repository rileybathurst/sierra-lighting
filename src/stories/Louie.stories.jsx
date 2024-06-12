import React from "react";
import { Louie } from "./Louie";

export default {
  title: "Louie",
  component: Louie,
};

const Template = (args) => <Louie {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Louie",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Louie",
};
