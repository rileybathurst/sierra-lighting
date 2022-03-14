import * as React from "react"
import { graphql } from "gatsby"
import ProjectView from "../../views/project-view"

export const query = graphql`
  query ProjectQuery($slug: String!) {
    strapiProject(slug: { eq: $slug }) {
      id
      title
      description {
        data {
          description
        }
      }
      slug
    }
  }
`

const ProjectPage = ({ data }) => {
  const project = data.strapiProject;
  return (
    <ProjectView
      project={project}
    />
  );
};

export default ProjectPage;
