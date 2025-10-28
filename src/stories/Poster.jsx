// TODO: the versions need to be args

// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";

import ImageFile from "./assets/assets.png";

export const Poster = ({ primary }) => {
  const mode = primary
    ? "storybook-Poster--primary"
    : "storybook-Poster--secondary";
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

Poster.propTypes = {
  primary: PropTypes.bool,
};

Poster.defaultProps = {
  primary: false,
};
