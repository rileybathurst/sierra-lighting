import React from "react";
import { Testimonial } from "./Testimonial";

export default {
  title: "Molecules/Testimonial",
  component: Testimonial,
};

const Template = (args) => <Testimonial {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Testimonial",
};
