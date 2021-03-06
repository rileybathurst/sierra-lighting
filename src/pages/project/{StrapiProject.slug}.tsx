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
      excerpt
      slug
      ogimage

      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [960, 1840]
                width: 960
            )
          }
          url
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

      areas {
        name
        state
        slug
      }

      teams {
        name
        slug
      }

      vendors {
        name
        slug
        service
      }
      
      venue {
        name
        slug
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
