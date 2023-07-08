import * as React from "react"
import { graphql } from "gatsby"
import LightGroupView from "../../views/lightgroup-view"

export const query = graphql`
  query LightGroupQuery($slug: String!) {
    strapiLightGroup(slug: { eq: $slug }) {
      id
      name
      excerpt
      outdoor
      wedding
      residentialchristmas
      commercialchristmas

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
  const lightgroup = data.strapiLightGroup;
  const other = data.allStrapiLightGroup;
  return (
    <LightGroupView
      lightgroup={lightgroup}
      other={other}
    />
  );
};

export default LightPage;
