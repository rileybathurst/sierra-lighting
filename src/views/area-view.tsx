import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

function ReactDescription(props) {
  if (props.desc) {
    return <ReactMarkdown children={props.desc.data.description} />;
  } else {
    return null;
  }
}

function Venues(props) {
  const name = props.name;
  if (props.yes.length !== 0) {
    return (
      <div className="measure">
        <hr />
        <h3>Wedding Venues in {name}</h3>
      </div>
    );
  } else {
    return null
  }
}

const AreaView = ({ area }) => {
  return (
    <>
      <Seo
        title="Sierra Lighting"
        description={area.excerpt}
        image={area.image.localFile.url}
      />

      <Header />

      {/* // ? these are breadcrumbs but we are maybe using additional microdata for location */}
      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="first-capital">
            <Link itemProp="item" to="/areas">
              <span itemProp="name">{area.state}</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{area.name}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <main>

        <GatsbyImage
          image={
            area?.image?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt={area.image?.alternativeText}
          className="poster"
        />

        <article className="measure single" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <h2 className="crest">{area.tagline}</h2>
          <h1 className="range" itemProp="addressLocality">{area.name}, {area.state}</h1>
          {/* // TODO: the state needs to be changed to the abreviation */}
          <ReactDescription desc={area.description} />
        </article>
      </main>


      <Venues yes={area.venues} name={area.name} />

      {/* // TODO this could all be behing the venues if statement */}
      <div className="deck">
        {
          area?.venues.map(venue => (
            <section className="card" key={venue.id}>

              <GatsbyImage
                image={
                  venue?.venueImage?.localFile?.childImageSharp
                    ?.gatsbyImageData
                }
                alt={venue.venueImage?.alternativeText}
                className=""
              />

              <div className="paper"></div>
              <div className="content">
                <hr />
                <h2><Link to={`/venue/${venue.slug}`}>{venue.name}</Link></h2>
                <p>{venue.description}</p>
              </div>
            </section>
          ))
        }
      </div>

      {/* // TODO if no venues show other places */}

      <Footer />
    </>
  );
};

export default AreaView;
