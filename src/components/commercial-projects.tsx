import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Card from "./card";
import { IGatsbyImageData } from "gatsby-plugin-image";

function CommercialProjects() {

  const { allStrapiProject } = useStaticQuery(graphql`
    query CommercialProjectsQuery {
      allStrapiProject(filter: {service: {eq: "commercial"}}) {
        nodes {
          ...projectCard
        }
      }
    }
  `)

  return (
    <>
      <div className="measure" >
        <hr />
        <h3 className="crest">What have we done</h3>
        <h2 className="ridge mixta">Projects</h2>
      </div >

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

export default CommercialProjects
