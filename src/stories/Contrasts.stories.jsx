import React from "react";
import { Contrasts } from "./Contrasts";

export default {
  title: "Contrasts",
  component: Contrasts,
};

const Template = (args) => <Contrasts {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Contrasts",
};
