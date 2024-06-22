// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Topbar = () => {
  return (
    <div className="top-bar">
      <h2>
        <a href={faker.company.name()}>
          {faker.company.buzzPhrase()}
        </a>
      </h2>
      <hr />
    </div>
  );
};