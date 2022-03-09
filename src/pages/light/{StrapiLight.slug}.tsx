import * as React from "react"
import { graphql } from "gatsby"
import LightView from "../../views/light-view"

export const query = graphql`
  query LightQuery($slug: String!) {
    strapiLight(slug: { eq: $slug }) {
      id
      name
      description
      slug
    }
  }
`

const LightPage = ({ data }) => {
  const light = data.strapiLight;
  return (
    <LightView
      light={light}
    />
  );
};

export default LightPage;
