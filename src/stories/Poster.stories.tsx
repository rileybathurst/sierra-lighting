// this is the Name.stories.jsx file
import React from "react";
import { Poster } from "./poster";

export default {
  title: "Atoms/poster",
  component: Poster,
};

const Template = () => <Poster />;

export const Primary = Template.bind({});
