import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const WorkPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">
        <h1>Jobs</h1>
        <p>We want to hire people.</p>
      </main>

      <Footer />

    </>
  )
}

export default WorkPage
