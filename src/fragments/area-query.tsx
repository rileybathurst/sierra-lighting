import { graphql } from "gatsby"

export const query = graphql`
  fragment areaQuery on STRAPI_AREA {
    name
    excerpt
    slug

    state

    image {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }

    venues {
      id
    }

    areas {
      name
      slug

      venues {
        id
      }
    }
  }
`
