// TODO: show venues that we do have

import * as React from "react"
import { Link } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer";

// types
import type { CatchAllTypes } from "../../types/catch-all-types";

function VenueCatchAll({ params }: CatchAllTypes) {
  return (
    <>
      <Header />

      <main className="stork">
        <h2 className="crest">404 - {params.name}</h2>
        <h1 className="mixta">Oops! Looks like this page has left the party.</h1>
        <p>Want to brighten up?<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>

      {/* // TODO: list other venues */}

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/venue/">Venue</Link></Breadcrumb>
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default VenueCatchAll

// TODO: needs SEO for the title
