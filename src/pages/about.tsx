import React from 'react';
import { graphql, Script } from 'gatsby';
import { SEO } from "../components/seo";
import Footer from "../components/footer";
import Markdown from "react-markdown";
import Header from "../components/header";

type AboutPageTypes = {
  data: {
    strapiAbout: {
      description: {
        data: {
          description: string;
        }
      }
      slogan: string;
    }
  }
}

const AboutPage = ({ data }: AboutPageTypes) => {

  return (
    <>
      <Header />

      {/* // TODO: fallback image */}
      {/* <Hero /> */}

      <main>
        {data.strapiAbout ?
          <Markdown components={{
            p: ({ node, ...props }) => (
              <div className="react-markdown" {...props} />
            )
          }}
          >
            {data.strapiAbout.description.data.description}
          </Markdown>
          : null
        }
      </main >

      <Footer />

    </>
  )
}

export default AboutPage

export const Head = ({ data }: AboutPageTypes) => {
  return (
    <SEO
      description={data.strapiAbout.slogan}
    >
      <Script type="application /ld + json">
        {
          `
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About ",
          }
        `}
      </Script >
    </SEO >
  )
}

export const data = graphql`
  query AboutQuery {
    strapiAbout {
      description {
        data {
          description
        }
      }
      slogan
    }
  }
`;