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

        <p className="breadcrumbs">
          <Link to="/">Home</Link>&nbsp;
          / <Link to="/wedding">Wedding</Link>&nbsp;
          / Wedding Venues
        </p>
        <hr />

        <h1>Wedding Venues</h1>

        <StaticQuery
          query={query}
          render={data => (
            <>
              {
                data.allStrapiVenue.nodes.map(venue => (
                  <section className="card" key={venue.id}>
                    <h2><Link to={`/venue/${venue.slug}`}>{venue.name}</Link></h2>
                    <hr />
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
      slug
    }
  }
}
`