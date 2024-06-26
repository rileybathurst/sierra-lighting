import React from "react";
import { Deck } from "./Deck";

export default {
  title: "Organisms/Deck",
  component: Deck,
};

const Template = (args) => <Deck {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Deck",
};
