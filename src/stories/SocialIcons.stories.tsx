// this is the Name.stories.tsx file
import React from "react";
import { SocialIcons } from "./SocialIcons";

export default {
  title: "SocialIcons",
  component: SocialIcons,
};

const Template = (args) => <SocialIcons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "SocialIcons",
};
