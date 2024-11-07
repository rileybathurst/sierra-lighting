import * as React from "react"
import { Link } from "gatsby"

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

type LocationTypes = {
  location: {
    pathname: string;
  }
}
const NotFoundPage = ({ location }: LocationTypes) => {
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

export const Head = ({ location }: LocationTypes) => {
  return (
    <SEO
      title={`404 - ${location.pathname}`}
      description="Looks like this page has left the party."
      url="404"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/404-og-sierra_lighting.jpg"
    />
  )
}
