import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const VenueView = ({ venue, other }) => {
  return (
    <>
      <Seo
        title="Sierra Lighting"
        description={venue.description}
        image={venue.venueImage.localFile.url}
      />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/venues">
              <span itemProp="name">Venues</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{venue.name}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <GatsbyImage
        image={
          venue?.venueImage?.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        alt={venue.venueImage?.alternativeText}
        className="poster"
      />

      <main className="measure">
        <article className="single">
          <h1>{venue.name}</h1>
          <h2>{venue.area.name}, {venue.area.state}</h2>
          <hr />
          <p>{venue.description}</p>
        </article>
      </main>

      <div className="measure">
        <hr />
        <h4>Other Wedding Venues</h4>
      </div>

      <div className="deck measure">
        {other.nodes.map((other) => (
          <div key={other.id} className="card">

            <GatsbyImage
              image={
                other?.venueImage?.localFile?.childImageSharp
                  ?.gatsbyImageData
              }
              alt={other.venueImage?.alternativeText}
              className=""
            />

            <div className="paper"></div>
            <div className="content">
              <hr />
              <h3 className="crest">Byline</h3>
              <h2 className="mixta">
                <Link to={`/light/${other.slug}`}>
                  {other.name}
                </Link>
              </h2>
              <p>Located in {other.area.name}, {other.area.state}</p>
              {/* // TODO capitalization and abbreviation possibly a map icon */}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default VenueView;
