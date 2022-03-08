import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// markup
const ContactPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main>
        <h1>Contact</h1>
      </main>

      <Footer />

    </>
  )
}

export default ContactPage
