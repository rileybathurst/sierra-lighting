import * as React from "react"
import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import Areas from "../components/areas";

const AreasPage = () => {

  return (
    <>
      <Header />
      <Areas />
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