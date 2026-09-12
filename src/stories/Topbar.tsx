// this is the Name.tsx file

import { faker } from "@faker-js/faker";
import React from "react";

export const Topbar = () => {
  return (
    <h2 className="top-bar">
      <a href={faker.company.name()}>{faker.company.buzzPhrase()}</a>
    </h2>
  );
};
