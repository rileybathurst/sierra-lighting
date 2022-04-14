import * as React from "react"
import { graphql } from "gatsby"
import AreaView from "../../views/area-view"

export const query = graphql`
  query AreaQuery($slug: String!) {
    strapiArea(slug: { eq: $slug }) {
      id
      name
      tagline

      description {
        data {
          description
        }
      }
      
      state
      slug

      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }

      venues {
        id
        name
        slug
        description

        venueImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
        }
      }
    }
  }
`

const AreaPage = ({ data }) => {
  const area = data.strapiArea;
  return (
    <AreaView
      area={area}
    />
  );
};

export default AreaPage;
