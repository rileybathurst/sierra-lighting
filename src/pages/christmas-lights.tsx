// * this is a weird extra page as it has to query both sets

import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Grouploop from "../components/grouploop";
import LightSearch from "../components/light-search";

function Filter({ groups }) {
  let filtered = groups.filter((group) => group[1].nodes.length > 0);

  return (
    filtered.map((gp) => {

      // console.log(gp[0].id);

      return (
        <li key={gp[0].id}>
          <Link to={`#${gp[0].slug}`}>
            {gp[0].name}
          </Link>
        </li >
      )
    })
  )
}

const lightsPage = () => {

  const data = useStaticQuery(graphql`
    query ChristmasLightsQuery {

      overhead: strapiLightGroup(slug: {eq: "overhead"}) {
        ...lightGroup
      }

      overheadlights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "overhead"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
          }
        ) {
        nodes {
          ...lightCard
        }
      }
      
      accent: strapiLightGroup(slug: {eq: "accent"}) {
        ...lightGroup
      }

      accentlights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "accent"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
          }
        ) {
        nodes {
          ...lightCard
        }
      }
      
      dance: strapiLightGroup(slug: {eq: "dance"}) {
        ...lightGroup
      }

      dancelights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "dance"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }
      ) {
        nodes {
          ...lightCard
        }
      }
      
      pipe: strapiLightGroup(slug: {eq: "pipe-drape"}) {
        ...lightGroup
      }

      pipelights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "pipe-drape"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
          }
        ) {
        nodes {
          ...lightCard
        }
      }
      
      path: strapiLightGroup(slug: {eq: "path"}) {
        ...lightGroup
      }

      pathlights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "path"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }
      ) {
        nodes {
          ...lightCard
        }
      }
      
      tree: strapiLightGroup(slug: {eq: "tree"}) {
        ...lightGroup
      }

      treelights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "tree"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }
      ) {
        nodes {
          ...lightCard
        }
      }
      
      building: strapiLightGroup(slug: {eq: "building"}) {
        ...lightGroup
      }
      
      buildinglights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "building"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }
      ) {
        nodes {
          ...lightCard
        }
      }

      greenery: strapiLightGroup(slug: {eq: "greenery"}) {
        ...lightGroup
      }

      greenerylights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "greenery"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }
      ) {
        nodes {
          ...lightCard
        }
      }

      ornaments: strapiLightGroup(slug: {eq: "ornaments"}) {
        ...lightGroup
      }

      ornamentslights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {light_groups: {elemMatch: {slug: {eq: "ornaments"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }
      ) {
        nodes {
          ...lightCard
        }
      }
      
      lantern: strapiLightGroup(slug: {eq: "lantern"}) {
        ...lightGroup
      }

      lanternlights: allStrapiLight(
        sort: {xmasOrder: ASC},
        filter: {
          light_groups: {elemMatch: {slug: {eq: "lantern"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }
      ) {
        nodes {
          ...lightCard
        }
      }

      other: allStrapiLight(
        filter: {
          light_groups: {elemMatch: {slug: {eq: "lanterns"}}},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }) {
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

  // TODO: theres an other were not using as a fallback

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

  let season = data.season;
  // console.log(season);

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

      <Seo
        title="Lights | Sierra Lighting"
        description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/lights-og-sierra_lighting.jpg"
      />
      <Header />
      <main className="lights__page">

        <div className="measure">
          <h2 className="crest">What we build</h2>
          <h1 className="mixta">Lights</h1>

          <hr />

          <section className="deck">
            <div>
              <p>Filter by type:</p>
              <Filter groups={groups} />
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
        {
          groups.map((group) => (
            <div
              key={group[0].id}
              id={group[0].slug}
            >
              <Grouploop group={group} />
            </div>
          ))
        }

      </main >

      <Footer />

    </>
  )
}

export default lightsPage
