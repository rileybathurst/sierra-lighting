import * as React from "react"
import { graphql, Script } from "gatsby"
import LightView from "../../views/light-view"
import SEO from "../../components/seo"
import type { IGatsbyImageData } from "gatsby-plugin-image"
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
          name
        }
    }
    
    wedding: allStrapiProcess(
      filter: {services: {elemMatch: {slug: {eq: "wedding"}}}},
      sort: {order: ASC}
      ) {
      nodes {
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

  }
`

interface LightPageTypes {
  data: {
    strapiLight: {
      id: string;
      name: string;
      slug: string;
      excerpt: string;
      description: string;
      services: {
        id: string;
        name: string;
        slug: string;
      }[];
      light_groups: {
        id: string;
        name: string;
        slug: string;
        lights: {
          id: string;
          name: string;
          slug: string;
          excerpt: string;
          image: {
            localFile: {
              url: string;
              childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
              };
            };
            alternativeText: string;
          };
        }[];
      }[];
      alias: string;
      image: {
        localFile: {
          url: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
        alternativeText: string;
      };
      detail: {
        localFile: {
          url: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
        alternativeText: string;
      };

      altGallery: {
        localFile: {
          url: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
        alternativeText: string;
      };
    };
    allStrapiLight: {
      nodes: CardType[];
    };

    allStrapiProcess: {
      nodes: {
        name: string;
      }
    }

    allStrapiProject: CardType[];

  };
}

// allStrapiProcess: {

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
    console.log(data.strapiLight.alias)
    const alias = data.strapiLight.alias
    aliasString = alias.split('\n')
      .map(item => item.trim().replace(/^- /, ''))
      .map(item => item.charAt(0).toUpperCase() + item.slice(1))
      .join(' | ');
    // console.log(aliasString);
  }

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
        description={data.strapiLight?.excerpt}
        image={data.strapiLight?.image?.localFile?.url}
        url={`light/${data.strapiLight.slug}`}
        breadcrumbs={[
          {
            name: "Light",
            item: "light"
          },
          {
            name: data.strapiLight.name,
            item: `light/${data.strapiLight.slug}`
          }
        ]}
      />
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Offer",
            "name": "${data.strapiLight.name}",
            "description": "${data.strapiLight.excerpt}",
            "image": "${data.strapiLight?.image?.localFile?.url}",
            "url": "light/${data.strapiLight.slug}"
          }
        `}
      </Script>
    </>
  )
}
