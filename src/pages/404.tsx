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
      hero: HeroSEOImageType;
    }
  }
}
const NotFoundPage = ({ data, location }: NotFoundPageTypes) => {

  console.log(data.strapiError.hero);
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
    </>
  )
}

export default NotFoundPage

export const Head = ({ data, location }: NotFoundPageTypes) => {
  return (
    <SEO
      title={`404 - ${location.pathname}`}
      description={data.strapiError.title}
      image={data.strapiError.hero}
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
  }
`