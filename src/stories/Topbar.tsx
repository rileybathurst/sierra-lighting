// this is the Name.tsx file
import React from 'react';
import PropTypes from 'prop-types';

export const Topbar = ({ primary }) => {
  const mode = primary ? 'storybook-Topbar--primary' : 'storybook-Topbar--secondary';
  return (
    <div className="top-bar">
      <h2><a href="#">topbar</a></h2>
      <hr />
    </div>
  );
};

Topbar.propTypes = {
  primary: PropTypes.bool,
};

Topbar.defaultProps = {
  primary: false,
};