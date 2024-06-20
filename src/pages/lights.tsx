// TODO: I need to check this on the xmas season
import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";

const lightsPage = () => {

  const data = useStaticQuery(graphql`
    query Lights2Query {

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

  // TODO: allStrapiService should probably be sorted

  const dataSeason = data.strapiSeason.wedding ? data.wedding : data.xmas;

  const lightGroupSet = new Set();
  for (const light of dataSeason.nodes) {
    light.light_groups.map((group) => {
      // lightGroupSet.add(group.slug)
      lightGroupSet.add(group.slug)
    })
  }
  // ? what if I go to an object so I can deal with the order
  const lightGroupArray = Array.from(lightGroupSet);

  const lightGroupArrayOrder = [];

  lightGroupArray.map((group) => {
    dataSeason.nodes
      .filter((light) => light.light_groups.map((group) => group.slug).includes(group))
      .slice(0, 1)
      .map((light) => (
        // console.log(light.light_groups[0].weddingOrder)
        lightGroupArrayOrder.push([group, light.light_groups[0].weddingOrder, light.light_groups[0].xmasOrder])
      ))
  })

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

  console.log(lightGroupArrayOrder);

  return (
    <>
      <Header />
      <main className="lights__page">
        <h1 className="mixta">Lights</h1>
      </main >

      {/* TODO: this probably shouldnt be a deck we can split in better ways */}
      <section className="deck">
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

      {lightGroupArrayOrder.map((group) => (
        <div
          key={group}
          id={group[0]}
        >
          <div className="stork">
            {/* TODO: hr can probably be a border */}
            <hr />

            {dataSeason.nodes
              .filter((light) => light.light_groups.map((group) => group.slug).includes(group[0]))
              .slice(0, 1)
              .map((light) => (
                <>
                  <h3 key={light.id}>
                    <Link to={`/light-group/${light.slug}`}>{light.light_groups[0].name}</Link>
                  </h3>
                  <p key={light.id}>{light.light_groups[0].excerpt}</p>
                </>
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
      url="lights"
    />
  )
}