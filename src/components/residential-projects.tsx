import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Card from "./card";

function ResidentialProjects() {

  const { allStrapiProject } = useStaticQuery(graphql`
    query ResidentialProjectsQuery {
      allStrapiProject(filter: {service: {eq: "residential"}}) {
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
        {allStrapiProject.nodes.map(project => (
          <div key={project.id}>
            <Card card={project} breadcrumb="project" />
          </div>
        ))}
      </div>
    </>
  );
}

export default ResidentialProjects
