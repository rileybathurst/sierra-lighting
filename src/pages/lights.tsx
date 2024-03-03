import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import Grouploop from "../components/grouploop";
import LightSearch from "../components/light-search";

const lightsPage = () => {

  const data = useStaticQuery(graphql`
    query LightsQuery {

      overhead: strapiLightGroup(slug: {eq: "overhead"}) {
        ...lightGroup
      }

      overheadlights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "overhead"}}}}) {
        nodes {
          ...lightCard
        }
      }
      
      accent: strapiLightGroup(slug: {eq: "accent"}) {
        ...lightGroup
      }

      accentlights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "accent"}}}}) {
        nodes {
          ...lightCard
        }
      }
      
      dance: strapiLightGroup(slug: {eq: "dance"}) {
        ...lightGroup
      }

      dancelights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "dance"}}}}) {
        nodes {
          ...lightCard
        }
      }
      
      pipe: strapiLightGroup(slug: {eq: "pipe-drape"}) {
        ...lightGroup
      }

      pipelights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "pipe-drape"}}}}) {
        nodes {
          ...lightCard
        }
      }
      
      path: strapiLightGroup(slug: {eq: "path"}) {
        ...lightGroup
      }

      pathlights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "path"}}}}) {
        nodes {
          ...lightCard
        }
      }
      
      tree: strapiLightGroup(slug: {eq: "tree"}) {
        ...lightGroup
      }

      treelights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "tree"}}}}) {
        nodes {
          ...lightCard
        }
      }
      
      building: strapiLightGroup(slug: {eq: "building"}) {
        ...lightGroup
      }
      
      buildinglights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "building"}}}}) {
        nodes {
          ...lightCard
        }
      }

      greenery: strapiLightGroup(slug: {eq: "greenery"}) {
        ...lightGroup
      }

      greenerylights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "greenery"}}}}) {
        nodes {
          ...lightCard
        }
      }

      ornaments: strapiLightGroup(slug: {eq: "ornaments"}) {
        ...lightGroup
      }

      ornamentslights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "ornaments"}}}}) {
        nodes {
          ...lightCard
        }
      }
      
      lantern: strapiLightGroup(slug: {eq: "lantern"}) {
        ...lightGroup
      }

      lanternlights: allStrapiLight(sort: {weddingOrder: ASC}, filter: {light_groups: {elemMatch: {slug: {eq: "lantern"}}}}) {
        nodes {
          ...lightCard
        }
      }

      other: allStrapiLight(filter: {light_groups: {elemMatch: {slug: {eq: "lanterns"}}}}) {
        nodes {
          ...lightCard
        }
      }

      service: allStrapiService {
        nodes {
          id
          name
          slug
        }
      }

      season: strapiSeason {
        wedding
      }

    }
  `)

  // let other = data.other;

  let overheadgroup = [
    data.overhead,
    data.overheadlights
  ]

  let accentgroup = [
    data.accent,
    data.accentlights
  ]

  let dancegroup = [
    data.dance,
    data.dancelights
  ]

  let pipegroup = [
    data.pipe,
    data.pipelights
  ]

  let pathgroup = [
    data.path,
    data.pathlights
  ]

  let treegroup = [
    data.tree,
    data.treelights
  ]

  let buildinggroup = [
    data.building,
    data.buildinglights
  ]

  let greenerygroup = [
    data.greenery,
    data.greenerylights
  ]

  let ornamentsgroup = [
    data.ornaments,
    data.ornamentslights
  ]

  let lanterngroup = [
    data.lantern,
    data.lanternlights
  ]

  let groups = [
    overheadgroup,
    accentgroup,
    dancegroup,
    pipegroup,
    pathgroup,
    treegroup,
    buildinggroup,
    greenerygroup,
    ornamentsgroup,
    lanterngroup
  ];

  let services = data.service.nodes;

  let season = data.season;
  if (season.wedding) {
    groups.sort((a, b) => {
      if (a[0].weddingOrder === null && b[0].weddingOrder === null) {
        return 0;
      } else if (a[0].weddingOrder === null) {
        return 1;
      } else if (b[0].weddingOrder === null) {
        return -1;
      } else {
        return a[0].weddingOrder - b[0].weddingOrder;
      }
    });
  } else {
    // puts null items up top
    // groups.sort((a, b) => a[0].xmasOrder - b[0].xmasOrder);

    groups.sort((a, b) => {
      if (a[0].xmasOrder === null && b[0].xmasOrder === null) {
        return 0;
      } else if (a[0].xmasOrder === null) {
        return 1;
      } else if (b[0].xmasOrder === null) {
        return -1;
      } else {
        return a[0].xmasOrder - b[0].xmasOrder;
      }
    });
  }

  return (
    <>
      <Header />
      <main className="lights__page">

        <div className="measure">
          <h2 className="crest">What we build</h2>
          <h1 className="mixta">Lights</h1>

          <hr />

          <section className="deck">
            <div>
              Filter by use:
              <ul>
                {services.map((service) => (
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
                {groups.map((group) => (
                  <li key={group[0].id}>
                    {/* // TODO: slide */}
                    <Link to={`#${group[0].slug}`}>
                      {group[0].name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="measure">
          <hr />
          <h3>
            Search
          </h3>
          <LightSearch />
        </div>

        {/* // TODO: Grouploop should become a component */}
        {groups.map((group) => (
          <div
            key={group[0].id}
            id={group[0].slug}
          >
            <Grouploop group={group} />
          </div>
        ))}

        {/* <div className="measure">
          <h2>Other Lights</h2>
          <p>These lights are not part of a group, but are still available for rent.</p>
        </div>
        <div className="deck">
          {other.nodes.map((light: CardType) => (
            <div key={light.id}>
              <Card card={light} breadcrumb="light" />
            </div>
          ))}
        </div> */}

        {/* <hr /> */}

        {/*         <div className="deck">
          {data.overweddingOrder.nodes.map((light: CardType) => (
            <div key={light.id}>
              <Card card={light} breadcrumb="light" />
            </div>
          ))}
        </div> */}

      </main >

      <Footer />

    </>
  )
}

export default lightsPage

export const Head = () => {
  return (
    <SEO
      title={`Lights | ${useSiteMetadata().title}`}
      description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/lights-og-sierra_lighting.jpg"
      url="lights"
    />
  )
}