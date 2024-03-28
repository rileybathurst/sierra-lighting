import * as React from "react"
import { Link } from "gatsby"

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

const FormSucessPage = () => {
  return (
    <>
      <Header />

      <main className="stork">
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

export const Head = () => {
  return (
    <SEO
      title={`Form Success | ${useSiteMetadata().title}`}
      description="Thanks for getting in touch we will get back to you ASAP. Head to our home page."
      url="form-success"
    />
  )
}
