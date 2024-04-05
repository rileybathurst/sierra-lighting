// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import ImageFile from './assets/accessibility.png';

export const Image = ({ primary }) => {
  const mode = primary ? 'storybook-Image--primary' : 'storybook-Image--secondary';
  return (
    <img src={ImageFile} />
  );
};

Image.propTypes = {
  primary: PropTypes.bool,
};

Image.defaultProps = {
  primary: false,
};