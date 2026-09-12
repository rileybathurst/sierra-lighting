import { graphql } from "gatsby";

export const query = graphql`
  fragment cardImageFragment on STRAPI__MEDIA {
    localFile {
      childImageSharp {
        gatsbyImageData(
            breakpoints: [111, 165, 222, 444, 880]
            width: 222
          )
      }
  }
    alternativeText
}
`;
