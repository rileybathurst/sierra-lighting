// TODO: I can query the og image by season
import * as React from "react"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <>

      <Seo
        title="Contact | Sierra Lighting"
        description="Contact Sierra Lighting for a free estimate.
        We offer full service holiday, wedding, and event lighting packages to meet any budget."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/contact-og-sierra_lighting.jpg"
      />

      <Header />
      <Footer />

    </>
  )
}

export default ContactPage
