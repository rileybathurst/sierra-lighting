import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const VendorsPage = () => {
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

          <h3>Photography</h3>
        </div>

        <StaticQuery
          query={query}
          render={data => (
            <>

              <div className="deck">

                {
                  data.photography.nodes.map(vendor => (
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
                <h3>Planning</h3>
              </div>

              <div className="deck">

                {
                  data.planning.nodes.map(vendor => (
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
                <h3>Event Production</h3>
              </div>

              <div className="deck">
                {
                  data.production.nodes.map(vendor => (
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
  
  production: allStrapiVendor(filter: {service: {eq: "event production"}}) {
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
`
