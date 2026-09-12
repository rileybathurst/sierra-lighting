import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { SEO } from "../../components/seo";
import type { CatchAllTypes } from "../../types/catch-all-types";

function TestimonialCatchAll({ params }: CatchAllTypes) {
  const { strapiError } = useStaticQuery(graphql`
      query TestimonialCatchAllQuery {
        strapiError {
          ...errorFragment
        }
      }
    `);

  return (
    <>
      <Header />

      <main>
        <h2 className="crest">404</h2>
        <h1>{strapiError.title}</h1>
        <p>
          {strapiError.pun} - <Link to="/">{strapiError.return}</Link>
        </p>
        <hr />
      </main>

      {/* // TODO: list other testimonials */}

      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/testimonial/">Testimonial</Link>
        </Breadcrumb>
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
}

export default TestimonialCatchAll;

export const Head = ({ params }: CatchAllTypes) => {
  return <SEO title={`404 - testimonial / ${params.name}`} />;
};
