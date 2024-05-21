import { graphql } from "gatsby"

export const query = graphql`
  fragment vendorCard on STRAPI_VENDOR {
    id
    name
    excerpt
    slug
    service

    profile {
      localFile {
        childImageSharp {
          gatsbyImageData(
            breakpoints: [111, 165, 222, 444]
            width: 222
          )
        }
      }
      alternativeText
    }
  }
`