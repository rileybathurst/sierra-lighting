// * not a typescript file as assets.png cannot be imported in tsx without extra config

import { faker } from "@faker-js/faker";

import ImageFile from "./assets/assets.png";

export const Poster = () => {
  return (
    <a href={faker.location.city()} className="poster">
      <img
        src={ImageFile}
        alt={faker.location.city()}
        className="gatsby-image-wrapper"
      />
      {faker.datatype.boolean() && <p>{faker.location.city()}</p>}
    </a>
  );
};
