import { graphql } from "gatsby"

export const query = graphql`
  fragment homeGalleryFragment on STRAPI_SERVICE {
    id
    name
    slug
    hero_light {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    
    hero_dark {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`