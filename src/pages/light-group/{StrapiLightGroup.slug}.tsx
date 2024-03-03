import * as React from "react"
import { graphql } from "gatsby"
import LightGroupView from "../../views/lightgroup-view"
import SEO from "../../components/seo"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const query = graphql`
  query LightGroupQuery($slug: String!) {
    strapiLightGroup(slug: { eq: $slug }) {
      ...lightGroup

      lights {
        ...lightCard
      }
    }

    allStrapiLightGroup {
      nodes {
        id
        name
        excerpt
        slug
      }
    }
  }
`

const LightPage = ({ data }) => {
  return (
    <LightGroupView
      lightgroup={data.strapiLightGroup}
      other={data.allStrapiLightGroup}
    />
  );
};

export default LightPage;

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiLightGroup.name} | ${useSiteMetadata().title}`}
      description={data.strapiLightGroup?.excerpt}
      // image={data.strapiArea?.image?.localFile?.url}
      url={`light-group/${data.strapiLightGroup.slug}`}
    />
  )
}
