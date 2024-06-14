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
    <>
      <a href="#" className="poster">
        <img src={ImageFile} className="gatsby-image-wrapper" />
        <p className="">{faker.location.city()}</p>
      </a>

      {/* <a href="#" className="poster">
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
          <img src={ImageFile} />
        </div>
        <p className="">nested gatsby-image-wrapper</p>
      </a>

      <a href="#" className="poster">
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
          <img src={ImageFile} />
        </div>
      </a>

      <div className="poster">
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
          <img src={ImageFile} />
        </div>
      </div> */}

      {/*       <div className="poster">
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
