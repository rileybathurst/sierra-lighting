import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const VenueView = ({ venue, other }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />

      <div className="measure">
        {/* // TODO Breadcrumbs */}
        <p className="breadcrumbs">
          <Link to="/">Home</Link>&nbsp;
          / <Link to="/wedding">Wedding</Link>&nbsp;
          / <Link to="/venues">Wedding Venues</Link>&nbsp;
          / {venue.name}
        </p>
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
