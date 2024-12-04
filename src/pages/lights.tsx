// TODO: check this on the xmas season
// TODO: storybook and fragment more of this if not componentize it
// TODO: why do we have 3 queries for all wedding and xmas lights? they are grabbing the same thing
// ! use an object for the groups so we can sort them and read whats going on


import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import LightSearch from "../components/light-search";

const lightsPage = () => {

  const data = useStaticQuery(graphql`
    query LightsQuery {

      wedding: allStrapiLight(sort: {weddingOrder: ASC}) {
        nodes {
          light_groups {
            name
            slug
            excerpt
            weddingOrder
            xmasOrder
          }
          ...lightCard
        }
      }

      xmas: allStrapiLight(sort: {xmasOrder: ASC}) {
        nodes {
          light_groups {
            name
            slug
            excerpt
            weddingOrder
            xmasOrder
          }
          ...lightCard
        }
      }

      all: allStrapiLight {
        nodes {
          name
          services {
            slug
          }
          light_groups {
            slug
          }
        }
      }

      strapiSeason {
        wedding
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

  type FilterLightType = {
    name: string
    services: {
      slug: string
    }[]
    light_groups: {
      slug: string
    }[]
  }

  if (process.env.NODE_ENV === "development") {

    const noService = data.all.nodes.filter((light: FilterLightType) => !light.services.length);
    noService.map((light: { name: string; }) => {
      console.warn(`${light.name} does not have a service`);
    });

    const noGroup = data.all.nodes.filter((light: FilterLightType) => !light.light_groups.length);
    noGroup.map((light: { name: string; }) => {
      console.warn(`${light.name} is not in a group`);
    });

  }

  // TODO: allStrapiService should probably be sorted

  const dataSeason = data.strapiSeason.wedding ? data.wedding : data.xmas;

  const lightGroupSet = new Set();
  for (const light of dataSeason.nodes) {
    light.light_groups.map((group: { slug: string }) => {
      lightGroupSet.add(group.slug,)
    })
  }
  // ? what if I go to an object so I can deal with the order
  const lightGroupArray = Array.from(lightGroupSet);

  const lightGroupArrayOrder: [string, number | null, number | null][] = [];

  lightGroupArray.map((group) => {
    dataSeason.nodes
      .filter((light) => light.light_groups.map((group) => group.slug).includes(group))
      .slice(0, 1)
      .map((light) => (
        // console.log(light.light_groups[0].weddingOrder)
        lightGroupArrayOrder.push([group, light.light_groups[0].weddingOrder, light.light_groups[0].xmasOrder])
      ))
  })

  console.log(lightGroupArray);

  // console.log(data.strapiSeason.wedding);
  if (data.strapiSeason.wedding) {
    lightGroupArrayOrder.sort((a, b) => {
      if (a[1] === null && b[1] === null) {
        return 0;
      }
      if (a[1] === null) {
        return 1;
      }
      if (b[1].weddingOrder === null) {
        return -1;
      }

      return a[1] - b[1];
    });
  } else {
    lightGroupArray.sort((a, b) => {
      if (a[2] === null && b[2] === null) {
        return 0;
      }
      if (a[2] === null) {
        return 1;
      }
      if (b[2] === null) {
        return -1;
      }
      return a[2] - b[2];
    });
  }

  // console.log(lightGroupArrayOrder);

  return (
    <>
      <Header />
      <main className="stork">
        <h1 className="mixta">Lights</h1>
      </main >

      {/* // TODO: this probably shouldnt be a deck we can split in better ways */}
      <section className="stork wrap">
        <div>
          Filter by use:
          <ul>
            {data.allStrapiService.nodes.map((service) => (
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
            {lightGroupArrayOrder.map((group) => (
              dataSeason.nodes
                .filter((light) => light.light_groups.map((group) => group.slug).includes(group[0]))
                .slice(0, 1)
                .map((light) => (
                  <li key={light.id}>
                    {/* // TODO: slide */}
                    <Link to={`#${light.light_groups[0].slug}`}>
                      {light.light_groups[0].name}
                    </Link>
                  </li>
                ))
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

      {lightGroupArrayOrder.map((group) => (
        <div
          key={group}
          id={group[0]}
        >
          <div className="stork">
            <hr />

            {dataSeason.nodes
              .filter((light) => light.light_groups.map((group) => group.slug).includes(group[0]))
              .slice(0, 1)
              .map((light) => (
                <React.Fragment key={light.id}>
                  <h3>
                    <Link to={`/light-group/${light.light_groups[0].slug}`}>{light.light_groups[0].name}</Link>
                  </h3>
                  <p>{light.light_groups[0].excerpt}</p>
                </React.Fragment>
              ))
            }

          </div>
          <div className="deck">
            {dataSeason.nodes
              .filter((light) => light.light_groups.map((group) => group.slug).includes(group[0]))
              .map((light) => (
                <Card key={light.id}
                  {...light}
                  breadcrumb="light"
                />
              ))
            }
          </div>
        </div>
      ))
      }

      < Footer />

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