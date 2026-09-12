import { faker } from "@faker-js/faker";
import React from "react";

// * testing why I had 2 links not 1 full
// * move the link to the outer layer
// * this has a doubt on all can i include
// https://caninclude.onrender.com/caninclude?child=h2&parent=a
// so probably dont?

export const LinkedCard = () => {
  return (
    <a href={faker.animal.bird()} className="linked-card">
      <div className="paper">{/* stay gold */}</div>
      <div className="image">
        <img
          src={faker.image.urlPicsumPhotos()}
          alt={faker.animal.bird()}
          className="gatsby-image-wrapper"
        />
      </div>

      <h2>{faker.animal.bird()}</h2>
      <p className="description">{faker.lorem.sentences(2)}</p>
    </a>
  );
};
