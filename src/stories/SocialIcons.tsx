// this is the Name.tsx file
import React from 'react';
import PropTypes from 'prop-types';
import { faker } from '@faker-js/faker';

// I think this is the old deal and theres a way quicker way to do this with map
function Deal() {

  const hand = faker.number.int(10);
  // console.log(hand);

  const twos = faker.number.int({ min: 2, max: 8, multipleOf: 2 });

  const points = Array.from({ length: twos }, () => {
    return `${faker.number.int({ min: 10, max: 100 })},${faker.number.int({
      min: 10,
      max: 100,
    })}`;
  }).join(" ");

  if (hand < 1) {
    return (
      <h1>There are no cards available</h1>
    );
  }

  const content = [];
  for (let i = 0; i < hand; i++) {
    content.push(
      <li>
        <a href={faker.animal.bird()}>
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <title>{faker.animal.bird()}</title>
            <polygon points={points} />
          </svg>

        </a>
      </li>
    );
  }

  return (<>{content}</>);
}

export const SocialIcons = () => {
  return (
    <section 
      // id="footer-social" // * biome says dont use IDs
      className="footer-social footer-social--self"
    >
      <ul className="stork">
        <Deal />
      </ul>
    </section>
  );
};

SocialIcons.propTypes = {
  primary: PropTypes.bool,
};

SocialIcons.defaultProps = {
  primary: false,
};