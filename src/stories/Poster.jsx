// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

import ImageFile from "./assets/assets.png";

export const Poster = ({ primary }) => {
  const mode = primary
    ? "storybook-Poster--primary"
    : "storybook-Poster--secondary";
  return (
    <>
      <a href="#" className="p2">
        <img src={ImageFile} className="gatsby-image-wrapper" />
        <p className="">p2</p>
      </a>

      <a href="#" className="p2">
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
          <img src={ImageFile} />
        </div>
        <p className="">nested gatsby-image-wrapper</p>
      </a>

      <a href="#" className="p2">
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
          <img src={ImageFile} />
        </div>
      </a>

      <div className="p2">
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
          <img src={ImageFile} />
        </div>
      </div>

      {/*       <div className="p2">
        <img src={ImageFile} className="gatsby-image-wrapper" />
      </div> */}
    </>
  );
};

Poster.propTypes = {
  primary: PropTypes.bool,
};

Poster.defaultProps = {
  primary: false,
};
