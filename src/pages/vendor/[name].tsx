import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import type { CardType } from "../../types/card-type";
import { SEO } from "../../components/seo";
import type { CatchAllTypes } from "../../types/catch-all-types";

function VendorCatchAll({ params }: CatchAllTypes) {

  const { allStrapiVendor } = useStaticQuery(graphql`
    query VendorCatchAllQuery {
      allStrapiVendor {
          nodes {
            ...vendorCard
        }
      }
    }
  `)

  return (
    <>
      <Header />

      <hr className="stork" />

      <main className="stork">
        <h2 className="crest">404 - {params.name}</h2>
        <h1 className="mixta">Oops! Looks like this page has left the party.</h1>
        <p>Want to brighten up?<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>

      <hr className="stork" />

      <h3 className="stork elbrus">Browse some of our other prefered vendors</h3>

      <section className="deck">
        {allStrapiVendor.nodes.map((vendor: CardType) => (
          <Card
            key={vendor.id}
            {...vendor}
            breadcrumb="vendor"
          />
        ))}
      </section>

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/vendor/">Vendor</Link></Breadcrumb>
        {/* ? should this be a different and broken breadcrumb? */}
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default VendorCatchAll

export const Head = ({ params }: CatchAllTypes) => {
  return (
    <SEO
      title={`404 - Vendor / ${params.name}`}
    />
  )
}