// TODO: run this through gatsby-node to get the service in the url

import * as React from "react"
import { graphql } from "gatsby"
import ProjectView from "../../views/project-view"
import SEO from "../../components/seo"


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

      gallery {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }

      lights {
        ...lightCard
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

      services {
        name
        slug
      }

      testimonial {
        id
        customer
        position
        review
        vendor {
          name
          slug
        }
      }

    }

    triptych: allStrapiLight(limit: 3, filter: {projects: {elemMatch: {slug: {eq: "red"}}}}) {
      nodes {
        ...lightCard
      }
    }

    additional: allStrapiLight(skip: 3, filter: {projects: {elemMatch: {slug: {eq: "red"}}}}) {
      nodes {
        id
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

  // console.log(data);

  return (
    <ProjectView
      project={data.strapiProject}
      triptych={data.triptych.nodes}
      additional={data.additional.nodes}
      other={data.allStrapiProject}
    />
  );
};

export default ProjectPage;

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiProject.title}`}
      description={data.strapiProject?.excerpt}
      image={data.strapiProject?.ogimage}
      url={`project/${data.strapiProject.slug}`}
      breadcrumbs={[
        {
          name: 'Project',
          item: 'project'
        },
        {
          name: data.strapiProject.slug,
          item: `project/${data.strapiProject.slug}`
        }
      ]}
    />
  )
}