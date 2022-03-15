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

    allStrapiProject(filter: {slug: {nin: [$slug] }}) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`

const ProjectPage = ({ data }) => {
  const project = data.strapiProject;
  const other = data.allStrapiProject;
  return (
    <ProjectView
      project={project}
      other={other}
    />
  );
};

export default ProjectPage;
