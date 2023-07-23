// TODO these could possibly have the bylines with the names

import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const AreasPage = () => {

  const data = useStaticQuery(graphql`
    query Area2Query {
      northlake: allStrapiArea(
        filter: { region: { eq: "northlake" }, slug: { ne: "truckee" } }
      ) {
        nodes {
          ...areaLink
        }
      }

      truckee: allStrapiArea(filter: { region: { eq: "truckee" } }) {
        nodes {
          ...areaLink
        }
      }

      calimainder: allStrapiArea(
        filter: {
          region: { nin: ["northlake", "truckee"] }
          state: { eq: "california" }
          slug: { ne: "northlake" }
        }
      ) {
        nodes {
          ...areaLink
        }
      }

      nevada: allStrapiArea(filter: { state: { eq: "nevada" } }) {
        nodes {
          ...areaLink
        }
      }

      reno: allStrapiArea(
        filter: { region: { eq: "reno" }, slug: { ne: "reno" } }
      ) {
        nodes {
          ...areaLink
        }
      }

      sparks: allStrapiArea(filter: { region: { eq: "sparks" } }) {
        nodes {
          ...areaLink
        }
      }

      nevamainder: allStrapiArea(
        filter: {
          region: { nin: ["reno", "sparks"] }
          state: { eq: "nevada" }
          slug: { ne: "sparks" }
        }
      ) {
        nodes {
          ...areaLink
        }
      }
    }
  `);

  let northlake = data.northlake;
  let truckee = data.truckee;
  let calimainder = data.calimainder;
  let reno = data.reno;
  let sparks = data.sparks;
  let nevamainder = data.nevamainder;

  return (
    <>
      <Seo
        title="Areas | Sierra Lighting"
        description="Sierra Lighting hangs lights in Reno, Sparks, Truckee, Lake Tahoe, Carson City, Gardnerville, Minden, and the surrounding areas."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/areas-og-sierra_lighting.jpg"
      />

      <Header />

      <main className="measure">
        <h1>Service Areas</h1>
        <div className="areas__page">
          <section>
            {/* // TODO: can i remove a section or div? */}
            <div className="states">
              {/* the state names are sometimes not needed */}
              <ul>
                <li key="california" className="state__name">
                  <h3>California</h3>
                </li>

                {/* // TODO: loop this properly */}

                <li key="northlake" id="northlake">
                  <Link to="/area/northlake">North Lake Tahoe</Link>
                  <ul>
                    {northlake.nodes.map((area) => (
                      <li className="" key={area.id}>
                        <Link to={`/area/${area.slug}`}>{area.name}</Link>
                      </li>
                    ))}

                    <li key="truckee" id="truckee">
                      <Link to="/area/truckee">Truckee</Link>
                      <ul>
                        {truckee.nodes.map((area) => (
                          <li className="" key={area.id}>
                            <Link to={`/area/${area.slug}`}>{area.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </li>

                {calimainder.nodes.map((area) => (
                  <li className="" key={area.id}>
                    <Link to={`/area/${area.slug}`}>{area.name}</Link>
                  </li>
                ))}
              </ul>

              <ul>
                <li key="nevada" className="state__name">
                  <h3>Nevada</h3>
                </li>

                <li>
                  <Link to="/area/reno">Reno</Link>
                  <ul>
                    {reno.nodes.map((area) => (
                      <li className="" key={area.id}>
                        <Link to={`/area/${area.slug}`}>{area.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link to="/area/sparks">Sparks</Link>
                  <ul>
                    {sparks.nodes.map((area) => (
                      <li className="" key={area.id}>
                        <Link to={`/area/${area.slug}`}>{area.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {nevamainder.nodes.map((area) => (
                  <li className="" key={area.id}>
                    <Link to={`/area/${area.slug}`}>{area.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />

    </>
  )
}

export default AreasPage
