import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";

const SouthLakeVenuePage = () => {
  return (
    <>

      {/* // TODO make this page and seo */}
      <Seo
        title="Venues | Sierra Lighting"
        description="The natural beauty of the Lake Tahoe area makes the perfect backdrop for a wedding. Check out these Tahoe wedding venues that range from rustic to glamorous."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/venues">
              <span itemProp="name">Wedding Venues</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">South Lake Tahoe</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="venues__page">

        <StaticQuery
          query={query}
          render={data => (
            <>
              <div id="South-Lake" className="measure">
                <h4 className="crest">National Treasure</h4>
                <h3 className="range">
                  South Lake Tahoe, NV.
                </h3>
              </div>

              <div className="deck">
                {
                  data.allStrapiVenue.nodes.map(venue => (
                    <section className="card" key={venue.id}>

                      <GatsbyImage
                        image={
                          venue?.venueImage?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={venue.venueImage?.alternativeText}
                        className=""
                      />

                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2><Link to={`/venue/${venue.slug}`}>{venue.name}</Link></h2>
                        <p>{venue.description}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

            </>
          )}
        />

      </main >

      <Footer />

    </>
  )
}

export default SouthLakeVenuePage

const query = graphql`
query TruckeeVenuesQuery {
  allStrapiVenue(filter: {area: {slug: {eq: "southlake"}}}) {
    nodes {
      id
      name
      description
      slug
      venueImage {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [111, 165, 222, 444, 880]
              width: 222
            )
          }
        }
        alternativeText
      }
    }
  }
}
`