import { graphql } from "gatsby"

export const query = graphql`
  fragment areaLink on STRAPI_AREA {
    id
    name
    state
    slug
  }
`