// TODO: this needs to be grabbing children as well

import * as React from "react"
import { graphql } from "gatsby"
import AreaView from "../../views/area-view"
import SEO from "../../components/seo"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const query = graphql`
  query AreaQuery($slug: String!) {
    strapiArea(slug: { eq: $slug }) {
      id
      name
      tagline

      description {
        data {
          description
        }
      }
      
      state
      slug

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

      venues {
        id
        name
        slug
        excerpt

        venueImage {
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

const AreaPage = ({ data }) => {
  return (
    <AreaView
      area={data.strapiArea}
    />
  );
};

export default AreaPage;

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiArea.name} | ${useSiteMetadata().title}`}
      description={data.strapiArea?.excerpt}
      image={data.strapiArea?.image?.localFile?.url}
      url={`area/${data.strapiArea.slug}`}
    />
  )
}