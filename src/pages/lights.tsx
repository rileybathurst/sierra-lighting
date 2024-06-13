import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

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

  // const other = data.other;

  const overheadgroup = [
    data.overhead,
    data.overheadlights
  ]

  const accentgroup = [
    data.accent,
    data.accentlights
  ]

  const dancegroup = [
    data.dance,
    data.dancelights
  ]

  const pipegroup = [
    data.pipe,
    data.pipelights
  ]

  const pathgroup = [
    data.path,
    data.pathlights
  ]

  const treegroup = [
    data.tree,
    data.treelights
  ]

  const buildinggroup = [
    data.building,
    data.buildinglights
  ]

  const greenerygroup = [
    data.greenery,
    data.greenerylights
  ]

  const ornamentsgroup = [
    data.ornaments,
    data.ornamentslights
  ]

  const lanterngroup = [
    data.lantern,
    data.lanternlights
  ]

  const groups = [
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

  const services = data.service.nodes;

  const season = data.season;
  if (season.wedding) {
    groups.sort((a, b) => {
      if (a[0].weddingOrder === null && b[0].weddingOrder === null) {
        return 0;
      }
      if (a[0].weddingOrder === null) {
        return 1;
      }
      if (b[0].weddingOrder === null) {
        return -1;
      }

      return a[0].weddingOrder - b[0].weddingOrder;
    });
  } else {
    // puts null items up top
    // groups.sort((a, b) => a[0].xmasOrder - b[0].xmasOrder);

    groups.sort((a, b) => {
      if (a[0].xmasOrder === null && b[0].xmasOrder === null) {
        return 0;
      }
      if (a[0].xmasOrder === null) {
        return 1;
      }
      if (b[0].xmasOrder === null) {
        return -1;
      }
      return a[0].xmasOrder - b[0].xmasOrder;
    });
  }

  interface ServiceType {
    id: string;
    name: string;
    slug: string;
  }

  return (
    <>
      <Header />
      <main className="lights__page">

        <div className="stork">
          <h2 className="crest">What we build</h2>
          <h1 className="mixta">Lights</h1>

          <hr />

          <section className="deck">
            <div>
              Filter by use:
              <ul>
                {services.map((service: ServiceType) => (
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

        <div className="stork">
          <hr />
          <h3>
            Search
          </h3>
          <LightSearch />
        </div>

        {groups.map((group) => (
          <div
            key={group[0].id}
            id={group[0].slug}
          >
            <Grouploop group={group} />
          </div>
        ))}

        {/* <div className="stork">
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
      title={`Lights`}
      // TODO: where does this come from?
      description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/lights-og-sierra_lighting.jpg"
      url="lights"
    />
  )
}