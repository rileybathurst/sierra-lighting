import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import type { DeckType } from "../types/deck-type";

const VendorsPage = () => {

  const data = useStaticQuery(graphql`
    query VendorsQuery {
      photography: allStrapiVendor(filter: {service: {eq: "photography"}}) {
        nodes {
          ...vendorCard
        }
      }
      
      planning: allStrapiVendor(filter: {service: {eq: "planning"}}) {
        nodes {
          ...vendorCard
        }
      }
      
      production: allStrapiVendor(filter: {service: {eq: "production"}}) {
        nodes {
          ...vendorCard
        }
      }
      
      floral: allStrapiVendor(filter: {service: {eq: "floral"}}) {
        nodes {
          ...vendorCard
        }
      }
      
      other: allStrapiVendor(
        filter: {service: {nin: ["photography", "planning", "production", "floral"]}}
        ) {
        nodes {
          ...vendorCard
        }
      }

    }
`)

  // TODO: test this
  if (data.other.nodes.length > 0) {
    console.log(`Services outside the set ${data.other.nodes}`)

    const vendorServices = [
      data.photography,
      data.planning,
      data.production,
      data.floral,
      data.other
    ]

    return (
      vendorServices
    )
  }

  const vendorServices = [
    data.photography,
    data.planning,
    data.production,
    data.floral,
  ]

  return (
    <>
      <Header />

      <main>

        <div className="stork">

          <h1 className="mixta">Wedding Vendors</h1>

          {/* // TODO: query this */}
          <p>We built our business by providing outstanding quality, value, and service. We support others in Reno/Tahoe that have the same commitment.</p>
        </div>

        {vendorServices.map((service) => (
          <div
            key={service.nodes[0].id}
          >
            <div className="stork">
              <hr />
              <h3 className="capitalize">
                <Link to={`/vendor/${service?.nodes[0].service}`}>
                  {service?.nodes[0].service}
                </Link>
              </h3>
            </div>

            <div className="deck">
              {service.nodes.map((vendor: DeckType) => (
                <Card
                  key={vendor.id}
                  card={vendor}
                  breadcrumb="vendor"
                />
              ))}
            </div>
          </div >
        ))}

      </main >

      <Footer />

    </>
  )
}

export default VendorsPage


export const Head = () => {
  return (
    <SEO
      title={`Vendors`}
      description="We built our business by providing outstanding quality, value, and service. We support others in Reno/Tahoe that have the same commitment."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      url="vendor"
    />
  )
}
