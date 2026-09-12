// TODO: add a description and title area, might be its own story

import { faker } from "@faker-js/faker";
import React from "react";

import { Card } from "./Card";

export const Deck = () => {
  return (
    <div className="deck">
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(
        (_) => (
          <Card key={faker.number.int()} />
        ),
      )}
    </div>
  );
};
