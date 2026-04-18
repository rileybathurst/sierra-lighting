// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Topbar = () => {
  return (
      <h2 className="top-bar">
        <a href={faker.company.name()}>
          {faker.company.buzzPhrase()}
        </a>
      </h2>
  );
};