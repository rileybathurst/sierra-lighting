// TODO: storybook and fragment more of this if not componentize it
// TODO: move the check for lights having a service on the page of that light

import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import LightSearch from "../components/light-search";
import Season from "../components/season";
import type { CardType } from "../types/card-type";

const lightsPage = () => {

  const data = useStaticQuery(graphql`
    query LightsQuery {

      allStrapiLightGroup {
        nodes {
          name
          slug
          excerpt
          weddingOrder
          xmasOrder

          lights {
            services {
              slug
            }
            weddingOrder
            xmasOrder
            ...lightCard
          }
        }
      }

      allStrapiService {
        nodes {
          id
          name
          slug
        }
      }

    }
  `)

  type ServiceTypes = {
    id: string
    name: string
    slug: string
  }

  type LightGroupTypes = {
    name: string
    slug: string
    excerpt: string
    weddingOrder: number | null
    xmasOrder: number | null
    lights: CardType[];
  }

  type ExtendedCardType = CardType & {
    weddingOrder: number | null;
    xmasOrder: number | null;
  };

  // * check that each light group has lights
  if (process.env.NODE_ENV === "development") {
    data.allStrapiLightGroup.nodes.map((group: LightGroupTypes) => {
      // console.log(group.name);

      if (group.lights.length === 0) {
        console.warn(`Light group ${group.name} does not have any lights`);
      }

      return null;
    });
  }

  // * Order the groups by season
  // console.log(Season());
  if (Season() === 'wedding') {
    data.allStrapiLightGroup.nodes.sort((a: LightGroupTypes, b: LightGroupTypes) => {
      if (a.weddingOrder === null && b.weddingOrder === null) return 0;
      if (a.weddingOrder === null) return 1;
      if (b.weddingOrder === null) return -1;
      return a.weddingOrder - b.weddingOrder;

    });
  } else if (Season() === 'xmas') {
    data.allStrapiLightGroup.nodes.sort((a: LightGroupTypes, b: LightGroupTypes) => {
      if (a.xmasOrder === null && b.xmasOrder === null) return 0;
      if (a.xmasOrder === null) return 1;
      if (b.xmasOrder === null) return -1;
      return a.xmasOrder - b.xmasOrder;
    });
  }
  // console.log(data.allStrapiLightGroup.nodes);
  // * This is functional

  // order the lights by season in each group
  data.allStrapiLightGroup.nodes.map((group: LightGroupTypes) => {
    if (Season() === 'wedding') {
      group.lights.sort((a: CardType, b: CardType) => {
        const aWeddingOrder = (a as ExtendedCardType).weddingOrder;
        const bWeddingOrder = (b as ExtendedCardType).weddingOrder;
        if (aWeddingOrder === null && bWeddingOrder === null) return 0;
        if (aWeddingOrder === null) return 1;
        if (bWeddingOrder === null) return -1;
        return aWeddingOrder - bWeddingOrder;
      });
    } else if (Season() === 'xmas') {
      group.lights.sort((a: CardType, b: CardType) => {
        const aXmasOrder = (a as ExtendedCardType).xmasOrder;
        const bXmasOrder = (b as ExtendedCardType).xmasOrder;
        if (aXmasOrder === null && bXmasOrder === null) return 0;
        if (aXmasOrder === null) return 1;
        if (bXmasOrder === null) return -1;
        return aXmasOrder - bXmasOrder;
      });
    }

    return null;
  });

  return (
    <>
      <Header />
      <main className="stork">
        <h1 className="mixta">Lights</h1>
      </main >

      <section className="stork wrap">
        <div>
          Filter by use:
          <ul>
            {data.allStrapiService.nodes.map((service: ServiceTypes) => (
              <li key={service.id}>
                <Link to={`/${service.slug}/lights`}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>or by type:</p>
          <ul>
            {data.allStrapiLightGroup.nodes.map((group: LightGroupTypes) => (
              <li key={group.slug}>
                <Link to={`/light-group/${group.slug}`}>
                  {group.name}
                </Link>
              </li>
            ))}
          </ul>
        </div >
      </section >

      <div className="stork">
        <hr />
        <h3>
          Search
        </h3>
      </div>
      <LightSearch />

      {data.allStrapiLightGroup.nodes.map((group: LightGroupTypes) => (
        <React.Fragment key={group.slug}>

          <hr className="stork" />

          <section className="stork">
            <h2 className="mixta">
              <Link to={`/light-group/${group.slug}`}>
                {group.name}
              </Link>
            </h2>
            {group.excerpt ? <p>{group.excerpt}</p> : null}
          </section>

          {group.lights.length > 0 ? (
            <div className="deck">
              {group.lights.map((light) => (
                <Card 
                  {...light}
                  key={light.id}
                  breadcrumb="light"
                />
              ))}
            </div>

          ) : null}



          </React.Fragment>
      ))}

      <Footer />

    </>
  )
}

export default lightsPage

export const Head = () => {
  return (
    <SEO
      title='Lights'
      // TODO: where does this come from?
      description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/lights-og-sierra_lighting.jpg"
    />
  )
}