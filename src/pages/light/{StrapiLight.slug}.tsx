import * as React from "react"
import { graphql, Script } from "gatsby"
import LightView from "../../views/light-view"
import SEO from "../../components/seo"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

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

      alias {
        internal {
          content
        }
      }

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

const LightPage = ({ data }) => {
  return (
    <LightView
      light={data.strapiLight}
      other={data.allStrapiLight}
    />
  );
};

export default LightPage;

// TODO: might need a image default variable here

export const Head = ({ data }) => {
  return (
    <>
      <SEO
        title={`${data.strapiLight.name} | ${useSiteMetadata().title}`}
        // TODO: needs the aliases in the SEO
        description={data.strapiLight?.excerpt}
        image={data.strapiLight?.image?.localFile?.url}
        url={`light/${data.strapiLight.slug}`}
      />
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Offer",
            "name": "${data.strapiLight.name}",
            "description": "${data.strapiLight.excerpt}",
            "image": "${data.strapiLight?.image?.localFile?.url}",
            "url": "${useSiteMetadata().siteUrl}light/${data.strapiLight.slug}"
          }
        `}
      </Script>
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Light",
              "item": "${useSiteMetadata().url}/light"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "${data.strapiLight.name}",
              "item": "${useSiteMetadata().url}/light/${data.strapiLight.slug}"
            }]
          }
        `}
      </Script>
    </>
  )
}
