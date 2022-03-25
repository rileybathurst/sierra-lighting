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

      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }

      lights {
        name
        id
        slug
        excerpt

        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
        }
      }
    }

    allStrapiProject(filter: {slug: {nin: [$slug] }}) {
      nodes {
        title
        id
        slug
        excerpt

        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
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
