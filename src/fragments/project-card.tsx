import { graphql } from "gatsby"

export const query = graphql`
  fragment projectCard on STRAPI_PROJECT {
    id
    title
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
`