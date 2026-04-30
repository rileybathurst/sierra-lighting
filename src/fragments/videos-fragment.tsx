import { graphql } from "gatsby"

export const query = graphql`
  fragment videoFragment on STRAPI_VIDEO {
    name
    mux
    description
    publishedAt
    thumbnailTime
  }
`