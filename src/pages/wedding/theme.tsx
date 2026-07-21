import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { SEO } from "../../components/seo";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import type { CardType } from "../../types/card-type";
import Season from "../../components/season";
import ReactMarkdown from "react-markdown";

const ThemesPage = () => {

  const data = useStaticQuery(graphql`
    query ThemesQuery {
      allStrapiTheme {
        nodes {
          id
          title
          excerpt
          slug

          
        }
      }
    }
  `);

  /*   projects {
              ...projectCard
            } */

  return (
    <>
      <Header />

      <main>
        <h1>Wedding Themes</h1>
        {/* // TODO: */}
        <p>We work with planners, etc to create</p>
      </main>

      <section>
        {data.allStrapiTheme.nodes.map((theme: CardType) => (
          <h3 key={theme.id}>{theme.title}</h3>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default ThemesPage;

export const Head = () => {
  return (
    <SEO
      title='Wedding Themes'
      url="wedding/themes"
    />
  )
}