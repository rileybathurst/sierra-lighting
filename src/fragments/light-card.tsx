import { graphql } from "gatsby";

export const query = graphql`
  fragment lightCard on STRAPI_LIGHT {
    id
    title:name
    slug
    excerpt

    image {
      ...cardImageFragment
    }
  }
`;
