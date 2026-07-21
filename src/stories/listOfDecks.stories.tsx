// this is the Name.stories.tsx file
import React from "react";
import { ListofDecks } from "./listOfDecks";

export default {
  title: "Pages/ListOfDecks",
  component: ListofDecks,
};

const Template = () => <ListofDecks />;

export const Primary = Template.bind({});

