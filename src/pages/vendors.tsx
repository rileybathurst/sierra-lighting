import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// markup
const VendorsPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <StaticQuery
          query={query}
          render={data => (
            <>
              {
                data.allStrapiVendor.nodes.map(vendor => (
                  <section className="card" key={vendor.id}>
                    <h2><Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link></h2>
                    <p>{vendor.description}</p>
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
