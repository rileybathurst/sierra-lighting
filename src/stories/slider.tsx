// this is the Slider.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Slider = () => {

  return (
    <div className="slider-container">
      <section className="slider">
        <ul>
          {Array.from({ length: 3 }).map(() => (
            <li key={faker.string.uuid()}>
              <p>{faker.lorem.sentences(2)}</p>

              <h4 className='denali bantam'>{faker.person.fullName()}</h4>
              <p className='elbrus feather'>{faker.company.name()} - {faker.person.jobTitle()}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};