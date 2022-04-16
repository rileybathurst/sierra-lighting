import React from 'react';
import PropTypes from 'prop-types';

import './story.css';
import './body.css';

export const Body = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Body--primary' : 'storybook-Body--secondary';
  return (
    <>
{/* Im not happy with this yet<br /><br /> */}
<section class="light__test">
    body &#123;<br />
      <span>&nbsp;&nbsp;background: </span><span>hsl(35, 100%, 99%);</span><br />
      &nbsp;&nbsp;color: hsl(215, 12%, 12%);<br />
      &nbsp;&nbsp;<span class='selection__test'>selection: hsl(35, 100%, 50%);</span><br />
      &nbsp;&nbsp;<a href="#" class="light__link">Link: hsl(35, 100%, 30%);</a><br />
      &nbsp;&nbsp;<span class="hover__test">Link Hover: hsl(35, 100%, 50%); - this has 2.16:1 contrast to the background</span><br />
    &#125;
    </section>

    <section class="dark__test">
    @dark body &#123;<br />
      <span>&nbsp;&nbsp;background:</span><span>hsl(35, 100%, 99%);</span><br />
      &nbsp;&nbsp;color: hsl(215, 12%, 12%);<br />
      &nbsp;&nbsp;<span class='selection__test'>selection: hsl(35, 100%, 50%)</span><br />
      &nbsp;&nbsp;<a href="#" class="dark__link">Link: hsl(35, 100%, 30%)</a><br />
      {/* &nbsp;&nbsp;<span class="hover__test">Link Hover: hsl(35, 100%, 50%) - this has 2.16:1 contrast to the background</span><br /> */}
    &#125;
    </section>
    </>
  );
};

Body.propTypes = {
  primary: PropTypes.bool,
};

Body.defaultProps = {
  primary: false,
};
