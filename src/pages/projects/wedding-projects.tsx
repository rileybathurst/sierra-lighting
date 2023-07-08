import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import projectCard from "../../types/projectcard";

const WeddingProjectsPage = () => {
  const { allStrapiProject } = useStaticQuery(graphql`
    query WeddingProjectsPageQuery {
      allStrapiProject(filter: { service: { eq: "wedding" } }) {
        nodes {
          ...projectCard
        }
      }
    }
  `);

  return (
    <>
      <Seo
        title="Wedding Projects | Sierra Lighting"
        description="some of our finest wedding projects"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/wedding-og-sierra_lighting.jpg"
      />
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
            <span itemProp="name">Wedding Projects</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <main>
        <div className="measure">
          <h3>Wedding Projects</h3>
        </div>

        <div className="deck">
          {allStrapiProject.nodes.map((project: projectCard) => (
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

export default WeddingProjectsPage;
