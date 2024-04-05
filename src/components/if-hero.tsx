import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { IGatsbyImageData } from "gatsby-plugin-image"

interface HeroType {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  alternativeText: string
}

// netlify has cache issues without this due to not all strapi entries having a photo yet
function IfHero({ hero }: { hero: HeroType }) {
  if (hero) {
    const biggy = hero?.localFile?.childImageSharp?.gatsbyImageData?.width;
    // this isnt dry but variables didnt like me so I ditched them

    // console.log(biggy);

    if (biggy <= 960) {
      return (
        <div className="hero-image pelican">
          <GatsbyImage
            image={hero?.localFile?.childImageSharp?.gatsbyImageData}
            alt={hero?.alternativeText}
            className='poster poster--small'
          />
        </div>
      );
    } else {
      return (
        <div className="hero-image stork">
          <GatsbyImage
            image={hero?.localFile?.childImageSharp?.gatsbyImageData}
            alt={hero?.alternativeText}
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