import * as React from "react"
import { Link } from 'gatsby';

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

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Contact</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </div>

      <main>
        {/* <h1>Contact</h1> */}
      </main>

      <Footer />

    </>
  )
}

export default ContactPage
