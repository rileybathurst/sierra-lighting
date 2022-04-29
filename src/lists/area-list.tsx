import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const AreaList = () => (
  <>
    <section>

      <StaticQuery
        query={query}
        render={data => (
          <div className="states">
            {/* the state names are sometimes not needed */}
            <ul itemScope itemType="https://schema.org/areaServed">
              <li key="california" className="state__name">
                <h3>California</h3>
              </li>
              {
                data.california.nodes.map(area => (
                  <li className="" key={area.id} itemProp="location" itemScope itemType="https://schema.org/Place">
                    <Link to={`/area/${area.slug}`} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <span itemProp="addressLocality">{area.name}</span>&nbsp;
                      <span itemProp="addressRegion" className="sr-only">{area.state}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>

            <ul itemScope itemType="https://schema.org/areaServed">
              <li key="nevada" className="state__name">
                <h3>Nevada</h3>
              </li>
              {
                data.nevada.nodes.map(area => (
                  <li className="" key={area.id} itemScope itemType="https://schema.org/Place">
                    <Link to={`/area/${area.slug}`} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <span itemProp="addressLocality">{area.name}</span>
                      <span itemProp="addressRegion" className="sr-only">{area.state}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      />
    </section>
  </>
)

export default AreaList

export const query = graphql`
query AreasQuery {
  california: allStrapiArea(filter: {state: {eq: "california"}}) {
    nodes {
      id
      name
      state
      slug
    }
  }
  
  nevada: allStrapiArea(filter: {state: {eq: "nevada"}}) {
    nodes {
      id
      name
      state
      slug
    }
  }
}
`