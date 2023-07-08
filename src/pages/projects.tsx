import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { CardType } from "../types/card";

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
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

      wedding: allStrapiProject(filter: { service: { eq: "wedding" } }) {
        nodes {
          ...projectCard
        }
      }
    }
  `);

  let residential = data.residential;
  let commercial = data.commercial;
  let wedding = data.wedding;

  let projects = [
    ...residential.nodes,
    ...commercial.nodes,
    ...wedding.nodes,
  ];

  return (
    <>
      <Seo
        title="Projects | Sierra Lighting"
        description="A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/projects-og-sierra_lighting.jpg"
      />
      <Header />



      <main className="measure">

        {/* // TODO: this can be looped I think I want to add the service compent first */}
        <h1>Projects</h1>
        <p>{/* //TODO: put a description here */}</p>

        <h3>Residential</h3>
        <div className="deck">
          {residential.nodes.map((project: CardType) => (
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
          {commercial.nodes.map((project: CardType) => (
            <div key={project.id}>
              <Card
                card={project}
                breadcrumb="project"
              />
            </div>
          ))}
        </div>

        <hr />

        <h3>Wedding</h3>
        <div className="deck">
          {wedding.nodes.map((project: CardType) => (
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

export default ProjectsPage;
