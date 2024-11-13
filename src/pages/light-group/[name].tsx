import * as React from "react"
import { Link } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer";
import { SEO } from "../../components/seo";

// types
import type { CatchAllTypes } from "../../types/catch-all-types";

function LightGroupCatchAll({ params }: CatchAllTypes) {
  return (
    <>
      <Header />
      <main className="stork">
        <h2 className="crest">404</h2>
        <h1 className="mixta">Oops! Looks like this page has left the party.</h1>
        <p>Want to brighten up?<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>

      {/* // TODO: list the other groups */}

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/light-group/">Light Group</Link></Breadcrumb>
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default LightGroupCatchAll

export const Head = ({ params }: CatchAllTypes) => {
  return (
    <SEO
      title={`404 - light group / ${params.name}`}
    />
  )
}