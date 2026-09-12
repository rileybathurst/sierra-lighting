// this is the Sheet.tsx file

import { faker } from "@faker-js/faker";
import React from "react";

export const Sheet = () => {
  return (
    <a href={`/p/${faker.book.title()}`} className="sheet sheet__plan">
      <h1 className="jobber">{faker.number.int(10000)}</h1>
      <h3 className="name">
        {faker.datatype.boolean()
          ? faker.person.fullName()
          : '<span className="error">Missing Jobber</span>'}
      </h3>
      <p className="address">
        {faker.location.streetAddress()}, {faker.location.city()},{" "}
        {faker.location.state()}
      </p>
    </a>
  );
};
