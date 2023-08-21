import * as React from "react";
import { Link } from "gatsby";

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import StateAbbreviation from "../components/state-abbreviation";
import IfHero from "../components/ifHero";

import Card from "../components/card";
import { CardType } from "../types/card";

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
        title={`${area.name} | Sierra Lighting`}
        description={area?.excerpt}
        image={area?.image?.localFile?.url}
      />

      <Header />

      {/* // using additional microdata for location */}
      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="first-capital">
            <Link itemProp="item" to="/areas">
              <span itemProp="name">Service Areas</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="first-capital">
            <Link itemProp="item" to="/areas">
              <span itemProp="name">{area.state}</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="3" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{area.name}</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
        <hr />
      </div>

      <main>
        <IfHero hero={area?.image} />

        <article className="measure single" itemProp="address">
          <div itemProp="location" itemScope itemType="https://schema.org/areaServed">
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="name" className="sr-only">{area.name}</span>
              {/* // ! this is for the address / postaladdress / name / except its not working and its taking the description */}

              <h2 className="crest">{area.tagline}</h2>
              <h1 className="range" >
                <span itemProp="addressLocality">{area.name}</span>,&nbsp;
                <span itemProp="addressRegion" className="first-capital">< StateAbbreviation state={area.state} /></span>
              </h1>
              <ReactDescription desc={area.description} />
            </div>
          </div>
        </article>
      </main>


      <Venues yes={area.venues} name={area.name} />

      {/* // TODO this could all be behing the venues if statement */}
      <div className="deck">
        {
          area?.venues.map((venue: CardType) => (
            <section key={venue.id}>
              <Card
                card={venue}
                breadcrumb='venue'
              />
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
