// TODO these could possibly have the bylines with the names

import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import AreaList2 from "../lists/area-list-2";

const AreasPage = () => {
  return (
    <>
      <Seo
        title="Areas | Sierra Lighting"
        description="Sierra Lighting hangs lights in Reno, Sparks, Truckee, Lake Tahoe, Carson City, Gardnerville, Minden, and the surrounding areas."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/areas-og-sierra_lighting.jpg"
      />

      <Header />

      <main className="measure">
        <h1>Service Areas</h1>
        <div className="areas__page">
          <AreaList2 />
        </div>
      </main>

      <Footer />

    </>
  )
}

export default AreasPage
