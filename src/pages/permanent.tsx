import * as React from "react"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Logistics from "../components/logistics";

import BistroLights from "../images/bistro-lights";
import RSL from "../images/rsl";
import Strings from "../images/strings";

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
