import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { SEO } from "../../components/seo";

import type { CatchAllTypes } from "../../types/catch-all-types";

function TeamCatchAll({ params }: CatchAllTypes) {
  const { strapiError } = useStaticQuery(graphql`
      query {
        strapiError {
          ...errorFragment
        }
      }
    `);
  return (
    <>
      <Header />

      <main>
        <h2>404 - Team - {params.name}</h2>
        <h1>{strapiError.title}</h1>
        <p>
          {strapiError.pun} - <Link to="/">{strapiError.return}</Link>
        </p>
        <hr />
      </main>

      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/team/">Team</Link>
        </Breadcrumb>
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
}

export default TeamCatchAll;

export const Head = ({ params }: CatchAllTypes) => {
  return <SEO title={`404 - team / ${params.name}`} />;
};
