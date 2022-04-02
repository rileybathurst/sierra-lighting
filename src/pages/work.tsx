import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const WorkPage = () => {
  return (
    <>
      {/* // TODO image and description */}
      <Seo title="Sierra Lighting" />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Work</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      {/* // TODO this has a bunch of specific SEO */}
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
