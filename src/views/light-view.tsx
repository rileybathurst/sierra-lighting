import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const LightView = ({ light, other }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main>

        {/* // TODO Breadcrumbs */}
        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span></Link>
              <meta itemProp="position" content="1" />
            </li>

            &nbsp;/&nbsp;

            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/lights">
                <span itemProp="name">Lights</span></Link>
              <meta itemProp="position" content="2" />
            </li>

            &nbsp;/&nbsp;

            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/faqs">
                <span itemProp="name">{light.name}</span></Link>
              <meta itemProp="position" content="3" />
            </li>

          </ol>
          <hr />
        </div>


        <GatsbyImage
          image={
            light?.image?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt={light.image?.alternativeText}
          className="poster"
        />
        <article className="measure">
          <h1>{light.name}</h1>
          <p>{light.description}</p>
        </article>
      </main>

      <div className="measure">
        <hr />
        <h4>Other lighting Styles</h4>
      </div>

      <div className="deck measure">
        {other.nodes.map((other) => (
          <div key={light.id} className="card">

            <GatsbyImage
              image={
                other?.image?.localFile?.childImageSharp
                  ?.gatsbyImageData
              }
              alt={other.image?.alternativeText}
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
              <p>{other.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default LightView;
