import React from 'react';
import PropTypes from 'prop-types';

import './story.css';
import './buttons.css';

export const Buttons = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Buttons--primary' : 'storybook-Buttons--secondary';
  return (
    <>
    <h2>Buttons</h2>
    <button>Load More</button>
    <button className='button--hover'>Hovered state</button>
    <hr />
    </>
  );
};

Buttons.propTypes = {
  primary: PropTypes.bool,
};

Buttons.defaultProps = {
  primary: false,
};
