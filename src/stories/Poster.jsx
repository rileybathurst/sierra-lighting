// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

export const Poster = ({ primary }) => {
  const mode = primary ? 'storybook-Poster--primary' : 'storybook-Poster--secondary';
  return (
    <>
      Poster
    </>
  );
};

Poster.propTypes = {
  primary: PropTypes.bool,
};

Poster.defaultProps = {
  primary: false,
};