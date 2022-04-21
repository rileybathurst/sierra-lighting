import React from 'react';
import PropTypes from 'prop-types';

import './story.css';

export const Links = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Links--primary' : 'storybook-Links--secondary';
  return (
    <>
    Links on regular background
<hr />
    <p>lorem <a href="#">ipsum</a> - var(--honey-h-2)</p>

    </>
  );
};

Links.propTypes = {
  primary: PropTypes.bool,
};

Links.defaultProps = {
  primary: false,
};