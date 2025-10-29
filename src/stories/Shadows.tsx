import React from 'react';
import PropTypes from 'prop-types';

import './story.css';

export const Shadows = () => {
  return (
    <>
    <section className='colorblock__section'>
      A Series
      <div className='colorblock__row'>
        <article>
          <div
            className='colorblock'
            // type="Shadows"
            // {...props}
            style={{
              boxShadow: `var(--troposphere)`
            }}
          >
          </div>
          troposphere
        </article>
        <article>
          <div
            className='colorblock'
            // type="Shadows"
            // {...props}
            style={{boxShadow: `var(--stratosphere)` }}
          >
          </div>
          stratosphere
        </article>
        <article>
          <div
            className='colorblock'
            // type="Shadows"
            // {...props}
            style={{boxShadow: `var(--mesosphere)` }}
          >
          </div>
          mesosphere
        </article>
      </div>
    </section>

    <p>based on the <a href="https://en.wikipedia.org/wiki/Atmosphere_of_Earth">layers of the atomposhere</a>
    </p>

    </>
  );
};

Shadows.propTypes = {
  primary: PropTypes.bool,
};

Shadows.defaultProps = {
  primary: false,
};
