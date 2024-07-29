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
function Hero({ localFile, alternativeText }: HeroType) {

  // console.log(alternativeText);

  process.env.NODE_ENV === "development" ?
    localFile.childImageSharp.gatsbyImageData.width <= 959
      ? console.warn('Hero Image is too small')
      : null
    : null

  process.env.NODE_ENV === "development" ?
    alternativeText ? null : console.warn('hero has no alt text')
    : null

  return (
    <div className={`hero-image poster ${localFile.childImageSharp.gatsbyImageData.width <= 960 ? 'hero-condor' : null}`}>
      <GatsbyImage
        image={localFile.childImageSharp.gatsbyImageData}
        alt={alternativeText || "Hero Image"}
      />
    </div>
  )
}

export default Hero;