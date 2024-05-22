import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import type { DeckType } from "../types/deck-type";

// TODO: rename this they are not breadcrumbs they are kinda just links but its not the direct link
interface BreadcrumbTypes {
  breadcrumb: string;
  slug: string;
  className?: string | undefined;
  children?: React.ReactElement | string;
}
function Breadcrumb({ breadcrumb, slug, className, children }: BreadcrumbTypes) {
  return (
    <Link
      to={`/${breadcrumb}/${slug}`}
      className={className}
    >
      {children}
    </Link>
  )
}

interface ContentTypes {
  excerpt: string;
  subAreas: Array<{ name: string }>;
}
function Content({ excerpt, subAreas }: ContentTypes) {

  if (subAreas?.length > 0) {
    return (
      <>
        <p>Including:</p>
        <ul>
          {subAreas.map(area => (
            <li key={area.name}>
              {area.name}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <p>{excerpt}</p>
  );
}

const Card = ({ card, breadcrumb }: DeckType) => {

  return (
    <section className="card">
      <Breadcrumb
        slug={card.slug}
        breadcrumb={breadcrumb}
        className="image"
      >
        {/* // TODO: this seems dumb cant I always just pass the correct prop or is it folded inside */}
        {card?.image?.localFile?.childImageSharp?.gatsbyImageData ||
          card?.venueImage?.localFile?.childImageSharp?.gatsbyImageData ||
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
      </Breadcrumb>
      <div className="paper">{/* stay gold */}</div>
      <div className="content">
        <h2 className="mixta">
          <Breadcrumb
            slug={card.slug}
            breadcrumb={breadcrumb}
          >
            {card.name ?? card.title}
          </Breadcrumb>
        </h2>

        <Content
          excerpt={card.excerpt}
          subAreas={card.areas}
        />

      </div>
    </section>
  )
}

export default Card
