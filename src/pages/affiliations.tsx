import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import { SEO } from "../components/seo";
import type { CardHrefType } from "../types/card-type";

const AffiliationsPage = () => {
  // TODO: document why I need the ne null
  const { allStrapiAffiliation } = useStaticQuery(graphql`
    query AffiliationsQuery {
      allStrapiAffiliation(filter: { publishedAt: { ne: null } }) {
        nodes {
          id
          title: name
          excerpt
          href: link

          image: logo {
            ...cardImageFragment
          }
        }
      }
    }
  `);

  return (
    <>
      <Header />

      <main>
        <h1>Affiliations</h1>
      </main>

      <section className="deck">
        {allStrapiAffiliation.nodes.map((affiliation: CardHrefType) => (
          <Card key={affiliation.id} {...affiliation} />
        ))}
      </section>

      <Footer />
    </>
  );
};

export default AffiliationsPage;

export const Head = () => {
  return <SEO title="Affiliations" url="affiliations" />;
};
