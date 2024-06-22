// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface ShowProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Show = ({
  primary = false,
  ...props
}: ShowProps) => {

  return (
    <div className="pelican">
      <a href={faker.location.city()}>
        <img
          src={faker.image.urlLoremFlickr()}
          alt={faker.animal.bird()}
          className="gatsby-image-wrapper poster"
        />
      </a>

      <div className="stork">
        <h3 className="capitalize">{faker.helpers.arrayElement(['gold', 'silver', 'bronze'])} Showcase</h3>
        <p>
          {faker.lorem.sentences(2)}
        </p>
      </div>

      {/* // TODO: make the things */}
      {/*       <Attributes
        price={faker.number.int(100)}
        roofline={showcase.roofline}
        trees={showcase.tree}
      /> */}

      {/* // TODO: I need this */}
      {/* <Start /> */}
    </div>
  );
};