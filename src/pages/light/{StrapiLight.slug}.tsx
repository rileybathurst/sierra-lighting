import * as React from "react"
import { graphql } from "gatsby"
import LightView from "../../views/light-view"

import "../../styles/app.scss";

export const query = graphql`
  query LightQuery($slug: String!) {
    strapiLight(slug: { eq: $slug }) {
      id
      name
      description
      slug
      excerpt

      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }

      projects {
        id
        title
        slug
        excerpt
        image {
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
      }
    }

    allStrapiLight(limit: 3, filter: {slug: {nin: [$slug] }}) {
      nodes {
        name
        id
        slug
        excerpt

        image {
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
