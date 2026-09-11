import { graphql } from "gatsby"

export const query = graphql`
  fragment vendorCardFragment on STRAPI_VENDOR {
    id
    title: name
    excerpt
    slug
    collaboratorAncillary

    image: profile {
      ...cardImageFragment
    }

    collaborator {
      slug
    }
  }
`