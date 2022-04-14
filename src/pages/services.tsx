import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";


const ServicesPage = () => {
  return (
    <>
      <Seo
        title="Sierra Lighting"
        description="A professional lighting design package will highlight your decor and bring out the beauty of your venue.  Learn about the many design options Sierra Christmas Lights can use to make your Reno Tahoe wedding really shine."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/services-og-sierra_lighting.jpg"
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
            <span itemProp="name">Services</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">

        <h1>Services</h1>
        <h2>The Christmas lights services we provide include:</h2>
        <ul itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          <li key="roofs" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Roof lines hung with damage free attachment methods outlined in high efficiency energy saving C9 LED bulbs</span>
          </li>
          <li key="windows" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Windows and doors outlined in mini LED bulbs or garlands</span>
          </li>
          <li key="columns" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Columns and railings wrapped in mini LED bulbs or garlands</span>
          </li>
          <li key="garlands" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Garlands and wreaths either lit or unlit, decorated or plain</span>
          </li>
          <li key="trunks" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Trunk wraps in mini LED lights</span>
          </li>
          <li key="trees" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Tree canopies either swirl wrapped or with limbs individually wrapped to create an elegant silhouette</span>
          </li>
          <li key="bushes" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Bushes and Shrubs wrapped in mini LED lights</span>
          </li>
          <li key="bows" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Bows and ornaments for that extra detail</span>
          </li>
          <li key="lit" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Lit figurines, snowflakes and trees for special accents</span>
          </li>
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
