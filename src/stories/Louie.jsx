import React from 'react';
import PropTypes from 'prop-types';

import './story.css';
import './louie.css';

export const Louie = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Louie--primary' : 'storybook-Louie--secondary';
  return (
    <>
    {/* // TODO this can be super optimized which I am not doing now */}
    {/* // TODO needs contrast ratios */}
<p>Lightness</p>
    <p>This is based on <a href="https://twitter.com/Mantia/status/570687359328645120?s=20&t=SDi-mrZULTZkWiXZELXXsA">Louie Colors</a></p>
    <ul>
    <li className='louie louie-0'>--louie-0: 0%; (2.5)</li>
    <li className='louie louie-1'>--louie-1: 12%;</li>
    <li className='louie louie-2'>--louie-2: 25%;</li>
    <li className='louie louie-3'>--louie-3: 37%;</li>
    <li className='louie louie-4'>--louie-4: 50%;</li>
    <li className='louie louie-5'>--louie-5: 63%;</li>
    <li className='louie louie-6'>--louie-6: 75%;</li>
    <li className='louie louie-7'>--louie-7: 87%;</li>
    <li className='louie louie-8'>--louie-8: 100%; (97.5)</li>
    </ul>
    <p>Saturation doesnt hit 0 or 100 very well with css</p>
    <ul>
    <li className='louie louie--0'>--louie-0: 0%; (2.5)</li>
    <li className='louie louie--1'>--louie-1: 12%;</li>
    <li className='louie louie--2'>--louie-2: 25%;</li>
    <li className='louie louie--3'>--louie-3: 37%;</li>
    <li className='louie louie--4'>--louie-4: 50%;</li>
    <li className='louie louie--5'>--louie-5: 63%;</li>
    <li className='louie louie--6'>--louie-6: 75%;</li>
    <li className='louie louie--7'>--louie-7: 87%;</li>
    <li className='louie louie--8'>--louie-8: 100%; (97.5)</li>
    </ul>
    </>
  );
};

Louie.propTypes = {
  primary: PropTypes.bool,
};

Louie.defaultProps = {
  primary: false,
};
