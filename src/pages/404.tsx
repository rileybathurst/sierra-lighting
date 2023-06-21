import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="404"
        description="Looks like this page has left the party."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/404-og-sierra_lighting.jpg"
      />
      <Header />

      <main className="measure">
        <h2 className="crest">404</h2>
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
