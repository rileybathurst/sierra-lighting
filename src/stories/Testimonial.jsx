import React from 'react';
import PropTypes from 'prop-types';

import Star from '../images/star.tsx';

export const Testimonial = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Testimonial--primary' : 'storybook-Testimonial--secondary';
  return (
    <main className='measure'>
      <ul className="testimonials__page">
        <li>
          <h2 className="first-capital">testimonial.title</h2>
          <ul className="testimonials stars">
            <li>
              <Star /><Star /><Star /><Star /><Star />
            </li>
        </ul>
          <h3>
            testimonial.customer&nbsp;
            <a href="#">testimonial.link</a>&nbsp;
            testimonial.position
          </h3>
          <p>What do they got in there? King Kong? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Remind me to thank John for a lovely weekend. You know what? It is beets. I've crashed into a beet truck.</p>
        </li>
        <h3 className='crest'>Hear what testimonial company have to say about us</h3>
        <li>
          <h2 className="first-capital">testimonial.title</h2>
          <ul className="testimonials stars">
            <li>
              <Star /><Star /><Star /><Star /><Star />
            </li>
        </ul>
          
            <h3>
            testimonial customer&nbsp;
            <a href="#">testimonial link</a>&nbsp;
            testimonial position
          </h3>
          <blockquote>
          <span className='range'>&quot;</span>
          <p>What do they got in there? King Kong? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Remind me to thank John for a lovely weekend. You know what? It is beets. I've crashed into a beet truck.</p>
          </blockquote>
        </li>

      </ul>

      <ul className='testimonials'>
        <li className='testimonial'>
          <figure>
            <blockquote>
              <h3 className='sr-only'>testimonial title</h3>
              <ul className="testimonial--stars">
                <li>
                  <Star /><Star /><Star /><Star /><Star />
                </li>
              </ul>
              <p className='testimonial--quote_mark range'>&quot;</p>
              <p>What do they got in there? King Kong? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Remind me to thank John for a lovely weekend. You know what? It is beets. I've crashed into a beet truck.</p>
              <figcaption>
                <h4 className='range'>Testimonial Customer</h4>
                <p className='crest'><strong>Business Name</strong> - Position</p>
              </figcaption>
            </blockquote>
          </figure>
        </li>
      </ul>

      <h3 className='crest'>Hear what other customers say about us</h3>
      <h4 className='range'>More Reviews</h4>

    </main>
  );
};

Testimonial.propTypes = {
  primary: PropTypes.bool,
};

Testimonial.defaultProps = {
  primary: false,
};

