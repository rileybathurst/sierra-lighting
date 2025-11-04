import * as React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import type { LightGroupType } from "../../types/light-group-type"

import { Link } from "gatsby";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import type { CardType } from "../../types/card-type";

type LightGroupPageType = {
  data: {
    strapiLightGroup: LightGroupType;
    allStrapiLightGroup: {
      nodes: CardType[];
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

  console.log(data);

  return (
    <>
      <Header />

      <main className="stork">
        <h1>{data.strapiLightGroup.name}</h1>
        <p>{data.strapiLightGroup.excerpt}</p>
      </main>

      <section className="deck">
        {data.strapiLightGroup.lights.map((light: CardType) => (
          <Card
            key={light.id}
            {...light}
            breadcrumb="light"
          />
        ))}
      </section> 

      <section className="stork">
        <hr />
        <h2>Other Light Groups</h2>
        <ul>
          {data.allStrapiLightGroup.nodes.map((lightgroup) => (
            <li key={lightgroup.id}>
              <Link to={`/light-group/${lightgroup.slug}`}>
                {lightgroup.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/lights/">Light Group</Link></Breadcrumb>
        <Breadcrumb>{data.strapiLightGroup.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
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
