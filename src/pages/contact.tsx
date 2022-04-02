import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />

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

      {/* // TODO needs a hero image */}

      <main>
        {/* <h1>Contact</h1> */}
      </main>

      <Footer />

    </>
  )
}

export default ContactPage
