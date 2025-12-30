// this is the Collage.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Poster } from './Poster';

export const Collage = () => {

return (
<>
    {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <Poster key={faker.number.int()} />
    ))}
</>
);
};