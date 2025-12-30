// TODO: the versions need to be args

// this is the Name.jsx file
import React from "react";
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
        <p className="">
          {faker.location.city()}
        </p>
      </a>
  );
};

