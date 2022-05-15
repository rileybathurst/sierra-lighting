import * as React from "react"
import { graphql } from "gatsby"
import VenueView from "../../views/venue-view"

export const query = graphql`
  query VenueQuery($slug: String!) {
    strapiVenue(slug: { eq: $slug }) {
      id
      name
      description
      slug
      excerpt
      
      area {
        name
        state
      }

      address {
        data {
          address
        }
      }

      venueImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }
    }

    allStrapiVenue(limit: 3, filter: {slug: {nin: [$slug] }}) {
      nodes {
        name
        id
        slug
        description
        excerpt

        venueImage {
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

        area {
          name
          state
        }
      }
    }
  }
`

const VenuePage = ({ data }) => {
  const venue = data.strapiVenue;
  const other = data.allStrapiVenue;

  return (
    <VenueView
      venue={venue}
      other={other}
    />
  );
};

export default VenuePage;
