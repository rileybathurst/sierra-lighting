import { graphql } from "gatsby";

export const query = graphql`
  fragment areaCardFragment on STRAPI_AREA {
    id
    title:name
    slug
    excerpt
    image {
      ...cardImageFragment
    }
  }
`;
