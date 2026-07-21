// TODO: link names
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SEO } from "../../components/seo";
import type { CatchAllTypes } from "../../types/catch-all-types";

function AreaCatchAll({ params }: CatchAllTypes) {

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

  // TODO: dont do interfaces unless you have to, use types instead
  interface AreaCatchAllType {
    name: string;
    slug: string;
  }

  return (
    <>
      <Header />
      <main>
        <h2 className="crest">404 - areas / {params.name}</h2>
        <h1 className="mixta">
          Oops! Looks like this page has left the party.
        </h1>
        <p>
          We Can't find that area. Maybe try one of these instead:
        </p>
        {/* // TODO: these should be cards */}
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

      <hr className="main" />

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