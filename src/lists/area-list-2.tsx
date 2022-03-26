// * I dont know if this is possible to do more programatically but it works

import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const AreaList2 = () => (
  <section>
    <StaticQuery
      query={query}
      render={data => (
        <div className="states">
          {/* the state names are sometimes not needed */}
          <ul>
            <li key="california" className="state__name">
              <h3>California</h3>
            </li>

            <li key="northlake" id="northlake">
              <Link to="/area/northlake">North Lake Tahoe</Link>
              <ul>
                {
                  data.northlake.nodes.map(area => (
                    <li className="" key={area.id}>
                      <Link to={`/area/${area.slug}`}>{area.name}</Link>
                    </li>
                  ))
                }

                <li key="truckee" id="truckee">
                  <Link to="/area/truckee">Truckee</Link>
                  <ul>
                    {
                      data.truckee.nodes.map(area => (
                        <li className="" key={area.id}>
                          <Link to={`/area/${area.slug}`}>{area.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </li>{/* end truckee */}
              </ul>
            </li>{/* end northlake */}

            {
              data.calimainder.nodes.map(area => (
                <li className="" key={area.id}>
                  <Link to={`/area/${area.slug}`}>{area.name}</Link>
                </li>
              ))
            }
          </ul>

          <ul>
            <li key="nevada" className="state__name">
              <h3>Nevada</h3>
            </li>

            <li>
              <Link to="/area/reno">Reno</Link>
              <ul>
                {
                  data.reno.nodes.map(area => (
                    <li className="" key={area.id}>
                      <Link to={`/area/${area.slug}`}>{area.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </li>
            <li>
              <Link to="area/sparks">Sparks</Link>
              <ul>
                {
                  data.sparks.nodes.map(area => (
                    <li className="" key={area.id}>
                      <Link to={`/area/${area.slug}`}>{area.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </li>

            {
              data.nevamainder.nodes.map(area => (
                <li className="" key={area.id}>
                  <Link to={`/area/${area.slug}`}>{area.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      )}
    />
  </section>
)

export default AreaList2

export const query = graphql`
query Area2Query {
  northlake: allStrapiArea(filter: {region: {eq: "northlake"}, slug: {ne: "truckee"}}) {
    nodes {
      id
      name
      state
      slug
    }
  }

  truckee: allStrapiArea(filter: {region: {eq: "truckee"}}) {
    nodes {
      id
      name
      state
      slug
    }
  }
  
  calimainder: allStrapiArea(filter: {region: {nin: ["northlake", "truckee"]}, state: {eq: "california"}, slug: {ne: "northlake"}}) {
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

  reno: allStrapiArea(filter: {region: {eq: "reno"}, slug: {ne: "reno"}}) {
    nodes {
      id
      name
      state
      slug
    }
  }
  
  sparks: allStrapiArea(filter: {region: {eq: "sparks"}}) {
    nodes {
      id
      name
      state
      slug
    }
  }

  nevamainder: allStrapiArea(filter: {region: {nin: ["reno", "sparks"]}, state: {eq: "nevada"}, slug: {ne: "sparks"}}) {
    nodes {
      id
      name
      state
      slug
    }
  }
}
`