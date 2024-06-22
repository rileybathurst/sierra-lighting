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

  localFile.childImageSharp.gatsbyImageData.width <= 960
    ? console.log('Hero Image is too small')
    : null

  alternativeText ? null : console.log('hero has no alt text')

  return (
    <div className={`hero-image poster ${localFile.childImageSharp.gatsbyImageData.width <= 960 ? 'hero-pelican' : null}`}>
      <GatsbyImage
        image={localFile.childImageSharp.gatsbyImageData}
        alt={alternativeText || "Hero Image"}
      />
    </div>
  )
}

export default Hero;