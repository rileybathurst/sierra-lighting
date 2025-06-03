import * as React from "react"
import { graphql, Script, Link } from "gatsby"
import SEO from "../../components/seo"
import Header from "../../components/header";
import Footer from "../../components/footer";
import Start from "../../components/start";
import Card from "../../components/card";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import type { CardType } from "../../types/card-type";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Hero from "../../components/hero";
import type { ImageType } from "../../types/image-type";

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
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }
      
      services {
        name
        slug
      }

      excerpt

      vendors {
        ...vendorCard
      }
    }
  }
`

type CollaboratorPageTypes = {
  data: {
    strapiCollaborator: {
      industry: string;
      description: BlocksContent;
      excerpt: string;
      hero?: ImageType;
      slug?: string;
      vendors?: CardType[];
    };
  };
};

const CollaboratorPage = ({ data }: CollaboratorPageTypes) => {
  return (
    <>
      <Header />

      {data.strapiCollaborator?.hero ?
        <Hero image={data.strapiCollaborator.hero} />
        : null
      }
      <main className="stork">

        <h1>{data.strapiCollaborator.industry}</h1>
        <BlocksRenderer content={data.strapiCollaborator.description} />

        {/* // TODO: needs spacing */}
        <Start path={`vendor/${data.strapiCollaborator.industry}`} />
      </main>

      {(data.strapiCollaborator?.vendors?.length ?? 0) > 0 ?
        <>
          <hr className="stork" />
          <div className="deck">
            {data.strapiCollaborator?.vendors?.map((vendor: CardType) => (
              <Card
                key={vendor.id}
                {...vendor}
                breadcrumb="vendor"
              />
            ))}
          </div>
        </>
        : null}

      {/* // TODO: loop the other collaborators */}


      <hr className="stork" />
      {/* // ? did I do the fancy version here? */}
      <Breadcrumbs>
        <Breadcrumb><Link to="/vendor/">Vendor</Link></Breadcrumb>
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
      // TODO image
      description={data.strapiCollaborator?.excerpt}
      image={data.strapiCollaborator?.hero?.localFile?.url}
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
    >
    </SEO>
  )
}
