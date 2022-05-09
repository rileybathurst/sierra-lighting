import React from 'react';
import PropTypes from 'prop-types';

import './story.css';
import './links.css';

export const Links = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Links--primary' : 'storybook-Links--secondary';
  return (
    <>
    Links on regular background
<hr />
    <p>lorem <a href="#">ipsum</a> - hsl(var(--honey), 100%, 25%)</p>

<hr />
    <p className='hover-back'><a href="#">hover back</a></p>
    <p className='bigboy'><a href="#">big boy</a></p>
    {/* .hover-back, .bigboy a, .contact-info a */}
    </>
  );
};

Links.propTypes = {
  primary: PropTypes.bool,
};

Links.defaultProps = {
  primary: false,
};
