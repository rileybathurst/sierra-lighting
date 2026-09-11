import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer";
import { SEO } from "../../components/seo";

import type { CatchAllTypes } from "../../types/catch-all-types";

function LightGroupCatchAll({ params }: CatchAllTypes) {

  const { strapiError } = useStaticQuery(graphql`
    query LightGroupCatchAllQuery {
      strapiError {
        ...errorFragment
      }
    }
  `);

  return (
    <>
      <Header />
      <main>
        <h2 className="crest">404 - light group / {params.name}</h2>
        <h1>{strapiError.title}</h1>
        <p>{strapiError.pun} - <Link to="/">{strapiError.return}</Link></p>
        <hr />
      </main>

      {/* // TODO: list the other groups */}

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