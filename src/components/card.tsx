import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import type { DeckType } from "../types/deck-type";

const Card = ({ card, breadcrumb }: DeckType) => {

  // * testing for missing alt text
  card?.image?.alternativeText ?
    null
    : console.warn(`${card.title ?? card.name} image has no alt`);

  return (
    <section className="card">
      <Link
        to={`/${breadcrumb}/${card.slug}`}
        className="image"
      >
        {/* // TODO: this seems dumb cant I always just pass the correct prop or is it folded inside */}
        {card?.image?.localFile?.childImageSharp?.gatsbyImageData ??
          card?.venueImage?.localFile?.childImageSharp?.gatsbyImageData ??
          card?.profile?.localFile?.childImageSharp?.gatsbyImageData ?
          <GatsbyImage
            image={
              card?.image?.localFile?.childImageSharp?.gatsbyImageData ??
              card?.venueImage?.localFile?.childImageSharp?.gatsbyImageData ??
              card?.profile?.localFile?.childImageSharp?.gatsbyImageData
            }
            alt={card?.image?.alternativeText ?? card.title ?? card.name ?? ""}
          />
          :
          <StaticImage
            src="https://sierralighting.s3.us-west-1.amazonaws.com/missing-card-image.jpg"
            alt={card.title ?? card.name ?? ""}
          />
        }
      </Link>
      <div className="paper">{/* stay gold */}</div>
      <h2 className="mixta">
        <Link
          to={`/${breadcrumb}/${card.slug}`}
        >
          {card.name ?? card.title}
        </Link>
      </h2>
      {/* // ? can i just card.areas this and skip the length */}
      {card?.areas?.length > 0 ?
        <div className="subarea">
          <p>Including:</p>
          <ul>
            {card.areas.map(area => (
              <li key={area.name}>
                {area.name}
              </li>
            ))}
          </ul>
        </div>
        :
        <p>{card.excerpt}</p>
      }
    </section>
  )
}

export default Card
