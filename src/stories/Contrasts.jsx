import React from "react";
import PropTypes from "prop-types";

import "./story.css";

export const Contrasts = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-Contrasts--primary"
    : "storybook-Contrasts--secondary";
  return (
    <>
      {/* // ? Does any of this help yet? */}
      variables
      <ul>
        <li>--honey: 35;</li>
        <li>--denim: 215;</li>
      </ul>
      <hr />
      <p>Light mode background: hsl(var(--honey), 100%, 99%); not a variable</p>
      <p>Regular color: hsl(var(--denim), 12%, 12%) : 16.36</p>
      <p>
        <a href="#">Link</a> hsl(var(--honey), 100%, 25%) : 7.09
      </p>
      <hr />
    </>
  );
};

Contrasts.propTypes = {
  primary: PropTypes.bool,
};

Contrasts.defaultProps = {
  primary: false,
};
