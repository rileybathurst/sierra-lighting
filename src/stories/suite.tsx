// this is the Suite.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Poster } from './poster';

export const Suite = () => {

  return (
    <div className={`collage ${faker.datatype.boolean() ? 'wedding' : 'xmas'}`}>
      {Array.from({ length: faker.number.int({ min: 1, max: 6 }) }).map(() => (
        <React.Fragment key={faker.string.uuid()}>
          <Poster />
        </React.Fragment>
      ))}
    </div>
  );
};