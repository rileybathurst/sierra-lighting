// this is the Name.tsx file
import React from 'react';
import PropTypes from 'prop-types';

// This isnt working from the npm import I dont really understand it if I can do it locally
// I can go to storybook vite I know that works or maybe I have to write storybook components
import { ColorCards } from './ColorCards';

type ColorProps = {
  one: string;
};
function TypeTest({ one }: ColorProps) {
  return (
    <div>
      <h1>{one}</h1>
    </div>
  );
}

export const Colors = () => {
  return (
    <main className='color-deck'>
      <h1>Color</h1>

      <TypeTest one='hello' />

      <ColorCards color="honey" variables={['50', '100', '200', '300', '400', '500', '600', '700']} />
      <ColorCards color="denim" variables={['100', '200', '300', '400', '500', '600', '700', '750']} />
    </main>
  );
};

Colors.propTypes = {
  primary: PropTypes.bool,
};

Colors.defaultProps = {
  primary: false,
};