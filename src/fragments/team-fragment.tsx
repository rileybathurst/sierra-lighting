import { graphql } from "gatsby";

export const query = graphql`
  fragment teamFragment on STRAPI_TEAM {
    id
    title: name
    slug
    excerpt
    bio { data { bio } }

    image: avatar {
      localFile {
        childImageSharp {
          gatsbyImageData (
            layout: CONSTRAINED
            breakpoints: [222, 444, 880]
            width: 444
            quality: 80
          )
        }
        url
      }
    }
  }
`;
