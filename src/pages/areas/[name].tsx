// TODO: link names

import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { SEO } from "../../components/seo";
import type { CardType } from "../../types/card-type";
import type { CatchAllTypes } from "../../types/catch-all-types";

function AreaCatchAll({ params }: CatchAllTypes) {
  const { allStrapiArea, strapiError } = useStaticQuery(graphql`
    query AreaCatchAllQuery {
      allStrapiArea(filter: {featured: {eq: true}}) {
        nodes {
          ...areaCardFragment
        }
      }
      strapiError {
        ...errorFragment
      }
    }
  `);

  return (
    <>
      <Header />
      <main>
        <h2 className="crest">404 - areas / {params.name}</h2>
        <h1>{strapiError.title}</h1>
        <p>
          {strapiError.pun} - <Link to="/">{strapiError.return}</Link>
        </p>
      </main>

      {allStrapiArea.nodes.map((area: CardType) => (
        <Card key={area.id} {...area} breadcrumb="areas" />
      ))}

      <hr />

      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/areas/">Areas</Link>
        </Breadcrumb>
        {/* ? should this be a different and broken breadcrumb? */}
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
}

export default AreaCatchAll;

export const Head = ({ params }: CatchAllTypes) => {
  return <SEO title={`404 - area / ${params.name}`} />;
};
