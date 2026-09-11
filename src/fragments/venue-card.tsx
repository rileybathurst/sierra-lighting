import { graphql } from "gatsby"

export const query = graphql`
  fragment venueCardFragment on STRAPI_VENUE {
    id
    name
    excerpt
    slug

    image: venueImage {
      ...cardImageFragment
    }
  }
`