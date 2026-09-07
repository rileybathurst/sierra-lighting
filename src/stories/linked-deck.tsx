// TODO: add a description and title area, might be its own story

import React from 'react';
import { faker } from '@faker-js/faker';

import { LinkedCard } from './linked-card';

export const LinkedDeck = () => {
  return (
    <div className='deck'>
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
        <LinkedCard key={faker.number.int()} />
      ))}
    </div>
  );
};
