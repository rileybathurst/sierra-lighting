import React from 'react';
import PropTypes from 'prop-types';

// import TestImage from './TestImage';

/* import imageFile from '../images/sierra-lighting-og_image.jpg';
import { Meta } from '@storybook/react'; */



export const Card = ({ primary }) => {



/* export default {
  title: 'img',
} as Meta;

const image = {
  src: imageFile,
  alt: 'my image',
}; */


const mode = primary ? 'storybook-Card--primary' : 'storybook-Card--secondary';
return (
  <div className="card">
    {/* <img src={image.src} alt="Sierra Lighting" /> */}
    {/* <TestImage /> */}
    <div className="paper"></div>
    <div className="content">
      <hr />
      {/* <h3 className="crest">{light.byline}</h3> */}
      <h2 className="mixta"><a href="#">Roof Line</a></h2>
      <p className="description">Roof lines hung with damage free attachment methods outlined in high efficiency energy saving C9 LED bulbs</p>
      {/* <p>{light.outdoor}</p> */}
    </div>
  </div>
);
};

Card.propTypes = {
primary: PropTypes.bool,
};

Card.defaultProps = {
primary: false,
};