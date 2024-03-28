import * as React from "react"
import { Link } from "gatsby"

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = ({ location }) => {
  return (
    <>
      <Header />

      {/* // TODO: work on the typographic sizes here */}
      <main className="stork">
        <h2 className="crest">404 - {location.pathname}</h2>
        <h1 className="mixta">Oops! Looks like this page has left the party.</h1>
        <p>Want to brighten up?<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage

export const Head = ({ location }) => {
  return (
    <SEO
      title={`404 - ${location.pathname} | ${useSiteMetadata().title}`}
      description="Looks like this page has left the party."
      url="404"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/404-og-sierra_lighting.jpg"
    />
  )
}
