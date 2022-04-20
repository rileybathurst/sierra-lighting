import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/app.scss";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}


const lightsPage = () => {
  return (
    <>
      <Seo
        title="Lights | Sierra Lighting"
        description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Christmas Lights. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/lights-og-sierra_lighting.jpg"
      />
      <Header />
      <main className="lights__page">

        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Lights</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
          <hr />
        </div>

        <div className="measure">
          <h2 className="crest">What we build</h2>
          <h1 className="mixta">Lights</h1>
        </div>

        <StaticQuery
          query={query}
          render={data => (
            <div className="deck">
              {
                data.allStrapiLight.nodes.map(light => (
                  <section className="card" key={light.id}>

                    <GatsbyImage
                      image={
                        light?.image?.localFile?.childImageSharp
                          ?.gatsbyImageData
                      }
                      alt={light.image?.alternativeText}
                      className=""
                    />

                    <div className="paper"></div>
                    <div className="content">
                      <hr />
                      <h2><Link to={`/light/${light.slug}`}>{light.name}</Link></h2>
                      <p>{light.excerpt}</p>
                    </div>
                  </section>
                ))
              }
            </div>
          )}
        />

      </main >

      <Footer />

    </>
  )
}

export default lightsPage

const query = graphql`
query LightsQuery {
  allStrapiLight {
    nodes {
      id
      name
      excerpt
      slug
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
    }
  }
}
`