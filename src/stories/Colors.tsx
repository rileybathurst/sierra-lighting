// this is the Name.tsx file
import React from 'react';
import PropTypes from 'prop-types';

// This isnt working from the npm import I dont really understand it if I can do it locally
// I can go to storybook vite I know that works or maybe I have to write storybook components
import { ColorCards } from './ColorCards';
import './story.css';

export const Colors = () => {
  return (
    <main className='color-deck'>
      <h1>Color</h1>
      {/* // TODO: these are a mess, what am I using what are the contrast how am i dealing with this */}
      <ColorCards color="honey" variables={['50', '100', '200', '300', '400', '500', '600', '700']} />
      <ColorCards color="denim" variables={['100', '200', '300', '400', '500', '600', '700', '750']} />
      <ColorCards color="neutral" variables={['100', '200', '300', '400', '500', '600', '700', '800']} />
      <ColorCards color="error" />
    </main>
  );
};

Colors.propTypes = {
  primary: PropTypes.bool,
};

Colors.defaultProps = {
  primary: false,
};