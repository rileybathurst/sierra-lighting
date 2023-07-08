import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Card from "./card";

function WeddingProjects() {
  const { allStrapiProject } = useStaticQuery(graphql`
    query WeddingProjectsQuery {
      allStrapiProject(filter: { service: { eq: "wedding" } }) {
        nodes {
          title
          description {
            data {
              description
            }
          }
          slug

          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  breakpoints: [111, 165, 222, 444, 880]
                  width: 222
                )
              }
            }
            alternativeText
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="measure">
        <hr />
        <h3 className="crest">What have we done</h3>
        <h2 className="ridge mixta">Projects</h2>
      </div>

      <div className="deck">
        {allStrapiProject.nodes.map((project) => (
          <div key={project.id}>
            <Card
              card={project}
              breadcrumb="project"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default WeddingProjects;
