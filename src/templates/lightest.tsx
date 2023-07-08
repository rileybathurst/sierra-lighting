import React from 'react';
import { graphql } from 'gatsby'

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const LightestView = (
  // { data }
) => {
  return (
    <>
      <Seo
      /*         title={`${data.strapiVendor.name} | Sierra Lighting`}
              description={data.strapiVendor?.excerpt}
              image={data.strapiVendor?.profile?.localFile?.url} */
      />
      <Header />



      <main className="measure">
        🦄
      </main>


      <Footer />

    </>
  );
};

export default LightestView;

/* export const query = graphql`
  query LightestTemplate(
    $slug: String!,
    # $light_groups: String!,
    ) {
      strapiVendor(slug: {eq: $slug}) {
        id
      }
    }

    allStrapiVendor(
      limit: 3,
      filter: {service: {eq: $service}, slug: {ne: $slug}}
    ) {
      edges {
        node {
          name
          id
        }
      }
    }
` */
