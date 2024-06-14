// this is the Name.stories.jsx file
import React from "react";
import { Image } from "./Image";

export default {
  title: "Atoms/Image",
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Image",
};
