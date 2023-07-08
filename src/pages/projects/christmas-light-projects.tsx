import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import { projectCard } from "../../../types/projectcard";

const ChristmasLightsProjectsPage = () => {

  const data = useStaticQuery(graphql`
    query ChristmasLightsProjectsQuery {
      residential: allStrapiProject(
        filter: { service: { eq: "residential" } }
      ) {
        nodes {
          ...projectCard
        }
      }

      commercial: allStrapiProject(filter: { service: { eq: "commercial" } }) {
        nodes {
          ...projectCard
        }
      }
    }
  `);

  let residential = data.residential;
  let commercial = data.commercial;

  return (
    <>
      <Seo title="Christmas Light Projects | Sierra Lighting" />
      <Header />

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
            <Link itemProp="item" to="/projects">
              <span itemProp="name">Projects</span>
            </Link>
            &nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name">Christmas Light Projects</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      {/* // TODO: loop */}
      <main className="measure">
        <h3>Residential</h3>
        <div className="deck">
          {residential.nodes.map((project: projectCard) => (
            <div key={project.id}>
              <Card
                card={project}
                breadcrumb="project"
              />
            </div>
          ))}
        </div>

        <hr />

        <h3>Commercial</h3>
        <div className="deck">
          {commercial.nodes.map((project: projectCard) => (
            <div key={project.id}>
              <Card
                card={project}
                breadcrumb="project"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ChristmasLightsProjectsPage;
