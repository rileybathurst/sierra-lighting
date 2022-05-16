import * as React from "react";
import { graphql } from 'gatsby'

const CheckVenueView = ({ data }) => {
  return (
    <>
    // essentially the name this is the start means we can grab everything<br />
      {data.strapiVenue.slug}
      <hr />
      now we need all the venues in the area

      <ul>
        {data.allStrapiVenue.edges.map(venue => (

          <li>
            {venue.node.slug}
          </li>
        ))}

      </ul>

      this
    </>
  );
};

export default CheckVenueView;

export const query = graphql`
  query PartnerResortTemplate(
    $slug: String!,
    $area: String!,

    ) {
      strapiVenue(slug: {eq: $slug}) {
        slug
      }

      allStrapiVenue(
        filter: {area: {slug: {eq: $area}}}
      ) {
        edges {
          node {
            slug
          }
        }
      }



  }
`

/* 

    $area: String!

allStrapiVenue(
  filter: {area: {slug: {eq: $area}}}
) {
  edges {
    node {
      slug
    }
  }
} */