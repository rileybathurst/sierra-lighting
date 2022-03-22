import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const AreaList = () => (
  <>
    <section>

      <StaticQuery
        query={query}
        render={data => (
          <div className="states">
            <div>
              {/* <h3>California</h3> */}
              <ul>
                {
                  data.california.nodes.map(area => (
                    <li className="" key={area.id}>
                      <Link to={`/area/${area.slug}`}>{area.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              {/* <h3>Nevada</h3> */}
              <ul>
                {
                  data.nevada.nodes.map(area => (
                    <li className="" key={area.id}>
                      <Link to={`/area/${area.slug}`}>{area.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
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