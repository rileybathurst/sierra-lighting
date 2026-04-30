import React from "react";

import { faker } from "@faker-js/faker";

export const Attribute = () => {
  return (
    faker.datatype.boolean() ? (
      <div className="attributes attributes_few">
        {Array.from({ length: faker.number.int({ min: 0, max: 4 }) }).map(() => (
          <section key={faker.number.int()} className="attribute">
            <p className="key">{faker.music.genre()}</p>
            {Array.from({ length: faker.number.int({ min: 1, max: 2 }) }).map(() => (
              <h3 key={faker.number.int()} className="value">
                <a href={faker.music.artist()}>
                  {faker.music.artist()}
                </a>
              </h3>
            )
            )}
          </section>
        ))}
      </div>
    ) : (
      <div className="attributes attributes_many">
        {Array.from({ length: faker.number.int({ min: 5, max: 12 }) }).map(() => (
          <section key={faker.number.int()} className="attribute">
            <p className="key">{faker.music.genre()}</p>
            {Array.from({ length: faker.number.int({ min: 1, max: 2 }) }).map(() => (
              <h3 key={faker.number.int()} className="value">
                <a href={faker.music.artist()}>
                  {faker.music.artist()}
                </a>
              </h3>
            )
            )}
          </section>
        ))}
      </div>
    )
  );
};

