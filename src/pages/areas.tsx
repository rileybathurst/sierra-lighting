import * as React from "react"

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import AreaList from "../lists/area-list";

const AreasPage = () => {

  return (
    <>
      <Header />

      <main className="measure">
        <h1>Service Areas</h1>
        <div className="areas__page">
          <AreaList />
        </div>
      </main>

      <Footer />

    </>
  )
}

export default AreasPage


export const Head = () => {
  return (
    <SEO
      title={`Areas | ${useSiteMetadata().title}`}
      description="Sierra Lighting hangs lights in Reno, Sparks, Truckee, Lake Tahoe, Carson City, Gardnerville, Minden, and the surrounding areas."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/areas-og-sierra_lighting.jpg"
      url="areas"
    />
  )
}