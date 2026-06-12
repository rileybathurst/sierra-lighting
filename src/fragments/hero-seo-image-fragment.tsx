import { graphql } from "gatsby"

export const query = graphql`
  fragment heroSEOImageFragment on STRAPI__MEDIA {
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
    caption
  }
`