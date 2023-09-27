// nice start but now organize by light group

import React from 'react';
import { Link, graphql } from "gatsby";
import Header from '../components/header';
import Footer from '../components/footer';
import Grouploop from '../components/grouploop';
import SEO from '../components/seo';

const ServiceLightView = ({ data }) => {

  // ? this is written twice should I dry it out?
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

  let groups = []

  if (data.overhead?.services?.length > 0) {
    groups.push(overheadgroup)
  }

  if (data.accent?.services?.length > 0) {
    groups.push(accentgroup)
  }

  if (data.dance?.services?.length > 0) {
    groups.push(dancegroup)
  }

  if (data.pipe?.services?.length > 0) {
    groups.push(pipegroup)
  }

  if (data.path?.services?.length > 0) {
    groups.push(pathgroup)
  }

  if (data.tree?.services?.length > 0) {
    groups.push(treegroup)
  }

  if (data.building?.services?.length > 0) {
    groups.push(buildinggroup)
  }

  if (data.grennery?.services?.length > 0) {
    groups.push(greenerygroup)
  }

  if (data.ornaments?.services?.length > 0) {
    groups.push(ornamentsgroup)
  }

  if (data.lantern?.services?.length > 0) {
    groups.push(lanterngroup)
  }

  console.log(data.strapiService.name);

  // sort by value
  let events = [
    'Wedding',
    'Non-wedding Events',
    'Commercial Events'
  ]
  // if (data.strapiService.name === 'Wedding') {
  if (events.includes(data.strapiService.name)) {
    groups.sort((a, b) => a[0].weddingOrder - b[0].weddingOrder);
  }

  let xmas = [
    'Residential Christmas',
    'Commercial Christmas'
  ]
  if (xmas.includes(data.strapiService.name)) {
    groups.sort((a, b) => a[0]?.xmasOrder - b[0]?.xmasOrder);
  }

  return (
    <>
      <SEO
        title={`${data.strapiService.name} Lights`}
        description={data.strapiService.excerpt}
      // TODO: image
      />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs">
          <li>
            <Link to={`/${data.strapiService.slug}`}>
              {data.strapiService.name} Lighting
            </Link>&nbsp;/&nbsp;
          </li>
          <li>
            Lights
          </li>
        </ol>
        <hr />
      </div>

      <main>
        <section className='measure'>
          <h1 className='mixta aconcagua'>{data.strapiService.name} Lighting</h1>
          {/* // TODO: markdown this */}
          <p>{data.strapiService.description.data.description}</p>
          <p>
            <Link to={`/${data.strapiService.slug}`}>
              Learn more about how we can light up your {data.strapiService.name}
            </Link>
          </p>
        </section>

        {groups.map((group) => (
          <div
            id={group[0]?.slug}
            key={group[0]?.id}
          >
            <Grouploop group={group} />
          </div>
        ))}
      </main>

      <section className='measure'>
        <hr />
        <h2>Lights For Other Services</h2>
        <ul>
          {data.allStrapiService.nodes.map((service) => (
            <li key={service.id}>
              <a href={`/${service.slug}/lights`}>{service.name} Lights</a>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default ServiceLightView;

export const query = graphql`
  query ServiceLightsTemplate(
    $slug: String!,
  ) {

    strapiService(slug: {eq: $slug}) {
      id
      name
      slug
      description {
        data {
          description
        }
      }
    }

    overhead: strapiLightGroup(
      slug: {eq: "overhead"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    overheadlights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "overhead"}}}
      }
    ) {
      nodes {
        ...lightCard
      }
    }

    accent: strapiLightGroup(
      slug: {eq: "accent"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    accentlights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "accent"}}}
        }
      ) {
      nodes {
        ...lightCard
      }
    }
      
    dance: strapiLightGroup(
      slug: {eq: "dance"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    dancelights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "dance"}}}
        }
      ) {
      nodes {
        ...lightCard
      }
    }
    
    pipe: strapiLightGroup(
      slug: {eq: "pipe-drape"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    pipelights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "pipe-drape"}}}
        }
      ) {
      nodes {
        ...lightCard
      }
    }
    
    path: strapiLightGroup(
      slug: {eq: "path"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    pathlights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "path"}}}
        }
      ) {
      nodes {
        ...lightCard
      }
    }
    
    tree: strapiLightGroup(
      slug: {eq: "tree"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    treelights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
      light_groups: {elemMatch: {slug: {eq: "tree"}}}
      }
      ) {
      nodes {
        ...lightCard
      }
    }
    
    building: strapiLightGroup(
      slug: {eq: "building"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }
    
    buildinglights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "building"}}}
        }
      ) {
      nodes {
        ...lightCard
      }
    }

    greenery: strapiLightGroup(
      slug: {eq: "greenery"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    greenerylights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "greenery"}}}
        }) {
      nodes {
        ...lightCard
      }
    }

    ornaments: strapiLightGroup(
      slug: {eq: "ornaments"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    ornamentslights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "ornaments"}}}
        }
      ) {
      nodes {
        ...lightCard
      }
    }
    
    lantern: strapiLightGroup(
      slug: {eq: "lantern"},
      services: {elemMatch: {slug: {eq: $slug}}}
      ) {
      ...lightGroup
    }

    lanternlights: allStrapiLight(
      sort: {weddingOrder: ASC},
      filter: {
        services: {elemMatch: {slug: {eq: $slug}}},
        light_groups: {elemMatch: {slug: {eq: "lantern"}}}
        }
      ) {
      nodes {
        ...lightCard
      }
    }

    allStrapiService(filter: {slug: {ne: $slug}}) {
      nodes {
        id
        name
        slug
      }
    }

    allStrapiLightGroup {
      nodes {
        slug
        weddingOrder
      }
    }

  }
`
