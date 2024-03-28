// TODO: link names
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Header from "../../components/header";
import Footer from "../../components/footer";

function AreaCatchAll({ params }) {

  const { allStrapiArea } = useStaticQuery(graphql`
    query AreaCatchAllQuery {
      allStrapiArea(filter: {featured: {eq: true}}) {
        nodes {
          name
          slug
        }
      }
    }
  `);

  interface AreaCatchAllType {
    name: string;
    slug: string;
  }

  return (
    <>
      <Header />
      <div className="stork">
        <ol className="breadcrumbs">
          <li key='area'>
            <Link to="/area">
              <span>Area</span></Link>&nbsp;/&nbsp;
          </li>
          <li key={params.name}>
            <span>{params.name}</span>
          </li>
        </ol>
        <hr />
      </div>
      <main className="stork">
        <h2 className="crest">404</h2>
        <h1 className="mixta">
          Oops! Looks like this page has left the party.
        </h1>
        <p>
          We Can't find that area. Maybe try one of these instead:
        </p>
        <ul>
          {allStrapiArea.nodes.map((area: AreaCatchAllType) => (
            <li key={area.slug}>
              <Link to={`/areas/${area.slug}`}>
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default AreaCatchAll
