import React from 'react';
import PropTypes from 'prop-types';

import './story.css';

export const Denim = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Denim--primary' : 'storybook-Denim--secondary';
  return (
    <>
    <p>--denim: 215;</p>

    {/* // TODO this can be super optimized which I am not doing now */}

    <>This just isn't sorted</>

    <section className='colorblock__section'>
      A Series
      <div className='colorblock__row'>
        <article>
          <div
            className='colorblock'
            type="Denim"
            {...props}
            style={{backgroundColor: `var(--denim-1)` }}
          >
          </div>
          {label}-1
        </article>
        <article>
          <div
            className='colorblock'
            type="Denim"
            {...props}
            style={{backgroundColor: `var(--denim-2)` }}
          >
          </div>
          {label}-2
        </article>
        <article>
          <div
            className='colorblock'
            type="Denim"
            {...props}
            style={{backgroundColor: `var(--denim-3)` }}
          >
          </div>
          {label}-3
        </article>
        <article>
          <div
            className='colorblock'
            type="Denim"
            {...props}
            style={{backgroundColor: `var(--denim-4)` }}
          >
          </div>
          {label}-4
        </article>
        <article>
          <div
            className='colorblock'
            type="Denim"
            {...props}
            style={{backgroundColor: `var(--denim-5)` }}
          >
          </div>
          {label}-5
        </article>
        <article>
          <div
            className='colorblock'
            type="Denim"
            {...props}
            style={{backgroundColor: `var(--denim-6)` }}
          >
          </div>
          {label}-6
        </article>
        <article>
          <div
            className='colorblock'
            type="Denim"
            {...props}
            style={{backgroundColor: `var(--denim-7)` }}
          >
          </div>
          {label}-7
        </article>

      </div>
    </section>

    <p>This is based on <a href="https://twitter.com/Mantia/status/570687359328645120?s=20&t=SDi-mrZULTZkWiXZELXXsA">Louie Colors</a></p>
    <ul>
    <li>--louie-a: 12%; // 1</li>
    <li>--louie-b: 25%; // 2</li>
    <li>--louie-c: 37%; // 3</li>
    <li>--louie-d: 50%; // 4</li>
    <li>--louie-e: 63%; // 5</li>
    <li>--louie-f: 75%; // 6</li>
    <li>--louie-g: 87%; // 7</li>
    <li>--louie-h: 100%; // 8</li>
    </ul>

    <p>In general this means<br />
      a - h is more saturated as it goes along<br />
      1 - 8 is lighter as it goes along<br />

      There are problems. 8 can not be used as lightness as this is 100% which is always white<br />
      I am currently using 97.5 for this instead of 100 but this could use tweaking
    </p>

    </>
  );
};

Denim.propTypes = {
  primary: PropTypes.bool,
};

Denim.defaultProps = {
  primary: false,
};
