// * this page is /vendor/floral
import React from 'react';
import { graphql, Link } from 'gatsby'
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import { SEO } from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import type { CardType } from '../types/card-type';

interface VendorServiceViewTypes {
  data: {
    allStrapiVendor: {
      nodes: CardType[];
      distinct: string;
    };
  };
}
const VendorServiceView = ({ data }: VendorServiceViewTypes) => {
  return (
    <>
      <Header />

      <main>
        {/* // TODO: the order is wrong here, it should be: h1 then h2 */}
        <h2 className="crest">Who we like to work with</h2>
        <h1 className="mixta capitalize">{data.allStrapiVendor.distinct}</h1>
        <hr />
      </main>

      <div className="deck">
        {data.allStrapiVendor.nodes.map((job: CardType) => (
          <Card
            key={job.id}
            {...job}
            breadcrumb='vendor'
          />
        ))}
      </div>

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/vendor/">Vendors</Link></Breadcrumb>
        <Breadcrumb>{data.allStrapiVendor.distinct}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default VendorServiceView;

export const query = graphql`
  query VendorServiceTemplate($service: String!) {
  allStrapiVendor(filter: {service: {eq: $service}}) {
      nodes {
        ...vendorCard
      }
    distinct(field: {service: SELECT})
  }
}
`

export const Head = ({ data }: VendorServiceViewTypes) => {
  return (
    <SEO
      title={`${data.allStrapiVendor.distinct} Vendors`}
      description="We built our business by providing outstanding quality, value, and service.
      We support others in Reno/Tahoe that have the same commitment."
      // TODO: good idea bad implementation of the image
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      url={`vendor/${data.allStrapiVendor.distinct}`}
      breadcrumbs={[
        {
          name: 'Vendors',
          item: 'vendor'
        },
        {
          name: data.allStrapiVendor.distinct,
          item: `vendor/${data.allStrapiVendor.distinct}`
        }
      ]}
    />
  )
}

