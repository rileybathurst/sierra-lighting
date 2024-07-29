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
    }

    allStrapiLight(limit: 3, filter: {slug: {nin: [$slug] }}) {
      nodes {
        ...lightCard
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
      projects: CardType[];
    };
    allStrapiLight: {
      nodes: CardType[];
    };
  };
}

const LightPage = ({ data }: LightPageTypes) => {
  return (
    <LightView
      light={data.strapiLight}
      other={data.allStrapiLight}
    />
  );
};

export default LightPage;

// TODO: might need a image default variable here

export const Head = ({ data }: LightPageTypes) => {
  return (
    <>
      <SEO
        title={`${data.strapiLight.name}`}
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
