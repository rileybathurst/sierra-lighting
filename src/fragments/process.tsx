import { graphql } from "gatsby"

/* export default function Process{
  return (...)
} */

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