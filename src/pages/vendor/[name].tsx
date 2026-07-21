import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Breadcrumbs, Breadcrumb } from "react-aria-components";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import type { CardType } from "../../types/card-type";
import { SEO } from "../../components/seo";
import type { CatchAllTypes } from "../../types/catch-all-types";

function VendorCatchAll({ params }: CatchAllTypes) {
  const { allStrapiVendor } = useStaticQuery(graphql`
    query VendorCatchAllQuery {
      allStrapiVendor(limit: 3) {
          nodes {
            ...vendorCard
        }
      }
    }
  `);

  return (
    <>
      <Header />

      <main>
        <hr />
        <h2 className="crest">404 - {params.name}</h2>
        <h1 className="mixta">
          Oops! Looks like this page has left the party.
        </h1>
        <p>
          Want to brighten up?
          <br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>

      <div className="above-deck">
        <hr />
        <h3>Browse some of our other prefered vendors</h3>
      </div>

      <section className="deck">
        {allStrapiVendor.nodes.map((vendor: CardType) =>
          vendor.collaborator ? (
            <Card
              key={vendor.id}
              {...vendor}
              breadcrumb={`vendor/${vendor.collaborator.slug}`}
            />
          ) : (
            <Card key={vendor.id} {...vendor} breadcrumb="vendor" />
          ),
        )}
      </section>

      <hr className="main" />

      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/vendor/">Vendor</Link>
        </Breadcrumb>
        {/* ? should this be a different and broken breadcrumb? */}
        <Breadcrumb>{params.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
}

export default VendorCatchAll;

export const Head = ({ params }: CatchAllTypes) => {
  return <SEO title={`404 - Vendor / ${params.name}`} />;
};
