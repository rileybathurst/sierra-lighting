// TODO: rename file to lowercase

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

// netlify has cache issues without this due to not all strapi entries having a photo yet
function IfHero(props) {
  if (props.hero) {
    const biggy = props.hero?.localFile?.childImageSharp?.gatsbyImageData?.width;
    // this isnt dry but variables didnt like me so I ditched them

    if (biggy <= 960) {
      return (
        <div className="hero-image pelican">
          <GatsbyImage
            image={props?.hero?.localFile?.childImageSharp?.gatsbyImageData}
            alt={props?.hero?.alternativeText}
            className='poster poster--small'
          />
        </div>
      );
    } else {
      return (
        <div className="hero-image stork">
          <GatsbyImage
            image={props?.hero?.localFile?.childImageSharp?.gatsbyImageData}
            alt={props?.hero?.alternativeText}
            className='poster'
          />
        </div>
      )
    }
  } else {
    return null;
  }
}

export default IfHero;