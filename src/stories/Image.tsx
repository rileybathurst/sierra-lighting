// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import ImageFile from './assets/accessibility.png';

export const Image = () => {
  return (
    <img
      src={ImageFile}
      alt="Accessibility"
    />
  );
};

Image.propTypes = {
  primary: PropTypes.bool,
};

Image.defaultProps = {
  primary: false,
};