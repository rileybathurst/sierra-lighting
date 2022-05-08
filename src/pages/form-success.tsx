import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const FormSucessPage = () => {
  return (
    <>
      <Seo
        title="Form Sucess"
        description="Looks like this page has left the party."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/404-og-sierra_lighting.jpg"
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
            <span itemProp="name">Form Success</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">
        <h2 className="crest">Form Success</h2>
        <h1 className="mixta">Thanks</h1>
        <p>for getting in touch we will get back to you ASAP<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>
      <Footer />
    </>
  )
}

export default FormSucessPage
