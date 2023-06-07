import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

function IfExtra(props) {
  if (props.extra.length > 0) {
    return (
      <div className="measure">
        <hr />
        <h3>Other Vendors</h3>
      </div>
    )
  } else {
    return null
  }
}

const VendorsPage = () => {


const data = useStaticQuery(graphql`
query VendorsQuery {
  photography: allStrapiVendor(filter: {service: {eq: "photography"}}) {
    nodes {
      id
      name
      description
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
  
  planning: allStrapiVendor(filter: {service: {eq: "planning"}}) {
    nodes {
      id
      name
      description
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
  
  production: allStrapiVendor(filter: {service: {eq: "production"}}) {
    nodes {
      id
      name
      description
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
  
  floral: allStrapiVendor(filter: {service: {eq: "floral"}}) {
    nodes {
      id
      name
      description
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
  
  other: allStrapiVendor(filter: {service: {nin: ["planning", "photography", "production", "floral"]}}) {
    nodes {
      id
      name
      description
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
`)

let photography = data.photography
let planning = data.planning
let production = data.production
let floral = data.floral
let other = data.other

// TODO: console on other

  return (
    <>
      <Seo
        title="Vendors | Sierra Lighting"
        description="We built our business by providing outstanding quality, value, and service.
        We support others in Reno/Tahoe that have the same commitment."
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
            <span itemProp="name">Wedding Vendors</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main>

        <div className="measure">

          <h2 className="crest">Who we like to work with</h2>
          <h1 className="mixta">Wedding Vendors</h1>

          <hr />

          <h3><Link to="/vendors/photography">Photography</Link></h3>
        </div>



              <div className="deck">

                {photography.nodes.map(vendor => (
                    <section className="card" key={vendor.id}>
                      <GatsbyImage
                        image={
                          vendor?.profile?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={vendor.profile?.alternativeText}
                        className=""
                      />

                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2><Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link></h2>
                        <p>{vendor.description}</p>
                      </div>
                    </section>

                  ))
                }

              </div>

              <div className="measure">
                <hr />
                <h3><Link to="/vendors/planning">Planning</Link></h3>
              </div>

              <div className="deck">

                {planning.nodes.map(vendor => (
                    <section className="card" key={vendor.id}>
                      <GatsbyImage
                        image={
                          vendor?.profile?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={vendor.profile?.alternativeText}
                        className={vendor.slug}
                      />

                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2><Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link></h2>
                        <p>{vendor.description}</p>
                      </div>
                    </section>

                  ))
                }

              </div>

              <div className="measure">
                <hr />
                <h3><Link to="/vendors/production">Event Production</Link></h3>
              </div>

              <div className="deck">
                {production.nodes.map(vendor => (
                    <section className="card" key={vendor.id}>
                      <GatsbyImage
                        image={
                          vendor?.profile?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={vendor.profile?.alternativeText}
                        className=""
                      />

                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2><Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link></h2>
                        <p>{vendor.description}</p>
                      </div>
                    </section>
                  ))
                }
              </div>

              <div className="measure">
                <hr />
                <h3><Link to="/vendors/floral">Floral</Link></h3>
              </div>

              <div className="deck">
                {floral.nodes.map(vendor => (
                    <section className="card" key={vendor.id}>
                      <GatsbyImage
                        image={
                          vendor?.profile?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={vendor.profile?.alternativeText}
                        className=""
                      />

                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2><Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link></h2>
                        <p>{vendor.description}</p>
                      </div>
                    </section>
                  ))
                }

              </div>

              {/* This is a ctach all if anything comes up here build a new thing and add it to its own query */}
              <IfExtra extra={data.other} />

              <div className="deck">
                {other.nodes.map(vendor => (
                    <section className="card" key={vendor.id}>
                      <GatsbyImage
                        image={
                          vendor?.profile?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={vendor.profile?.alternativeText}
                        className=""
                      />

                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2><Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link></h2>
                        <p>{vendor.description}</p>
                      </div>
                    </section>

                  ))
                }

              </div>

      </main >

      <Footer />

    </>
  )
}

export default VendorsPage
