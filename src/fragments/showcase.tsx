import { graphql } from "gatsby"

export const query = graphql`
  fragment showcase on STRAPI_SHOWCASE {
    id
    description {
      data {
        description
      }
    }
    roofline
    price
    tree
    tier
    
    project {
      id
      slug
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
`
