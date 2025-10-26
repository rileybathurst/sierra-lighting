import * as React from "react"
import { graphql } from "gatsby"
import LightGroupView from "../../views/lightgroup-view"
import SEO from "../../components/seo"
import type { LightGroupType } from "../../types/light-group-type"

type LightGroupPageType = {
  data: {
    strapiLightGroup: LightGroupType;
    allStrapiLightGroup: {
      nodes: LightGroupType[];
    };
  };
};

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

const LightPage = ({ data }: LightGroupPageType) => {
  return (
    <LightGroupView
      lightgroup={data.strapiLightGroup}
      other={data.allStrapiLightGroup}
    />
  );
};

export default LightPage;

export const Head = ({ data }: LightGroupPageType) => {
  return (
    <SEO
      title={`${data.strapiLightGroup.name}`}
      description={data.strapiLightGroup?.excerpt}
      // image={data.strapiArea?.image?.localFile?.url}
      url={`light-group/${data.strapiLightGroup.slug}`}
    />
  )
}
