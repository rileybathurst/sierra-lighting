import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer";
import type { CatchAllTypes } from "../../types/catch-all-types";
import { SEO } from "../../components/seo";

function TestimonialCatchAll({ params }: CatchAllTypes) {

  const { strapiError } = useStaticQuery(graphql`
      query TestimonialCatchAllQuery {
        strapiError {
          ...errorFragment
        }
      }
    `)

  return (
    <>
      <Header />

      <main>
        <h2 className="crest">404</h2>
        <h1>{strapiError.title}</h1>
        <p>{strapiError.pun} - <Link to="/">{strapiError.return}</Link></p>
        <hr />
      </main>

      {/* // TODO: list other testimonials */}

      <Breadcrumbs>
        <Breadcrumb><Link to="/testimonial/">Testimonial</Link></Breadcrumb>
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default TestimonialCatchAll

export const Head = ({ params }: CatchAllTypes) => {
  return (
    <SEO
      title={`404 - testimonial / ${params.name}`}
    />
  )
}