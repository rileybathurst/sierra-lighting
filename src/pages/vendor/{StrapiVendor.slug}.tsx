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
    }
  }
`

const VendorPage = ({ data }) => {
  const vendor = data.strapiVendor;
  return (
    <VendorView
      vendor={vendor}
    />
  );
};

export default VendorPage;
