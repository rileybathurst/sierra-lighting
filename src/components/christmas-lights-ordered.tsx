import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Grouploop from "./grouploop";

const ChristmasLightsOrdered = () => {

  // TODO: I wonder if you can variable services in the filter

  const data = useStaticQuery(graphql`
    query ChristmasLightsOrderQuery {

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

  // ? why is there a wedding order in christmas lights?
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
      {groups.map((group) => (
        <div
          key={group[0].id}
          id={group[0].slug}
        >
          <Grouploop group={group} />
        </div>
      ))
      }
    </>
  );
}

export default ChristmasLightsOrdered
