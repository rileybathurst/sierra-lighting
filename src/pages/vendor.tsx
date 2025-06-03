import * as React from "react"
import { Link, graphql } from 'gatsby';

import { SEO } from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import type { CardType } from "../types/card-type";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

type vendorsPageTypes = {
  data: {
    allStrapiVendor: {
      nodes: CardType[];
    };
    allStrapiCollaborator: {
      nodes: {
        id: React.Key;
        industry: string;
        slug: string;
        description: BlocksContent;
      }[];
    };
    strapiVendorDescription: {
      excerpt: string;
    };
  };
}
const VendorsPage = ({ data }: vendorsPageTypes) => {

  const vendorsByCollaborator: Record<string, CardType[]> = {};

  data.allStrapiVendor.nodes.forEach((vendor: CardType & { collaborator?: { slug: string } }) => {
    const slug = vendor.collaborator?.slug;
    if (slug) {
      if (!vendorsByCollaborator[slug]) {
        vendorsByCollaborator[slug] = [];
      }
      vendorsByCollaborator[slug].push(vendor);
    }
  });

  return (
    <>
      <Header />

      <main>
        {/* TODO: wedding is the prodimenant but not the only I can do more with that although this is good for seo */}
        <h1 className="mixta">Wedding Vendors</h1>
        {/* // TODO: needs spacing */}
        <p>{data.strapiVendorDescription.excerpt}</p>
      </main >

      {/* // TODO: something here for the collabs that are currently not filled in such as DJs */}
      {/* // TODO: order these manually as an override to length */}
      {[...data.allStrapiCollaborator.nodes]
        .sort((a, b) => (vendorsByCollaborator[b.slug]?.length || 0) - (vendorsByCollaborator[a.slug]?.length || 0))
        .map((collaborator) => (
          <div key={collaborator.id}>
            <div className="stork">
              <hr />
              <Link to={`/vendor/${collaborator.slug}`}>
                <h3 className="capitalize">{collaborator.industry}</h3>
              </Link>
              <BlocksRenderer content={collaborator.description} />
            </div>

            <div className="deck">
              {vendorsByCollaborator[collaborator.slug]?.map((vendor: CardType) => (
                <Card
                  key={vendor.id}
                  {...vendor}
                  breadcrumb="vendor"
                />
              ))}
            </div>
          </div>
        ))}

      <Footer />

    </>
  )
}

export default VendorsPage

//  this might have to go to the bottom and not be usestaticquery
export const query = graphql`
  query VendorsQuery {
    allStrapiVendor {
      nodes {
        ...vendorCard
        collaborator {
          id
          industry
          slug
        }
      }
    }
    allStrapiCollaborator {
      nodes {
        id
        industry
        slug
        description {
          children {
            text
            type
          }
          type
        }
      }
    }
    strapiVendorDescription {
      excerpt
    }
  }
`

type vendorHeadTypes = {
  data: {
    strapiVendorDescription: {
      excerpt: string;
    }
  }
}
export const Head = ({ data }: vendorHeadTypes) => {
  return (
    <SEO
      title='Vendors'
      description={data.strapiVendorDescription.excerpt}
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      url="vendor"
    />
  )
}
