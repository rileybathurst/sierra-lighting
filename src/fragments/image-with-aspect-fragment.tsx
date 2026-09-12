import { graphql } from "gatsby";

// ? are both url needed?
export const query = graphql`
  fragment imageWithAspectFragment on STRAPI__MEDIA {
    localFile {
      childImageSharp {
        gatsbyImageData
        resize {
          aspectRatio
        }
      }
      url
    }
    alternativeText
    url
  }
`;
