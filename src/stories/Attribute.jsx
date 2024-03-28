import React from "react";
import PropTypes from "prop-types";

import Star from "../images/star.tsx";

export const Attribute = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-Attribute--primary"
    : "storybook-Attribute--secondary";
  return (
    <main className="stork">
      Attribute
      <ul className="attributes">
        <li className="attribute">
          <p className="crest">Attribute by</p>
          <h3 className="range">
            <a href="#" className="link--subtle">
              Name
            </a>
          </h3>
        </li>
        <li className="attribute">
          <p className="crest">Attribute by</p>
          <h3 className="range">
            <a href="#" className="link--subtle">
              Name
            </a>
            {/* <span className='behind-multiple-flag'>,&nbsp;</span> */}
            <a href="#" className="link--subtle">
              Other Name
            </a>
          </h3>
        </li>
      </ul>
    </main>
  );
};

Attribute.propTypes = {
  primary: PropTypes.bool,
};

Attribute.defaultProps = {
  primary: false,
};
