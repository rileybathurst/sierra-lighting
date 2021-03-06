import React from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const VendorServiceView = ({ data }) => {
  return (
    <>
      <Seo
        title={`${data.allStrapiVendor.distinct} Vendors | Sierra Lighting`}
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
            <Link itemProp="item" to="/vendors">
              <span itemProp="name">Vendors</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className='first-capital'>{data.allStrapiVendor.distinct}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <main>

        <div className="measure">

          <h2 className="crest">Who we like to work with</h2>
          <h1 className="mixta first-capital">{data.allStrapiVendor.distinct}</h1>

          <hr />
        </div>



        <div className="deck">
          {data.allStrapiVendor.edges.map(({ node }) => (
            <section className="card" key={node.id}>
              <GatsbyImage
                image={
                  node?.profile?.localFile?.childImageSharp
                    ?.gatsbyImageData
                }
                alt={node.profile?.alternativeText}
                className={node.slug}
              />

              <div className="paper"></div>
              <div className="content">
                <hr />
                <h2><Link to={`/vendor/${node.slug}`}>{node.name}</Link></h2>
                <p>{node.excerpt}</p>
              </div>
            </section>

          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VendorServiceView;

export const query = graphql`
  query VendorServiceTemplate(
    $service: String!,
  ) {
    allStrapiVendor(filter: {service: {eq: $service}}) {
      edges {
        node {
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

      distinct(field: service)
    }
  }
`
