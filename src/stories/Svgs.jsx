import React from 'react';
import PropTypes from 'prop-types';

import './story.css';

export const Svgs = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Svgs--primary' : 'storybook-Svgs--secondary';
  return (
    <>
    <h2>Svgs</h2>
    <svg
      width='20'
      height='20'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill='green'
    >
      <rect width='20' height='20' />
    </svg>
    
    <h2>Linked SVG</h2>
    <a href="#">
    <svg
      width='20'
      height='20'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill='green'
    >
      <rect width='20' height='20' />
    </svg>
    </a>
    </>
  );
};

Svgs.propTypes = {
  primary: PropTypes.bool,
};

Svgs.defaultProps = {
  primary: false,
};
