import { graphql } from "gatsby"

export const query = graphql`
  fragment process on STRAPI_PROCESS {
    id
    name
    markdown {
      data {
        markdown
      }
    }
  }
`