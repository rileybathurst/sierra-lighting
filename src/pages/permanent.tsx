// TODO I think I have this in asana but the internet is out so I cant find it

// I dont really think we need a set of projects the three photos probably do enough for that

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

export function Wreath() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-4-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="wreath_image"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function SnowyRoof() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-3-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="snowyroof"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}


const PermanentPage = () => {
  return (
    <>
      <Seo
        title="Events | Sierra Lighting"
        description="Sierra Lighting installs Christmas lights on homes in Reno, Truckee, and Tahoe.
        We are full service from design to takedown." // TODO
        image="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-1-web-tagged.jpg" // TODO
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
          <Wreath /> {/* // TODO change this image */}
          <SnowyRoof /> {/* // TODO change this image */}
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
