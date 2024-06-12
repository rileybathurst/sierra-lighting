import React from "react";
import { Honey } from "./Honey";

export default {
  title: "Honey",
  component: Honey,
};

const Template = (args) => <Honey {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Honey",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Honey",
};
