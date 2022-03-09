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
    }
  }
`

const VenuePage = ({ data }) => {
  const venue = data.strapiVenue;
  return (
    <VenueView
      venue={venue}
    />
  );
};

export default VenuePage;
