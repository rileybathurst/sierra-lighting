import { graphql } from "gatsby";

export const query = graphql`
  fragment testimonialCardFragment on STRAPI_TESTIMONIAL {
    id
    customer
    position
    review
    stars
    vendor {
      name
      slug
    }
  }
`;
