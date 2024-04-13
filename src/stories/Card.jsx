import React from "react";
import PropTypes from "prop-types";

import ImageFile from "./assets/missing-card-image.jpg";

export const Card = ({ primary }) => {
  const mode = primary
    ? "storybook-Card--primary"
    : "storybook-Card--secondary";
  return (
    <div className="card">
      <div className="image">
        <img src={ImageFile} className="gatsby-image-wrapper" />
      </div>

      <div className="paper"></div>
      <div className="content">
        <h2 className="mixta">
          <a href="#">Roof Line</a>
        </h2>
        <p className="description">
          Roof lines hung with damage free attachment methods outlined in high
          efficiency energy saving C9 LED bulbs
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  primary: PropTypes.bool,
};

Card.defaultProps = {
  primary: false,
};
