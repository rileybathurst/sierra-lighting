import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

//GatsbyImage

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
const lightsPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="lights__page">

        <div className="measure">
          <p className="breadcrumbs">
            <Link to="/">Home</Link>&nbsp;/&nbsp;Lights
          </p>
          <hr />

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