import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import type { CardType } from "../../types/card-type";
import SEO from "../../components/seo";

type LightCatchAllType = {
  params: {
    name: string
  }
}
function LightCatchAll({ params }: LightCatchAllType) {

  const { allStrapiLight } = useStaticQuery(graphql`
    query LightCatchAllQuery {
      allStrapiLight(limit: 3) {
        nodes {
          ...lightCard
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main className="stork">
        <h2 className="crest">404 / {params.name}</h2>
        <h1 className="mixta">Oops! Looks like this page has left the party.</h1>
        <p>Want to brighten up <Link to="/">Head to our home page</Link> or explore some of our other lighting options.
        </p>
      </main>

      <section className="deck">
        {allStrapiLight.nodes.map((light: CardType) => (
          <Card key={light.id} {...light} />
        ))}
      </section>

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/light/">Light</Link></Breadcrumb>
        {/* ? should this be a different and broken breadcrumb? */}
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default LightCatchAll

export const Head = ({ params }: LightCatchAllType) => {
  return (
    <SEO
      title={`404 - light / ${params.name}`}
    />
  )
}

