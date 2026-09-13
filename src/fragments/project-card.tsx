import { graphql } from "gatsby";

export const query = graphql`
  fragment projectCardFragment on STRAPI_PROJECT {
    id
    title
    slug
    excerpt

    image {
      ...cardImageFragment
    }
  }
`;
