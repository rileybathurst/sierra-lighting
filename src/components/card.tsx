import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import type { CardType } from "../types/card-type";

const Card = ({ image, venueImage, profile, title, name, slug, excerpt, areas, breadcrumb }: CardType) => {

  // console.log(Object.entries({ image, venueImage, profile, title, name, slug, excerpt, areas, breadcrumb }));
  // console.log(areas);
  // console.log(excerpt);

  if (areas) {
    areas.length === 0 && !excerpt ? console.warn(`${title ?? name} card has no content`)
      : null
  }

  if (!areas && !excerpt) {
    console.warn(`${title ?? name} card has no content`);
  }

  // * testing for missing alt text
  image?.alternativeText ?
    null
    : console.warn(`${title ?? name} image has no alt`);

  return (
    <section className="card">
      <Link
        to={`/${breadcrumb}/${slug}`}
        className="image"
      >
        {/* // TODO: this seems dumb cant I always just pass the correct prop or is it folded inside */}
        {/* {image ?? venueImage ?? profile ? */}
        {image || venueImage || profile ?
          <GatsbyImage
            image={
              image?.localFile?.childImageSharp?.gatsbyImageData ??
              venueImage?.localFile?.childImageSharp?.gatsbyImageData ??
              profile?.localFile?.childImageSharp?.gatsbyImageData
            }
            alt={image?.alternativeText ?? title ?? name ?? ""}
          />
          :
          <StaticImage
            // TODO: I can probably do something interesting with an svg
            src="https://sierralighting.s3.us-west-1.amazonaws.com/missing-card-image.jpg"
            alt={title ?? name ?? ""}
          />
        }
      </Link>
      <div className="paper">{/* stay gold */}</div>
      <h2 className="mixta">
        <Link
          to={`/${breadcrumb}/${slug}`}
        >
          {name ?? title}
        </Link>
      </h2>
      {areas ?
        areas?.length > 0 ?
          <div className="subarea">
            <p>Including:</p>
            <ul>
              {areas.map(area => (
                <li key={area.name}>
                  {area.name}
                </li>
              ))}
            </ul>
          </div>
          :
          <p>{excerpt}</p>
        : <p>{excerpt}</p>}
    </section>
  )
}

export default Card
