import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby'

/* function Console(props) {
  console.log(props.console)
  return null;
} */

const VendorServiceLoopView = ({ data }) => {
  return (
    <>
      {data.strapiVenue.name}

      {/* <StaticQuery
        query={query}
        render={data => (
          <>

            <div className="deck">

              {
                data.name.nodes.map(vendor => (
                  <>
                    <h2>{vendor.name}</h2>
                  </>

                ))
              }
            </div>
          </>
        )}
      /> */}
      <p>this is wierd it keeps giving photography as the service</p>
    </>
  );
};

export default VendorServiceLoopView;
// $service: String!,
export const query = graphql`
  query VendorServiceLoopTemplate {
    name: allStrapiVendor {
      edges {
        node {
          name
        }
      }
    }
  }
`
