// this is the Name.tsx file
import React from 'react';
import { faker } from "@faker-js/faker";

interface AreaListProps {
  primary?: boolean;
  onClick?: () => void;
}

export const AreaList = ({
  primary = false,
  ...props
}: AreaListProps) => {

  return (
    <ul className="area-list">
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <li key={faker.string.uuid()}>
          <h2>
            <a href="#">{faker.location.city()}</a>
          </h2>
          {faker.datatype.boolean() && (
            Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
              <ul className="sub-area-ul" key={faker.string.uuid()}>
                <li key={faker.string.uuid()}>{faker.location.city()}</li>
              </ul>
            ))
          )}
        </li>
      ))}
    </ul>
  );
};