import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const VenuePage = () => {
  return (
    <>
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
            <span itemProp="name">Wedding Venues</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="venues__page">

        <div className="measure">

          <h2 className="crest">Where to be</h2>
          <h1 className="mixta">Wedding Venues</h1>
        </div>

        <StaticQuery
          query={query}
          render={data => (
            <>
              <div className="measure">
                <hr />
                <h3>South Lake Tahoe, NV.</h3>
              </div>

              <div className="deck">
                {
                  data.southlake.nodes.map(venue => (
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

              <div className="measure">
                <hr />
                <h3>Reno, NV.</h3>
              </div>

              <div className="deck">
                {
                  data.reno.nodes.map(venue => (
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

              <div className="measure">
                <hr />
                <h3>Incline Village, NV.</h3>
              </div>

              <div className="deck">
                {
                  data.incline.nodes.map(venue => (
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

              <div className="measure">
                <hr />
                <h3>Truckee, CA.</h3>
              </div>

              <div className="deck">
                {
                  data.truckee.nodes.map(venue => (
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

              <div className="measure">
                <hr />
                <h3>Olympic Valley, CA.</h3>
              </div>

              <div className="deck">
                {
                  data.olympic.nodes.map(venue => (
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

              <div className="measure">
                <hr />
                <h3>Donner Summit, CA.</h3>
              </div>

              <div className="deck">
                {
                  data.donner.nodes.map(venue => (
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

              <div className="measure">
                <hr />
                <h3>Glenbrook, NV.</h3>
              </div>

              <div className="deck">
                {
                  data.glenbrook.nodes.map(venue => (
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

              <div className="measure">
                <hr />
                <h3>Tahoma and West Shore, CA.</h3>
              </div>

              <div className="deck">
                {
                  data.tahoma.nodes.map(venue => (
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

export default VenuePage

const query = graphql`
query VenuesQuery {
  southlake: allStrapiVenue(filter: {area: {slug: {eq: "southlake"}}}) {
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
  
  reno: allStrapiVenue(filter: {area: {slug: {eq: "reno"}}}) {
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
  
  incline: allStrapiVenue(filter: {area: {slug: {eq: "incline"}}}) {
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
  
  truckee: allStrapiVenue(filter: {area: {slug: {eq: "truckee"}}}) {
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
  
  olympic: allStrapiVenue(filter: {area: {slug: {eq: "olympic"}}}) {
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
  
  donner: allStrapiVenue(filter: {area: {slug: {eq: "donner"}}}) {
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
  
  glenbrook: allStrapiVenue(filter: {area: {slug: {eq: "glenbrook"}}}) {
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

  tahoma: allStrapiVenue(filter: {area: {slug: {eq: "tahoma"}}}) {
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