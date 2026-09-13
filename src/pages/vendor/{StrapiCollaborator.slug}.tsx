import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import { graphql, Link } from "gatsby";
// /vendor/planners/ etc
import * as React from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import SEO from "../../components/seo";
import Start from "../../components/start";
import type { CardType } from "../../types/card-type";
import type { HeroSEOImageType } from "../../types/hero-seo-image-type";

export const query = graphql`
  query CollaboratorQuery($slug: String!) {
    strapiCollaborator(slug: { eq: $slug }) {
      industry
      description {
        children {
          text
          type
        }
        type
      }
      slug

      hero {
        ...heroSEOImageFragment
      }

      excerpt

      vendors {
        ...vendorCardFragment
      }
    }
  }
`;

type CollaboratorPageTypes = {
  data: {
    strapiCollaborator: {
      industry: string;
      description: BlocksContent;
      excerpt: string;
      hero?: HeroSEOImageType;
      slug?: string;
      vendors?: CardType[];
    };
  };
};

const CollaboratorPage = ({ data }: CollaboratorPageTypes) => {
  return (
    <>
      <Header />

      {data.strapiCollaborator?.hero ? (
        <Hero image={data.strapiCollaborator.hero} />
      ) : null}
      <main>
        <h1>{data.strapiCollaborator.industry}</h1>
        <BlocksRenderer content={data.strapiCollaborator.description} />

        {/* // TODO: needs spacing */}
        <Start path={`vendor/${data.strapiCollaborator.industry}`} />
      </main>

      {(data.strapiCollaborator?.vendors?.length ?? 0) > 0 ? (
        <>
          <hr className="above-deck" />
          <div className="deck">
            {data.strapiCollaborator?.vendors?.map((vendor: CardType) => (
              <Card
                key={vendor.id}
                {...vendor}
                // * as const helps the type with collaborator being only used sometimes but always here
                breadcrumb={`vendor/${data.strapiCollaborator.slug}` as const}
              />
            ))}
          </div>
        </>
      ) : null}

      <hr />

      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/vendor/">Vendor</Link>
        </Breadcrumb>
        <Breadcrumb>{data.strapiCollaborator.industry}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default CollaboratorPage;

export const Head = ({ data }: CollaboratorPageTypes) => {
  return (
    <SEO
      title={`${data.strapiCollaborator.industry}`}
      // TODO image could possibly have an overlay from us would be a rad place to do that
      description={data.strapiCollaborator?.excerpt}
      image={data.strapiCollaborator?.hero}
      url={`/vendor/${data.strapiCollaborator.slug}`}
      breadcrumbs={[
        {
          name: "Vendor",
          item: "/vendor",
        },
        {
          name: data.strapiCollaborator.industry,
          item: `vendor/${data.strapiCollaborator.slug}`,
        },
      ]}
    ></SEO>
  );
};
