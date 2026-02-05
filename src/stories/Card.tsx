import React from "react";
import { faker } from "@faker-js/faker";

export const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img
          src={faker.image.urlLoremFlickr()}
          alt={faker.animal.bird()}
          className="gatsby-image-wrapper"
        />
      </div>

      <div className="paper">{/* stay gold */}</div>

      <h2>
        <a href={faker.animal.bird()}>{faker.animal.bird()}</a>
      </h2>
      <p className="description">{faker.lorem.sentences(2)}</p>
      {/* theres a chance theres a ul here on the area cards */}
    </div>
  );
};
