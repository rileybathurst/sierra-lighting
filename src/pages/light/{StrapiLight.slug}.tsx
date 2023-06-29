import * as React from "react"
import { graphql } from "gatsby"
import LightView from "../../views/light-view"

export const query = graphql`
  query LightQuery($slug: String!) {
    strapiLight(slug: { eq: $slug }) {
      id
      name
      slug
      excerpt
      description

      alias {
        internal {
          content
        }
      }

      image {
        localFile {
          url
          childImageSharp {
            gatsbyImageData(
              breakpoints: [960, 1920]
              width: 960
            )
          }
        }
        alternativeText
      }

      projects {
        ...projectCard
      }
    }

    allStrapiLight(limit: 3, filter: {slug: {nin: [$slug] }}) {
      nodes {
        ...lightCard
      }
    }
  }
`

const LightPage = ({ data }) => {
  const light = data.strapiLight;
  const other = data.allStrapiLight;
  return (
    <LightView
      light={light}
      other={other}
    />
  );
};

export default LightPage;
