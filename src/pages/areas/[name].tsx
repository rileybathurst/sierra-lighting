// TODO: link names
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SEO } from "../../components/seo";
import type { CatchAllTypes } from "../../types/catch-all-types";
import Card from "../../components/card";
import { CardType } from "../../types/card-type";

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
        <p>{strapiError.pun} - <Link to="/">{strapiError.return}</Link></p>
      </main>

      {allStrapiArea.nodes.map((area: CardType) => (
        <Card
          key={area.id}
          {...area}
          breadcrumb="areas"
        />
      ))}

      <hr />

      <Breadcrumbs>
        <Breadcrumb><Link to="/areas/">Areas</Link></Breadcrumb>
        {/* ? should this be a different and broken breadcrumb? */}
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default AreaCatchAll

export const Head = ({ params }: CatchAllTypes) => {
  return (
    <SEO
      title={`404 - area / ${params.name}`}
    />
  )
}