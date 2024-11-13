import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import type { CardType } from "../types/card-type";

const VendorsPage = () => {

  const { allStrapiVendor } = useStaticQuery(graphql`
    query VendorsQuery {
      allStrapiVendor {
        nodes {
          ...vendorCard
        }
      }
    }
  `)

  const vendorSet = new Set<string>();
  for (const vendorService of allStrapiVendor.nodes) {
    vendorSet.add(vendorService.service)
  }
  const vendorArray: string[] = Array.from(vendorSet);
  // console.log(vendorArray)

  return (
    <>
      <Header />

      <main>
        <h1 className="mixta">Wedding Vendors</h1>
        {/* // TODO: query this */}
        <p>We built our business by providing outstanding quality, value, and service. We support others in Reno/Tahoe that have the same commitment.</p>
      </main >

      {vendorArray.map((service) => (
        <div key={service}>
          <div className="stork">
            <hr />
            <h3 className="capitalize">
              <Link to={`/vendor/${service}`}>{service}</Link>
            </h3>
          </div>

          <div className="deck">
            {allStrapiVendor.nodes
              .filter((vendor: { service: string; }) => vendor.service === service)
              .map((vendor: CardType) => (
                <Card
                  key={vendor.id}
                  {...vendor}
                  breadcrumb="vendor"
                />
              ))}
          </div>
        </div >
      ))}

      <Footer />

    </>
  )
}

export default VendorsPage


export const Head = () => {
  return (
    <SEO
      title='Vendors'
      description="We built our business by providing outstanding quality, value, and service. We support others in Reno/Tahoe that have the same commitment."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      url="vendor"
    />
  )
}
