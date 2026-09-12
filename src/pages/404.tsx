// TODO: remove the testing code

import { graphql, Link } from "gatsby";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import { SEO } from "../components/seo";

type NotFoundPageTypes = {
  location: {
    pathname: string;
  };
  data: {
    strapiError: {
      title: string;
      pun: string;
      return: string;
      // TODO: theres a type for this
      hero: {
        url: string;
        alternativeText: string;
        caption: string;
        localFile: {
          absolutePath: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
            resize: {
              aspectRatio: number;
            };
          };
        };
      };
    };
  };
};
const NotFoundPage = ({ data, location }: NotFoundPageTypes) => {
  return (
    <React.Fragment>
      <Header />
      <Hero image={data.strapiError.hero} />
      <main>
        <h2>404 - {location.pathname}</h2>
        <h1>{data.strapiError.title}</h1>
        <p>
          {data.strapiError.pun} - <Link to="/">{data.strapiError.return}</Link>
        </p>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default NotFoundPage;

export const Head = ({ data, location }: NotFoundPageTypes) => {
  return (
    <SEO
      title={`404 - ${location.pathname} `}
      description={data.strapiError.title}
      image={data.strapiError.hero}
      url="404"
    />
  );
};

// TODO: testing
export const query = graphql`
  query errorPage {
    strapiError {
      ...errorFragment
      hero {
        ...heroSEOImageFragment
      }
    }
  }
`;
