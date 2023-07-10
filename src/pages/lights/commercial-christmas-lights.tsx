import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import { CardType } from "../../types/card";

const CommercialChristmaslightsPage = () => {
  const { allStrapiLight } = useStaticQuery(graphql`
    query CommercialChristmasLightsQuery {
      allStrapiLight(filter: { commercialchristmas: { eq: true } }) {
        nodes {
          ...lightCard
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Commercial Christmas Lights | Sierra Lighting"
        description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/lights-og-sierra_lighting.jpg"
      />
      <Header />
      <main className="lights__page">
        <div className="measure">
          <ol
            className="breadcrumbs"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span>
              </Link>
              &nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link itemProp="item" to="/lights">
                <span itemProp="name">Lights</span>
              </Link>
              &nbsp;/&nbsp;
              <meta itemProp="position" content="2" />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name">Wedding Lights</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
          <hr />
        </div>

        <div className="measure">
          <h2 className="crest">What we build</h2>
          <h1 className="mixta">Commercial Christmas Lights</h1>
        </div>

        <div className="deck">
          {allStrapiLight.nodes.map((light: CardType) => (
            <div key={light.id}>
              <Card
                card={light}
                breadcrumb="light"
              />
            </div>
          ))}
        </div>
      </main>

      <div className="measure">
        <hr />
        <h3 className="crest">What else we do</h3>
        <h2 className="range">
          <Link
            to="/lights/residential-christmas-lights"
            className="link--subtle"
          >
            Residential Christmas Lights
          </Link>
        </h2>
        <h2 className="range">
          <Link to="/lights/wedding-lights" className="link--subtle">
            Wedding Lights
          </Link>
        </h2>
      </div>

      <Footer />
    </>
  );
};

export default CommercialChristmaslightsPage;
