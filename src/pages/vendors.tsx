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


const VendorsPage = () => {
  return (
    <>
      {/* // TODO description and image */}
      <Seo title="Sierra Lighting" />
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
          <p className="breadcrumbs">
            <Link to="/">Home</Link>&nbsp;/&nbsp;
            <Link to="/wedding">Wedding</Link>&nbsp;/&nbsp;
            Wedding Vedors
          </p>
          <hr />

          <h2 className="crest">Who we like to work with</h2>
          <h1 className="mixta">Wedding Vendors</h1>

          <hr />

          <h3>Photography</h3>
        </div>

        <div className="deck">
          <StaticQuery
            query={query}
            render={data => (
              <>
                {
                  data.allStrapiVendor.nodes.map(vendor => (
                    <section className="card" key={vendor.id}>
                      <NorthTahoeEvents />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2><Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link></h2>
                        <p>{vendor.description}</p>
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
