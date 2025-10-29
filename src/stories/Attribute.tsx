import React from "react";

import { faker } from "@faker-js/faker";

export const Attribute = () => {
  return (
    <div className="attributes">
      {Array.from({ length: faker.number.int({ min: 0, max: 4 }) }).map((_) => (
        <section key={faker.number.int()} className="attribute">
          <p className="crest">{faker.music.genre()}</p>
          {Array.from({ length: faker.number.int({ min: 1, max: 2 }) }).map(
            (_) => (
              <h3 key={faker.number.int()} className="range">
                <a href={faker.music.artist()} className="link--subtle">
                  {faker.music.artist()}
                </a>
              </h3>
            )
          )}
        </section>
      ))}
    </div>
  );
};

