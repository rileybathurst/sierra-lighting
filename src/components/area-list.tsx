import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const AreaList = () => (
  <>
    <section>
      <h5>California</h5>
      <ul>
        <li>North Lake Tahoe</li>
        <li>Alpine Meadows</li>
        <li>Homewood</li>
        <li>Incline Village</li>
        <li>Kings Beach</li>
        <li>Olympic Valley</li>
        <li>Tahoe City</li>
        <li>Truckee</li>
        <li>Grays Crossing</li>
        <li>Martis Camp</li>
        <li>Lahontan</li>
      </ul>
    </section>

    <section>
      <h5>Nevada</h5>
      <ul>
        <li>South Lake Tahoe</li>
        <li>Tahoma &amp;West Shore</li>
        <li>Carson City</li>
        <li>Gardnerville, Minden &amp;Genoa</li>
        <li>Glenbrook</li>
        <li>Reno​</li>
        <li>Caughlin Ranch</li>
        <li>Damonte Ranch</li>
        <li>Galena, Arrowcreek, &amp;Mount Rose HWY</li>
        <li>Montreux</li>
        <li>Somerset</li>
        <li>Sparks</li>
        <li>Spanish Springs</li>
      </ul>
    </section>

    <section>
      <h3>California</h3>

      <hr />

      <StaticQuery
        query={query}
        render={data => (
          <ul>
            {
              data.california.nodes.map(area => (
                <li className="" key={area.id}>{area.name}</li>
              ))
            }
          </ul>
        )}
      />
    </section>

    <section>
      <h3>Nevada</h3>

      <hr />

      {/*       <StaticQuery
        query={query}
        render={data => (
          <ul>
            {
              data.nevada.nodes.map(area => (
                <li className="" key={area.id}>{area.name}</li>
              ))
            }
          </ul>
        )}
      /> */}


    </section>

  </>
)

export default AreaList

const query = graphql`
query AreasQuery {
  california: allStrapiArea(filter: {state: {eq: "california"}}) {
    nodes {
      id
      name
      state
    }
  }
  
  nevada: allStrapiArea(filter: {state: {eq: "nevada"}}) {
    nodes {
      id
      name
      state
    }
  }
}
`