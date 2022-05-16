import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import StateAbbreviation from "../components/state-abbreviation";

function ReactAddress(props) {
  if (props.address) {
    return <ReactMarkdown children={props.address.data.address} />;
  } else {
    return null;
  }
}

const VenueView = ({ venue, other }) => {
  return (
    <>
      <Seo
        title={`${venue.name} | Sierra Lighting`}
        description={venue?.excerpt}
        image={venue?.venueImage?.localFile?.url}
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
            <Link itemProp="item" to={`/area/${venue.area.slug}`}>
              <span itemProp="name">{venue.area.name}</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="3" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{venue.name}</span>
            <meta itemProp="position" content="4" />
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
          <h2 className="crest">{venue.area.name}, <StateAbbreviation state={venue.area.state} /></h2>
          <h1 className="range">{venue.name}</h1>
          <hr />
          <p>{venue.description}</p>

          <hr />
          <address>
            {/* // TODO this could probably be more structured with seo */}
            <p><ReactAddress address={venue.address} /></p>
          </address>
        </article>
      </main>

      <div className="measure">
        <hr />
        <h4>Other Wedding Venues in {venue.area.name}, <StateAbbreviation state={venue.area.state} /></h4>
      </div>

      {/* // TODO this shouldnt get all of these but get the frist 3 then deal with it from there */}
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
              <h3 className="crest">
                Located in {other.area.name}, <StateAbbreviation state={other.area.state} /></h3>
              <h2 className="mixta">
                <Link to={`/venue/${other.slug}`}>
                  {other.name}
                </Link>
              </h2>
              <p>{other.except}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="measure">
        <h3 className="crest">Even More</h3>
        <h2 className="range"><Link to='/venues' className="link--subtle">All Other Venues</Link></h2>
      </div>

      <Footer />
    </>
  );
};

export default VenueView;
