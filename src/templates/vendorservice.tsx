// * this page is /vendor/floral.tsx
// not /vendor/twinefloralco

import React from 'react';
import { graphql, Link } from 'gatsby'

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import { CardType } from '../types/card-type';

const VendorServiceView = ({ data }) => {
  return (
    <>
      <Header />

      <div className="stork">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/vendor">
              <span itemProp="name">Vendors</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className='capitalize'>{data.allStrapiVendor.distinct}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main>

        <div className="stork">

          {/* // TODO: the order is wrong here, it should be: h1 then h2 */}
          <h2 className="crest">Who we like to work with</h2>
          <h1 className="mixta capitalize">{data.allStrapiVendor.distinct}</h1>
          <hr />
        </div>

        <div className="deck">
          {data.allStrapiVendor.edges.map((job: CardType) => (
            <Card
              key={job.node.id}
              card={job.node}
              breadcrumb='vendor'
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VendorServiceView;

export const query = graphql`
  query VendorServiceTemplate($service: String!) {
  allStrapiVendor(filter: {service: {eq: $service}}) {
    edges {
      node {
        ...vendorCard
      }
    }
    distinct(field: {service: SELECT})
  }
}
`


export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.allStrapiVendor.distinct} Vendors`}
      description="We built our business by providing outstanding quality, value, and service.
      We support others in Reno/Tahoe that have the same commitment."
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

