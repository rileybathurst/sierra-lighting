import * as React from "react"
import { graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";

import Markdown from "react-markdown";
import type { ImageWithAspectType } from "../types/image-with-aspect-type";

type SafetyPageTypes = {
  data: {
    strapiSafety: {
      excerpt: string;
      description: {
        data: {
          description: string;
        };
      };
      image: ImageWithAspectType;
    }
  }
}

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
      ...imageWithAspectFragment
    }
  }
}
`;

const SafetyPage = ({ data }: SafetyPageTypes) => {
  return (
    <>
      <Header />

      <Hero image={data.strapiSafety.image} />

      <main className="stork">
        <h1>Safety</h1>

        <div className="react-markdown">
          <Markdown>
            {data.strapiSafety.description.data.description}
          </Markdown>
        </div>
      </main>

      <Footer />

    </>
  )
}

export default SafetyPage



export const Head = ({ data }: SafetyPageTypes) => {
  return (
    <SEO
      title='Safety'
      description={data.strapiSafety.excerpt}
      image={data.strapiSafety.image}
    />
  )
}