// this is the PlanList.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Sheet } from './sheet';

export const PlanList = () => {

    return (
        <>
            Logo<br />
            <button type="button">Guides</button>
            <button type="button">Search</button>
            <br />
            <hr />
            <br />
            {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
                <Sheet key={faker.string.uuid()} />
            ))}
        </>
    );
};