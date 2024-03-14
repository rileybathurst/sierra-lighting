// TODO: link names
import * as React from "react"
import { Link } from "gatsby"

import Header from "../../components/header";
import Footer from "../../components/footer";

function AreaCatchAll({ params }) {
  return (
    <>
      <Header />
      <div className="measure">
        <ol className="breadcrumbs">
          <li>
            <Link to="/area">
              <span>Area</span></Link>&nbsp;/&nbsp;
          </li>
          <li>
            <span>{params.name}</span>
          </li>
        </ol>
        <hr />
      </div>
      <main className="measure">
        <h2 className="crest">404</h2>
        <h1 className="mixta">
          Oops! Looks like this page has left the party.
        </h1>
        <p>Want to brighten up?<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>
      <Footer />
    </>
  )
}

export default AreaCatchAll
