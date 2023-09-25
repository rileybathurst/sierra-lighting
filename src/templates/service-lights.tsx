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

  // TODO: Im going to need to do something with the order esepcially for xmas

  // ! testing this seems to work
  const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

  // sort by value
  let organized = items.sort((a, b) => a.value - b.value);
  console.log(organized);

  console.log(items.sort((a, b) => a.value - b.value));

  // these have double arrays so they are a little more complex
  console.log(groups);

  console.log(groups[0][0].order);

  // nope
  let organizedgroups = groups.sort((a, b) => a[0].order - b[0].order);
  console.log(organizedgroups);

  console.log("🦄");

  // these are the numbers I want to sort by
  console.log(groups[0][0]?.order + groups[0][0]?.slug);
  console.log(groups[1][0]?.order + groups[1][0]?.slug);
  console.log(groups[2][0]?.order + groups[2][0]?.slug);
  console.log(groups[3][0]?.order + groups[3][0]?.slug);

  let organizedgroups2 = groups.sort((a, b) => a[0]?.order - b[0]?.order);

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
          <li>{data.strapiService.name} Lighting&nbsp;/&nbsp;</li>
          <li>
            <Link to="/lights">Lights</Link>
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
      sort: {order: ASC},
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
        order
      }
    }

  }
`
