// when passing with the spread you have to pass the breadcrumb after

import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import type { CardType } from "../types/card-type";

const Card = ({ image, venueImage, profile, title, slug, excerpt, areas, breadcrumb, query, href }: CardType) => {

  if (process.env.NODE_ENV === "development" && !areas && !excerpt) {
    console.warn(`${title} card has no content`)
  }

  if (process.env.NODE_ENV === "development" && areas?.length === 0 && !excerpt) {
    console.warn(`${title} card has no content`)
  }

  const CardImage = image?.localFile?.childImageSharp?.gatsbyImageData ?? venueImage?.localFile?.childImageSharp?.gatsbyImageData ?? profile?.localFile?.childImageSharp?.gatsbyImageData;
  const CardAlt = image?.alternativeText ?? venueImage?.alternativeText ?? profile?.alternativeText ?? title;

  if (!image?.alternativeText && !venueImage?.alternativeText && !profile?.alternativeText) {
    console.warn(`${title} image has no alt`)
  }

  return (
    <section
      className="card"
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="image">
          {CardImage ?
            <GatsbyImage
              image={CardImage}
              alt={CardAlt}
            />
            :
            <StaticImage
              // TODO: I can probably do something interesting with an svg
              src="https://sierralighting.s3.us-west-1.amazonaws.com/missing-card-image.jpg"
              alt={title}
            />
          }
        </a>
      ) : (
        <Link
          to={`/${breadcrumb}/${slug}?=${query ?? ''}`}
          className="image"
        >
          {CardImage ?
            <GatsbyImage
              image={CardImage}
              alt={CardAlt}
            />
            :
            <StaticImage
              // TODO: I can probably do something interesting with an svg
              src="https://sierralighting.s3.us-west-1.amazonaws.com/missing-card-image.jpg"
              alt={title}
            />
          }
        </Link>
      )}
      <div className="paper">{/* stay gold */}</div>
      <h2>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <Link to={`/${breadcrumb}/${slug}?=${query ?? ''}`}>
            {title}
          </Link>
        )}
      </h2>
      {areas ?
        areas?.length > 0 ?
          <div className="subarea">
            <p>{excerpt}</p>
            <div >
              <p>Including:</p>
              <ul>
                {areas.map(area => (
                  <li
                    key={area.name}
                  >
                    {area.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          :
          <p>{excerpt}</p>
        : <p>{excerpt}</p>}
    </section>
  )
}

export default Card
