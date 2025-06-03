import { graphql } from "gatsby"

export const query = graphql`
  fragment showcase on STRAPI_SHOWCASE {
    id
    
    roofline
    price
    tree
    tier

    description {
      data {
        description
      }
    }
    
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