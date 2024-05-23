import React from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import ImageFile from "./assets/missing-card-image.jpg";

export const Card = ({ primary }) => {
  const mode = primary
    ? "storybook-Card--primary"
    : "storybook-Card--secondary";
  return (
    <div className="card">
      <div className="image">
        <img
          src={ImageFile}
          alt={faker.animal.bird()}
          className="gatsby-image-wrapper"
        />
      </div>

      <div className="paper">{/* stay gold */}</div>

      <h2 className="mixta">
        <a href={faker.animal.bird()}>{faker.animal.bird()}</a>
      </h2>
      <p className="description">{faker.lorem.sentences(2)}</p>
      {/* theres a chance theres a ul here on the area cards */}
    </div>
  );
};

Card.propTypes = {
  primary: PropTypes.bool,
};

Card.defaultProps = {
  primary: false,
};
