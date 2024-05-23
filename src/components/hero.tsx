import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image"

interface HeroType {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  alternativeText: string
}

function Hero({ hero }: { hero: HeroType }) {
  // TODO: throw errors if the images are too small or missing
  return (
    hero?.localFile?.childImageSharp?.gatsbyImageData?.width <= 960 ?
      <div className="hero-image hero-pelican poster ">
        <GatsbyImage
          image={hero?.localFile?.childImageSharp?.gatsbyImageData}
          alt={hero?.alternativeText}
        />
      </div>
      :
      <div className="hero-image poster">
        <GatsbyImage
          image={hero?.localFile?.childImageSharp?.gatsbyImageData}
          alt={hero?.alternativeText}
        />
      </div>
  )
}

export default Hero;