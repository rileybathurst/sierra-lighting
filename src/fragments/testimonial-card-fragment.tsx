import { graphql } from "gatsby";

export const query = graphql`
  fragment testimonialCardFragment on STRAPI_TESTIMONIAL {
    id
    customer
    stars
    review
    position
    platform

    services {
      name
      slug
    }

    vendor {
      name
      slug

      collaborator {
        industry
        slug
      }
    }

    project {
      title
      slug
    }

    venue {
      slug
      name
    }
  }
`;
