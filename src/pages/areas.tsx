import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import AreaList from "../components/area-list";

// markup
const AreasPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">
        <h1>Service Areas</h1>
        <AreaList />
      </main>

      <Footer />

    </>
  )
}

export default AreasPage
