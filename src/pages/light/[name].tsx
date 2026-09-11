import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import type { CardType } from "../../types/card-type";
import { SEO } from "../../components/seo";
import type { CatchAllTypes } from "../../types/catch-all-types";

function LightCatchAll({ params }: CatchAllTypes) {

  const { allStrapiLight, strapiError } = useStaticQuery(graphql`
    query LightCatchAllQuery {
      allStrapiLight(limit: 3) {
        nodes {
          ...lightCard
        }
      }
      strapiError {
        ...errorFragment
      }
    }
  `)

  return (
    <>
      <Header />
      <main className="above-deck">
        <h2 className="crest">404 / {params.name}</h2>
        <h1>{strapiError.title}</h1>
        <p>{strapiError.pun} - <Link to="/">{strapiError.return}</Link></p>
      </main>

      <section className="deck">
        {allStrapiLight.nodes.map((light: CardType) => (
          <Card key={light.id} {...light} />
        ))}
      </section>

      <hr />

      <Breadcrumbs>
        <Breadcrumb><Link to="/lights/">Light</Link></Breadcrumb>
        {/* // ? should this be a different and broken breadcrumb? */}
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default LightCatchAll

export const Head = ({ params }: CatchAllTypes) => {
  return (
    <SEO
      title={`404 - light / ${params.name}`}
    />
  )
}

