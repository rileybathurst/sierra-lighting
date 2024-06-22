// * this is a weird extra page as it has to query both sets

import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import LightSearch from "../components/light-search";
import Card from "../components/card";

const lightsPage = () => {

  const { allStrapiLight } = useStaticQuery(graphql`
    query ChristmasLightsQuery {

      allStrapiLight(
        sort: {fields: xmasOrder, order: ASC},
        filter: {
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }) {
          nodes {
            ...lightCard
            light_groups {
              ...lightGroup
            }
          }
        }
    }
  `)

  const lightGroupSet = new Set();
  for (const light of allStrapiLight.nodes) {
    light.light_groups.map((group) => {
      lightGroupSet.add(group.slug)
    })
  }
  const lightGroupArray = Array.from(lightGroupSet);
  // console.log(lightGroupArray)

  return (
    <>
      <Header />
      <main>
        <h2 className="crest">What we build</h2>
        <h1 className="mixta">Lights</h1>
        <hr />
      </main >

      <section className="stork">
        <div>
          <p>Filter by type:</p>
          <ul>
            {lightGroupArray.map((group) => (
              allStrapiLight.nodes
                .filter((light) => light.light_groups[0].slug === (group))
                .slice(0, 1)
                .map((light) => (
                  <li key={light.id}>
                    <Link to={`#${light.light_groups[0].slug}`}>
                      {light.light_groups[0].name}
                    </Link>
                  </li>
                ))
            ))}
          </ul>
        </div>
      </section>

      <div className="stork">
        <hr />
        <h3>
          Search
        </h3>
        <LightSearch />
      </div>


      {lightGroupArray.map((group) => (
        allStrapiLight.nodes
          .filter((light) => light.light_groups[0].slug === (group))
          .slice(0, 1)
          .map((light) => (
            <>
              <section
                key={light.id}
                id={light.light_groups[0].slug}
                className="stork"
              >
                <hr />
                <h3>
                  <Link to={`/light-group/${light.slug}`}>
                    {light.light_groups[0].name}
                  </Link>
                </h3>
                <p key={light.id}>{light.light_groups[0].excerpt}</p>
              </section>

              <section
                key={light.id}
                className="deck">
                {allStrapiLight.nodes
                  .filter((light) => light.light_groups[0].slug === (group))
                  .map((light) => (
                    <Card
                      key={light.id}
                      {...light}
                      breadcrumb='light'
                    />
                  ))}
              </section>
            </>
          ))
      ))}
      <Footer />

    </>
  )
}

export default lightsPage

export const Head = () => {
  return (
    <SEO
      title='Christmas Lights'
      // TODO: this is a bad description
      // description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
      url="christmas-lights"
    />
  )
}



{/* <ul>
            {lightGroupArray.map((service) => (
              allStrapiLight.nodes
                .filter((light) => light.light_groups.map((group) => group.slug).includes(service))
                .map((light) => (
                  <li key={light.id}>
                    <Link to={`/light/${light.slug}`}>
                      {light.name}
                    </Link>
                  </li>
                ))
            ))}
          </ul> */}