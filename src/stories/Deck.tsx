import { faker } from "@faker-js/faker";
import React from "react";

import { Card } from "./Card";

export const Deck = () => {
  return (
    <React.Fragment>
      <div className="deck">
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(
          (_) => (
            <Card key={faker.number.int()} />
          ),
        )}
      </div>
      {faker.datatype.boolean() &&
        <h2 className="kilimanjaro stork">
          <a href={faker.internet.url()}>
            Explore {faker.number.int({ min: 1, max: 10 })} More
          </a>
        </h2>
      }
    </React.Fragment>
  );
};
