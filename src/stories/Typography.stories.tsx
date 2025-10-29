import React from "react";
import { Typography } from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
};

const Template = (args: any) => <Typography {...args} />;

export const Light = Template.bind({});
(Light as any).args = {
  primary: true,
  label: "Typography",
};

export const Dark = Template.bind({});
(Dark as any).args = {
  primary: true,
  label: "Typography",
};
