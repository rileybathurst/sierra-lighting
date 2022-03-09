import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// markup
const VenuePage = () => {
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
                data.allStrapiVenue.nodes.map(venue => (
                  <section className="card" key={venue.id}>
                    <h2>{venue.name}</h2>
                    <p>{venue.description}</p>
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

export default VenuePage

const query = graphql`
query VenuesQuery {
  allStrapiVenue(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      name
      description
    }
  }
}
`