import { graphql } from "gatsby"

export const query = graphql`
  fragment vendorCardFragment on STRAPI_VENDOR {
    id
    title: name
    excerpt
    slug
    collaboratorAncillary

    image: profile {
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

    collaborator {
      slug
    }
  }
`