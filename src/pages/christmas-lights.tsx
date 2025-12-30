import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import LightSearch from "../components/light-search";
import Card from "../components/card";
import type { LightCardType } from "../types/light-card-type";
import type { LightGroupType } from "../types/light-group-type";

const lightsPage = () => {

  const { allStrapiLight } = useStaticQuery(graphql`
    query ChristmasLightsQuery {

      allStrapiLight(
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

  // ? this seems overkill its here isnt it an already defined type?
  type ChristmasLightType = {
    id: React.Key;
    name: string;
    slug: string;
    excerpt: string;
    xmasOrder?: number;
    light_groups: LightGroupType[];
  }

  const lightGroupSet = new Set();
  for (const light of allStrapiLight.nodes) {
    light.light_groups.forEach((group: LightGroupType) => {
      lightGroupSet.add(group.xmasOrder)
    })
  }

  const lightGroupArray = Array.from(lightGroupSet);

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
                .filter((light: ChristmasLightType) => light.light_groups[0].xmasOrder === (group))
                .slice(0, 1)
                .map((light: ChristmasLightType) => (
                  <li key={light.id}>
                    <Link to={`/light-group/${light.light_groups[0].slug}`}>
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
          .filter((light: ChristmasLightType) => light.light_groups[0].xmasOrder === (group))
          .slice(0, 1)
          .map((light: ChristmasLightType) => (
            <React.Fragment key={light.light_groups[0].xmasOrder}>
              <section
                // key={light.light_groups[0].slug}
                className="stork"
              >
                <hr />
                <h3>
                  <Link to={`/light-group/${light.light_groups[0].slug}`}>
                    {light.light_groups[0].name}
                  </Link>
                </h3>
                <p key={light.id}>{light.light_groups[0].excerpt}</p>
              </section>

              <section
                key={light.id}
                className="deck">
                {allStrapiLight.nodes
                  .filter((light: ChristmasLightType) => light.light_groups[0].xmasOrder === (group))
                  .map((light: LightCardType) => (
                    <Card
                      key={light.id}
                      {...light}
                      breadcrumb='light'
                    />
                  ))}
              </section>
            </React.Fragment>
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
      // TODO: this is a bad description bring it from strapi
      // description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
      url="christmas-lights"
    />
  )
}
