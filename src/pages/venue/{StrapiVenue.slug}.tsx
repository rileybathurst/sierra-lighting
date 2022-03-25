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
      
      area {
        name
        state
      }

      venueImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
    }

    allStrapiVenue(filter: {slug: {nin: [$slug] }}) {
      nodes {
        name
        id
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
