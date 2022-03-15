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

        <h2 className="crest">Where to be</h2>
        <h1 className="mixta">Wedding Venues</h1>

        <div className="deck">
          <StaticQuery
            query={query}
            render={data => (
              <>
                {
                  data.allStrapiVenue.nodes.map(venue => (
                    <section className="card" key={venue.id}>
                      <NorthTahoeEvents />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2><Link to={`/venue/${venue.slug}`}>{venue.name}</Link></h2>
                        <p>{venue.description}</p>
                      </div>
                    </section>
                  ))
                }
              </>
            )}
          />
        </div>

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