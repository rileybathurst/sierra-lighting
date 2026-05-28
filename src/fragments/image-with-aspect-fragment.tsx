import { graphql } from "gatsby"

export const query = graphql`
  fragment imageWithAspectFragment on STRAPI__MEDIA {
    localFile {
      childImageSharp {
        gatsbyImageData
        resize {
          aspectRatio
        }
      }
      url
    }
    alternativeText
    url
  }
`