import { graphql } from "gatsby";
import * as React from "react";
import Markdown from "react-markdown";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import { SEO } from "../components/seo";
import type { HeroSEOImageType } from "../types/hero-seo-image-type";

type SafetyPageTypes = {
  data: {
    strapiSafety: {
      excerpt: string;
      description: {
        data: {
          description: string;
        };
      };
      image: HeroSEOImageType;
    };
  };
};

export const data = graphql`
  query useStrapiSafety {
    strapiSafety {
    id
    excerpt
        description {
          data {
        description
      }
    }

    image {
      ...heroSEOImageFragment
    }
  }
}
`;

const SafetyPage = ({ data }: SafetyPageTypes) => {
  return (
    <React.Fragment>
      <Header />

      <Hero image={data.strapiSafety.image} />

      <main>
        <h1>Safety</h1>

        {/* // TODO: this has a ul with kinda messy formatting */}
        <div className="react-markdown">
          <Markdown>{data.strapiSafety.description.data.description}</Markdown>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default SafetyPage;

export const Head = ({ data }: SafetyPageTypes) => {
  return (
    <SEO
      title="Safety"
      description={data.strapiSafety.excerpt}
      image={data.strapiSafety.image}
    />
  );
};
