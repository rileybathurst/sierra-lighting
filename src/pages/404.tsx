import * as React from "react"
import { graphql, Link } from "gatsby"

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import type { HeroSEOImageType } from "../types/hero-seo-image-type";

type NotFoundPageTypes = {
  location: {
    pathname: string;
  }
  data: {
    strapiError: {
      title: string;
      pun: string;
      return: string;
      // hero: HeroSEOImageType;
      hero: {
        url: string;
        alternativeText: string;
        caption: string;
        localFile: {
          absolutePath: string;
          childImageSharp: {
            gatsbyImageData: {
              images: {
                sources: {
                  srcSet: string;
                }[];
              };
            };
            resize: {
              aspectRatio: number;
            };
          };
          url: string;
        };
      };
    }
    strapiAbout: {
      url: string;
    }
  }
}
const NotFoundPage = ({ data, location }: NotFoundPageTypes) => {

  // console.log(data.strapiError.hero);
  // console.log(data.strapiError.hero.localFile?.childImageSharp?.gatsbyImageData.images.sources[0]);
  // console.log(data.strapiError.hero.localFile?.childImageSharp?.gatsbyImageData.images.sources[0].srcSet);
  // console.log(data.strapiError.hero.localFile?.childImageSharp?.gatsbyImageData.images.sources[0].srcSet.split(" ")[0]);
  // console.log(data.strapiError.hero.localFile?.childImageSharp?.gatsbyImageData.images.sources[0].srcSet.split(",").at(-1).trim());
  // console.log(data.strapiError.hero.localFile?.childImageSharp?.gatsbyImageData.images.sources[0].srcSet.split(",").at(-1).trim()?.split(" ")[0]);
  // console.log(`https://sierra.lighting${data.strapiError.hero.localFile?.childImageSharp?.gatsbyImageData.images.sources[0].srcSet.split(",").at(-1).trim()?.split(" ")[0]}`);

  return (
    <>
      <Header />

      <Hero
        image={data.strapiError.hero}
      />

      <main>
        <h2>404 - {location.pathname}</h2>
        <h1>{data.strapiError.title}</h1>
        <p>{data.strapiError.pun} - <Link to="/">{data.strapiError.return}</Link></p>
      </main >
      <Footer />

      <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-media={`${data.strapiAbout.url}${data.strapiError.hero.localFile?.childImageSharp?.gatsbyImageData?.images?.sources?.[0]?.srcSet?.split(",").at(-1)?.trim()?.split(" ")?.[0] || ""}`}>🦄</a>
    </>
  )
}

export default NotFoundPage

export const Head = ({ data, location }: NotFoundPageTypes) => {
  return (
    <SEO
      title={`404 - ${location.pathname} `}
      description={data.strapiError.title}
      // image={data.strapiError.hero}
      url="404"
    />
  )
}

// TODO: testing
export const query = graphql`
  query errorPage {
    strapiError {
    title
    pun
    return
      hero {
      url
        localFile {
        absolutePath
          childImageSharp {
          gatsbyImageData
            resize {
            aspectRatio
          }
        }
        url
      }
      alternativeText
      caption
    }
  }

  strapiAbout {
    url
  }
}
`