// ? why are we not linking at the top level its a card it has to link

import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import truncateText from "./truncate-text";
import type { CardProps } from "../types/card-type";

const Card = ({
  image,
  title,
  slug,
  excerpt,
  areas,
  breadcrumb,
  query,
  href,
}: CardProps) => {
  if (
    process.env.NODE_ENV === "development" &&
    (!areas || areas?.length === 0) &&
    !excerpt
  ) {
    console.warn(`${title} card has no content`);
  }

  if (!image?.alternativeText) {
    console.warn(`${title} image has no alt`);
  }

  const { strapiError } = useStaticQuery(graphql`
    query cardQuery {
      strapiError {
        missingCard {
          ...cardImageFragment
        }
      }
    }
  `);

  return (
    <section className="card">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="image"
        >
          <GatsbyImage
            image={
              image
                ? image?.localFile?.childImageSharp?.gatsbyImageData
                : strapiError.missingCard.localFile.childImageSharp
                  .gatsbyImageData
            }
            alt={image?.alternativeText ?? title}
          />
        </a>
      ) : (
        <Link to={`/${breadcrumb}/${slug}?=${query ?? ""}`} className="image">
          <GatsbyImage
            image={
              image
                ? image?.localFile?.childImageSharp?.gatsbyImageData
                : strapiError.missingCard.localFile.childImageSharp
                  .gatsbyImageData
            }
            alt={image?.alternativeText ?? title}
          />
        </Link>
      )}
      <div className="paper">{/* stay gold */}</div>
      <h2>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <Link to={`/${breadcrumb}/${slug}?=${query ?? ""}`}>{title}</Link>
        )}
      </h2>
      <div className="text">
        <p>{truncateText(excerpt)}</p>
        {areas && areas?.length > 0 && (
          <div>
            <p>Including:</p>
            <ul>
              {areas.map((area) => (
                <li key={area.name}>{area.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Card;
