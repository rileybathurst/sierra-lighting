// this is the Name.stories.tsx file
import React from "react";
import { Topbar } from "./Topbar";

export default {
  title: "Molecules/Topbar",
  component: Topbar,
};

const Template = () => <Topbar />;

export const Primary = Template.bind({});
