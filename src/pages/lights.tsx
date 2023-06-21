import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { CardType } from "../types/card";

const lightsPage = () => {

  const { allStrapiLight } = useStaticQuery(graphql`
    query LightsQuery {
      allStrapiLight {
        nodes {
          ...lightCard
        }
      }
    }
  `)

  return (
    <>
      <Seo
        title="Lights | Sierra Lighting"
        description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/lights-og-sierra_lighting.jpg"
      />
      <Header />
      <main className="lights__page">

        <div className="measure">
          <h2 className="crest">What we build</h2>
          <h1 className="mixta">Lights</h1>

          <hr />

          Filter by:
          <ul>
            <li key="wedding"><Link to="/lights/wedding-lights">Wedding Lights</Link></li>
            <li key="residential"><Link to="/lights/residential-christmas-lights">Residential Christmas Lights</Link></li>
            <li key="commercial"><Link to="/lights/commercial-christmas-lights">Commercial Christmas Lights</Link></li>
          </ul>
        </div>


        <div className="deck">
          {allStrapiLight.nodes.map((light: CardType) => (
            <div key={light.id}>
              <Card card={light} breadcrumb="light" />
            </div>
          ))}
        </div>

      </main >

      <Footer />

    </>
  )
}

export default lightsPage
