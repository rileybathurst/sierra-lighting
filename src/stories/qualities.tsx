// this is the Name.tsx file
import React from 'react';
import { faker } from "@faker-js/faker"

type QualitiesTypes = {
  nestedAlbatross?: boolean;
}
export const Qualities = ({ nestedAlbatross }: QualitiesTypes) => {
  // console.log('nestedAlbatross' + nestedAlbatross)
  return (
    <div className={nestedAlbatross ? 'albatross' : ''}>
      <section className="qualities albatross">
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(
          () => (
            <section key={faker.string.uuid()}>
              <h3 className="capitalize">{faker.company.buzzAdjective()}</h3>
              <p>{faker.lorem.paragraphs(1)}</p>
            </section>
          ),
        )}

        {/* // * this looks wrong on single due to the albatross not containing  */}
        <hr />
      </section>
    </div>
  );
};