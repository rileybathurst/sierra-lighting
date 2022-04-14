import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <>

      <Seo
        title="Sierra Lighting"
        description="Your go to holiday lights installer in the Reno and North Tahoe area. We strive to provide the most affordable holiday lights in town. Work guaranteed! Contact us here for a free estimate."
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
