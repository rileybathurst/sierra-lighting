import * as React from "react"
import { graphql } from "gatsby"
import VendorView from "../../views/vendor-view"

export const query = graphql`
  query VendorQuery($slug: String!) {
    strapiVendor(slug: { eq: $slug }) {
      id
      name
      description
      slug
      instagram
      facebook
      website
      pinterest
      service
      excerpt

      profile {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }
    }

    allStrapiVendor(filter: {slug: {nin: [$slug] }}) {
      nodes {
        name
        id
        slug
        excerpt

        profile {
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

const VendorPage = ({ data }) => {
  const vendor = data.strapiVendor;
  const other = data.allStrapiVendor;

  return (
    <VendorView
      vendor={vendor}
      other={other}
    />
  );
};

export default VendorPage;
