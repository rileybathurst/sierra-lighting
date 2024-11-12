import * as React from "react"
import { graphql, Script } from "gatsby"
import LightView from "../../views/light-view"
import SEO from "../../components/seo"
import type { GatsbyImageType } from "../../types/gatsby-image"
import type { CardType } from "../../types/card-type"

export const query = graphql`
  query LightQuery($slug: String!) {
    strapiLight(slug: { eq: $slug }) {
      id
      name
      slug
      excerpt
      description

      services {
        id
        name
        slug
      }

      light_groups {
        id
        name
        slug

        lights {
          ...lightCard
        }
      }

      alias

      image {
        localFile {
          url
          childImageSharp {
            gatsbyImageData(
              breakpoints: [960, 1920]
              width: 960
            )
          }
        }
        alternativeText
        caption
      }

      detail {
        localFile {
          url
          childImageSharp {
            gatsbyImageData(
              breakpoints: [960, 1920]
              width: 960
            )
          }
        }
        alternativeText
      }

      projects {
        ...projectCard
      }

      altGallery {
        localFile {
          url
          childImageSharp {
            gatsbyImageData(
              breakpoints: [960, 1920]
              width: 960
            )
          }
        }
        alternativeText
      }
    }

    allStrapiLight(limit: 3, filter: {slug: {nin: [$slug] }}) {
      nodes {
        ...lightCard
      }
    }

    holiday: allStrapiProcess(
        filter: {services: {elemMatch: {slug: {eq: "residential"}}}},
        sort: {order: ASC}
        ) {
        nodes {
          id
          name
        }
    }
    
    wedding: allStrapiProcess(
      filter: {services: {elemMatch: {slug: {eq: "wedding"}}}},
      sort: {order: ASC}
      ) {
      nodes {
        id
        name
      }
    }

    allStrapiProject(
      filter: {lights: {elemMatch: {slug: {in: [$slug]}}}},
      # sort: {fields: date, order: DESC}
      limit: 3
    ) {
      nodes {
        ...projectCard
      }
    }

    strapiAbout {
      url
    }

  }
`
type LightPageTypes = {
  data: {
    strapiLight: {
      id: React.Key;
      name: string;
      slug: string;
      excerpt: string;
      description: string;

      services: {
        id: React.Key;
        name: string;
        slug: string;
      }[];

      light_groups: {
        id: React.Key;
        name: string;
        slug: string;

        lights: CardType[];
      }[];
      alias: string;
      image: GatsbyImageType;
      detail: GatsbyImageType;

      altGallery: GatsbyImageType[];
    };
    allStrapiLight: {
      nodes: CardType[];
    };
    allStrapiProject: {
      nodes: CardType[];
    };
    weddingProcess: {
      nodes: {
        id: React.Key;
        name: string;
      }[];
    };
    holidayProcess: {
      holiday: {
        nodes: {
          id: React.Key;
          name: string;
        }[];
      }[];
    }
    projects: {
      nodes: CardType[];
    };
    strapiAbout: {
      url: string;
    };

    holiday: {
      nodes: {
        id: React.Key;
        name: string;
      }[];
    };

    wedding: {
      nodes: {
        id: React.Key;
        name: string;
      }[];
    };
  }
}
const LightPage = ({ data }: LightPageTypes) => {

  return (
    <LightView
      light={data.strapiLight}
      other={data.allStrapiLight}
      weddingProcess={data.wedding.nodes}
      holidayProcess={data.holiday.nodes}
      projects={data.allStrapiProject}
    />
  );
};

export default LightPage;

// TODO: might need a image default variable here

export const Head = ({ data }: LightPageTypes) => {

  let aliasString = '';

  if (data.strapiLight.alias) {
    // console.log(data.strapiLight.alias)
    const alias = data.strapiLight.alias
    aliasString = alias.split('\n')
      .map(item => item.trim().replace(/^- /, ''))
      .map(item => item.charAt(0).toUpperCase() + item.slice(1))
      .join(' | ');
    // console.log(aliasString);
  }

  let processString = '';
  // console.log(data.wedding.nodes);

  if (data.strapiLight.services.every(service => service.slug === 'residential' || service.slug === 'commercial')) {
    for (const process of data.holiday.nodes) {
      processString += ` | ${process.name}`;
    }
  } else {
    for (const process of data.wedding.nodes) {
      processString += ` | ${process.name}`;
    }
  }

  // console.log(processString);

  return (
    <>
      <SEO
        title={`
          ${data.strapiLight.name}
          ${data.strapiLight.alias ? ` | ${aliasString}` : ''}
          ${data.strapiLight.services.every(service => service.slug === 'residential' || service.slug === 'commercial') ? (
            'for christmas lights'
          ) : (
            'for weddings'
          )}
        `}
        // TODO: needs the aliases in the SEO
        description={`${data.strapiLight?.excerpt} ${processString}`}
        image={data.strapiLight?.image?.localFile?.url}
        url={`light/${data.strapiLight.slug}`}
        breadcrumbs={[
          {
            name: "Light",
            item: "lights"
          },
          {
            name: data.strapiLight.name,
            item: `light/${data.strapiLight.slug}`
          }
        ]}
      />
      {/*       <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Offer",
            "name": "${data.strapiLight.name} ${data.strapiLight.alias ? ` | ${aliasString}` : ''} ${data.strapiLight.services.every(service => service.slug === 'residential' || service.slug === 'commercial') ? ('for christmas lights') : ('for weddings')}",
            "description": "${data.strapiLight.excerpt} ${processString}",
            "image": "${data.strapiLight?.image?.localFile?.url}",
            "url": "${data.strapiAbout.url}/light/${data.strapiLight.slug}"
          }
        `}
      </Script> */}
    </>
  )
}
