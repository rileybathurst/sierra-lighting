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

        {/* <StaticQuery
          query={query}
          render={data => (
            <>
              {
                data.allStrapiVendors.edges[0].node.data.map(vendor => (
                  <section className="card" key={vendor.id}>
                    <h2>{vendor.attributes.name}</h2>
                    <p>{vendor.attributes.description}</p>
                  </section>
                ))
              }
            </>
          )}
        /> */}

      </main >

      <Footer />

    </>
  )
}

export default VendorsPage

/* const query = graphql`
  query VendorQuery {
    allStrapiVendors {
      edges {
        node {
          data {
            id
            attributes {
              name
              description
            }
          }
        }
      }
    }
  }
`; */

const query = graphql`
query VendorQuery {
  allStrapiVendor(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      name
      description
    }
  }
}
`
