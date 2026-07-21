// TODO: add search to the page

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
    else {
      if (!vendorsByCollaborator.uncategorized) {
        vendorsByCollaborator.uncategorized = [];
      }
      vendorsByCollaborator.uncategorized.push(vendor);
    }
  });

  return (
    <>
      <Header />

      <main>
        <h1>Wedding Vendors</h1>
        <p>{data.strapiVendorDescription.excerpt}</p>
      </main >

      {/* // TODO: something here for the collabs that are currently not filled in such as DJs */}
      {/* // TODO: order these manually as an override to length */}
      {[...data.allStrapiCollaborator.nodes]
        .sort((a, b) => (vendorsByCollaborator[b.slug]?.length || 0) - (vendorsByCollaborator[a.slug]?.length || 0))
        .map((collaborator) => (
          <section key={collaborator.id}>
            <div className="above-deck">
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
                  breadcrumb={`vendor/${collaborator.slug}`}
                />
              ))}
            </div>
          </section>
        ))}

      {vendorsByCollaborator.uncategorized?.length > 0 && (
        <section>
          <div className="above-deck">
            <hr />
            <h3>Other Vendors</h3>
          </div>

          <div className="deck">
            {vendorsByCollaborator.uncategorized.map((vendor: CardType) => (
              <Card
                key={vendor.id}
                {...vendor}
                breadcrumb={`vendor`}
              />
            ))}
          </div>
        </section>
      )}

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
      // TODO:
      // image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      url="vendor"
    />
  )
}
