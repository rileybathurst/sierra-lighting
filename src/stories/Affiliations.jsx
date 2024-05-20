// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

function List() {
  return (
    <ul>
      <li className="affiliation">one</li>
      <li>two</li>
      <li>three</li>
    </ul>
  );
}

export const Affiliations = ({ primary }) => {
  const mode = primary
    ? "storybook-Affiliations--primary"
    : "storybook-Affiliations--secondary";

  return (
    <ul className="affiliations">
      <li className="affiliation">
        <p>
          one
          <br />
          and
        </p>
        <p>two</p>
      </li>
      <li className="affiliation">
        <p>one</p>
        <p>two</p>
      </li>
      <li className="affiliation">
        <p>one</p>
        <p>two</p>
      </li>
      <li className="affiliation">
        <p>one</p>
        <p>two</p>
      </li>
    </ul>
  );
};

Affiliations.propTypes = {
  primary: PropTypes.bool,
};

Affiliations.defaultProps = {
  primary: false,
};
