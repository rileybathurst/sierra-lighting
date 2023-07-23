import { graphql } from "gatsby"

export const query = graphql`
  fragment lightGroup on STRAPI_LIGHT_GROUP {
    id
    name
    slug
    excerpt
    services {
      slug
      id
      name
    }
  }
`