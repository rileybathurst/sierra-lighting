import { faker } from "@faker-js/faker";
import React from "react";

export const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img
          src={faker.image.urlPicsumPhotos()}
          alt={faker.animal.bird()}
          className="gatsby-image-wrapper"
        />
      </div>

      <div className="paper">{/* stay gold */}</div>

      <h2>
        <a href={faker.animal.bird()}>{faker.animal.bird()}</a>
      </h2>
      {faker.datatype.boolean() && (
        <ul>
          {Array.from({
            length: faker.datatype.number({ min: 1, max: 5 }),
          }).map((_, index) => (
            <li key={index}>{faker.lorem.word()}</li>
          ))}
        </ul>
      )}
      <p className="description">{faker.lorem.sentences(2)}</p>
    </div>
  );
};
