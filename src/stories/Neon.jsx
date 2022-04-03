import React from 'react';
import PropTypes from 'prop-types';

export const Neon = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Neon--primary' : 'storybook-Neon--secondary';
  return (
    <div
      type="Neon"
      {...props}
    >
      {label}
      neon
    </div>
  );
};

Neon.propTypes = {
  primary: PropTypes.bool,
};

Neon.defaultProps = {
  primary: false,
};
