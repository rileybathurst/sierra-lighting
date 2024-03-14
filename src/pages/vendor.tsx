import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { CardType } from "../types/card";

function IfExtra(props
  // TODO: props type
  // props: { extra.length: number; }
) {

  // console.log(props.extra?.length);

  if (props.extra.length > 0) {
    return (
      <div className="measure">
        <hr />
        <h3>Other Vendors</h3>
      </div>
    )
  } else {
    return null
  }
}

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

  let photography = data.photography
  let planning = data.planning
  let production = data.production
  let floral = data.floral
  let other = data.other

  return (
    <>
      <Header />

      <main>

        <div className="measure">

          <h2 className="crest">Who we like to work with</h2>
          <h1 className="mixta">Wedding Vendors</h1>

          <hr />

          <h3><Link to="/vendor/photography">Photography</Link></h3>
        </div>

        <div className="deck">
          {photography.nodes.map((vendor: CardType) => (
            <div key={vendor.id}>
              <Card card={vendor} breadcrumb="vendor" />
            </div>
          ))}
        </div>

        <div className="measure">
          <hr />
          <h3><Link to="/vendor/planning">Planning</Link></h3>
        </div>

        <div className="deck">
          {planning.nodes.map((vendor: CardType) => (
            <div key={vendor.id}>
              <Card card={vendor} breadcrumb="vendor" />
            </div>
          ))}
        </div>

        <div className="measure">
          <hr />
          <h3><Link to="/vendor/production">Event Production</Link></h3>
        </div>

        <div className="deck">
          {production.nodes.map((vendor: CardType) => (
            <div key={vendor.id}>
              <Card card={vendor} breadcrumb="vendor" />
            </div>
          ))}
        </div>

        <div className="measure">
          <hr />
          <h3><Link to="/vendor/floral">Floral</Link></h3>
        </div>

        <div className="deck">
          {floral.nodes.map((vendor: CardType) => (
            <div key={vendor.id}>
              <Card card={vendor} breadcrumb="vendor" />
            </div>
          ))}
        </div>

        {/* This is a ctach all if anything comes up here build a new thing and add it to its own query */}
        <IfExtra extra={data.other} />

        <div className="deck">
          {other.nodes.map((vendor: CardType) => (
            <div key={vendor.id}>
              <Card card={vendor} breadcrumb="vendor" />
            </div>
          ))}
        </div>

      </main >

      <Footer />

    </>
  )
}

export default VendorsPage


export const Head = () => {
  return (
    <SEO
      title={`Vendors | ${useSiteMetadata().title}`}
      description="We built our business by providing outstanding quality, value, and service. We support others in Reno/Tahoe that have the same commitment."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      url="vendor"
    />
  )
}
