import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// markup
const ServicesPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <h1>Services</h1>
        <h2>The Christmas lights services we provide include:</h2>
        <ul>
          <li key="roofs">Roof lines hung with damage free attachment methods outlined in high efficiency energy saving C9 LED bulbs</li>
          <li key="windows">Windows and doors outlined in mini LED bulbs or garlands</li>
          <li key="columns">Columns and railings wrapped in mini LED bulbs or garlands</li>
          <li key="garlands">Garlands and wreaths either lit or unlit, decorated or plain</li>
          <li key="trunks">Trunk wraps in mini LED lights</li>
          <li key="trees">Tree canopies either swirl wrapped or with limbs individually wrapped to create an elegant silhouette</li>
          <li key="bushes">Bushes and Shrubs wrapped in mini LED lights</li>
          <li key="bows">Bows and ornaments for that extra detail</li>
          <li key="lit">Lit figurines, snowflakes and trees for special accents</li>
          <li key="missing">Is something missing? Just ask!</li>
        </ul>

        <h2>How it Works</h2>
        <ol>
          <li><span className="ol-title">Estimate</span>
            <span>After contacting Sierra Christmas Lights, we will come to your home or business to create an estimate.  We work with you to determine the type of display you would like, choosing from our broad lighting selection.</span>
          </li>
          <li><span className="ol-title">Installation</span>
            <span>
              Installation typically occurs late October through early December. Our experienced team of lighting technicians arrives with the materials to create your customized display. Using non-damaging attachment techniques, we build out your beautiful lights.
            </span>
          </li>
          <li><span className="ol-title">Support</span>
            <span>Sierra Christmas Lights utilizes the highest quality, professional, LED lighting available to ensure the reliability of your display. In the unlikely event that something goes wrong, we are just a quick call or email away. We strive for 100% customer satisfaction!</span>
          </li>
          <li><span className="ol-title">Removal</span>
            <span>Removal occurs in the first two weeks of January after a happy and joyous holiday. Our team removes the lights and carefully packages them for storage until next year. Your home will look just as beautiful after we are done as when we started.</span>
          </li>
        </ol>
      </main>

      <Footer />

    </>
  )
}

export default ServicesPage

/* const query = graphql`
query MyQuery {
  allStrapiTestimonial(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      customer
    }
  }
}
` */