import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import RSL from "../images/rsl";
import RancheroTree from "../images/ranchero-tree";
import BistroLights from "../images/bistro-lights";

const CommercialEventsPage = () => {
  return (
    <>
      <Seo
        title="Commercial Events | Sierra Lighting"
        description="Sierra Lighting installs Christmas lights on homes in Reno, Truckee, and Tahoe.
        We are full service from design to takedown." // TODO
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/og_image-sierra_lighting-bistro_lights.jpg"
      />
      <Header />
      <main>

        <div className="measure">
          <h2 className="crest">
          </h2>
          <h1 className="mixta">Commercial Events</h1>
          <p>corporate gathering</p>{/* // ? should this be a capital */}
        </div>
        <div className="triple">
          <BistroLights />
          <RSL />
          <RancheroTree />
        </div>

        <div className="measure">
          <hr />
          <h2>Display Consulting and Planning</h2>

        </div>

      </main>
      <Footer />

    </>
  )
}

export default CommercialEventsPage
