import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}

// markup
const VendorsPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <p className="breadcrumbs">
          <Link to="/">Home</Link>&nbsp;
          / <Link to="/wedding">Wedding</Link>&nbsp;
          / Wedding Vedors
        </p>
        <hr />

        <h2 className="crest">Who we like to work with</h2>
        <h1 className="mixta">Wedding Vendors</h1>

        <StaticQuery
          query={query}
          render={data => (
            <>
              {
                data.allStrapiVendor.nodes.map(vendor => (
                  <section className="card" key={vendor.id}>
                    <NorthTahoeEvents />
                    <div className="paper"></div>
                    <div className="content">
                      <hr />
                      <h2><Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link></h2>
                      <p>{vendor.description}</p>
                    </div>
                  </section>

                ))
              }
            </>
          )}
        />

      </main >

      <Footer />

    </>
  )
}

export default VendorsPage

const query = graphql`
query VendorsQuery {
  allStrapiVendor(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      name
      description
      slug
    }
  }
}
`
