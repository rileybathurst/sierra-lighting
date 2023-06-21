import { graphql } from "gatsby"

export const query = graphql`
  fragment venueCard on STRAPI_VENUE {
    id
    name
    excerpt
    slug

    venueImage {
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