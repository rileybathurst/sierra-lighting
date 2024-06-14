// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Poster } from './Poster';

interface HomeServicesProps {
  primary?: boolean;
  onClick?: () => void;
}

function Deal() {

  const hand = faker.number.int(10);

  if (hand < 1) {
    return (
      <h1>There are no cards available</h1>
    );
  }

  const content = [];
  for (let i = 0; i < hand; i++) {
    content.push(
      <Poster />
    );
  }

  return (<>{content}</>);
}

export const HomeServices = ({
  primary = false,
  ...props
}: HomeServicesProps) => {

  return (
    <div className="home-services">
      <Deal />
    </div>
  );
};