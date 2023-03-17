import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

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
              <div id="South-Lake" className="measure">
                <hr />
                {/* // I dont think its worth querying for these */}
                <h4 className="crest">National Treasure</h4>
                <h3 className="range">
                  {/* // TODO these links can now all be updated */}
                  <Link to="/area/southlake" className="link--subtle">South Lake Tahoe, NV.</Link>
                </h3>
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
                        <p>{venue.excerpt}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

              <div id="Reno" className="measure">
                <hr />
                <h4 className="crest">The Biggest Little City</h4>
                <h3 className="range">
                  <Link to='/area/reno' className="link--subtle">Reno, NV.</Link>
                </h3>
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
                        <p>{venue.excerpt}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

              <div id="Incline-Village" className="measure">
                <hr />
                {/* <h4 className="crest">// TODO</h4> */}
                <h3 className='range'>
                  <Link to='/area/incline' className="link--subtle">
                    Incline Village, NV.
                  </Link>
                </h3>
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
                        <p>{venue.excerpt}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

              <div id="truckee" className="measure">
                <hr />
                <h4 className="crest">A base camp for a big life</h4>
                <h3 className="range">
                  <Link to="/area/truckee" className="link--subtle">Truckee, CA.</Link>
                </h3>
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
                        <p>{venue.excerpt}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

              <div id="olympic-valley" className="measure">
                <hr />
                {/* <h4 className="crest">// TODO</h4> */}
                <h3 className="range">
                  <Link to="/area/olympic" className="link--subtle">Olympic Valley, CA.</Link>
                </h3>
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
                        <p>{venue.excerpt}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

              <div id="donner-summit" className="measure">
                <hr />
                {/* <h4 className="crest">// TODO</h4> */}
                <h3 className="range">
                  <Link to="/area/donner" className="link--subtle">Donner Summit, CA.</Link></h3>
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
                        <p>{venue.excerpt}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

              <div id="stateline" className="measure">
                <hr />
                {/* <h4 className="crest">// TODO</h4> */}
                <h3 className="range">
                  <Link to="/area/stateline" className="link--subtle">
                    Stateline, NV.
                  </Link>
                </h3>
              </div>

              <div className="deck">
                {
                  data.stateline.nodes.map(venue => (
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
                        <p>{venue.excerpt}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

              <div id="tahoma" className="measure">
                <hr />
                {/* <h4 className="crest">// TODO</h4> */}
                <h3 className="range">
                  <Link to="/area/tahoma" className="link--subtle">
                    Tahoma and West Shore, CA.
                  </Link>
                </h3>
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
                        <p>{venue.excerpt}</p>
                      </div>
                    </section>
                  ))
                }
              </div>


              <div id="minden" className="measure">
                <hr />
                {/* <h4 className="crest">// TODO</h4> */}
                <h3 className="range">
                  <Link to="/area/minden" className="link--subtle">
                    Minden, NV.
                  </Link>
                </h3>
              </div>

              <div className="deck">
                {
                  data.minden.nodes.map(venue => (
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
                        <p>{venue.excerpt}</p>
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
      excerpt
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
      excerpt
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
      excerpt
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
      excerpt
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
      excerpt
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
      excerpt
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
  
  stateline: allStrapiVenue(filter: {area: {slug: {eq: "stateline"}}}) {
    nodes {
      id
      name
      excerpt
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
      excerpt
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

  minden: allStrapiVenue(filter: {area: {slug: {eq: "minden"}}}) {
    nodes {
      id
      name
      excerpt
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

  other: allStrapiVendor(filter: {service: {nin: ["southlake", "reno", "incline", "truckee", "olympic", "donner", "tahoma", "stateline", "minden"]}}) {
    nodes {
      id
      name
      excerpt
      slug

      profile {
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