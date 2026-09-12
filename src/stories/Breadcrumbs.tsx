// this is the Name.tsx file

import { faker } from "@faker-js/faker";
import React from "react";

export const Breadcrumbs = () => {
  return (
    <ol className="react-aria-Breadcrumbs">
      <li className="react-aria-Breadcrumb">
        <a href="/">{faker.company.buzzNoun()}</a>
      </li>
      <li className="react-aria-Breadcrumb">{faker.company.buzzPhrase()}</li>
    </ol>
  );
};
