import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Logistics from "../components/logistics";

export function BistroLights() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-bistro_lights.jpg"
    alt="sierra lighting bistro lights"
    className=""
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function RSL() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/events/sierra_lighting-rsl-outdoor_lighting.jpg"
    alt="bistro lights display on an entrance in reno nevada"
    className="RSL_image"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function Strings() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/lights/string.jpg"
    alt="wedding lights"
    className=""
    breakpoints={[300, 600, 900]}
    width={300}
  />
}


const PermanentPage = () => {
  return (
    <>
      <Seo
        title="Permanent Patio Lights | Sierra Lighting"
        description="Sierra Lighting installs Christmas lights on homes in Reno, Truckee, and Tahoe.
        We are full service from design to takedown." // TODO
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/og_image-sierra_lighting-bistro_lights.jpg"
      />
      <Header />
      <main>

        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Permanent Patio Lights</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
          <hr />
        </div>

        <div className="measure">
          <h2 className="crest">Keep the lights on</h2>
          <h1 className="mixta">Permanent Patio Lights</h1>
          <p>lorem ipsum</p>
        </div>
        <div className="triple">
          <BistroLights />
          <RSL />
          <Strings />
        </div>

        <div className="measure">
          <hr />
          <h2>Display Consulting and Planning</h2>

        </div>

        <Logistics />

        <div className="measure">
          <p>We exclusively use modern LED technology, wireless and battery powered where possible. With wireless LEDs, we are eliminating fire risks from traditional technology, reducing tripping hazards and clutter in your photos. We use modern RGB technology to create the perfect lighting effects to highlight your decor and create the ideal mood for your big day. For example, ambers / warm whites add a flattering and romantic glow while deep purple / blue can amp up guests for the dance party portion of the night. You can choose a unified color scheme, select a palette of complimentary colors or even plan changes throughout your event.</p>
        </div>

      </main>
      <Footer />

    </>
  )
}

export default PermanentPage
