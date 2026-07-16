// TODO: remove the testing code

import * as React from "react"
import { graphql, Link } from "gatsby"

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import type { IGatsbyImageData } from "gatsby-plugin-image";

type NotFoundPageTypes = {
  location: {
    pathname: string;
  }
  data: {
    strapiError: {
      title: string;
      pun: string;
      return: string;
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
    }
    strapiAbout: {
      url: string;
    }
  }
}
const NotFoundPage = ({ data, location }: NotFoundPageTypes) => {

  // this is using the hero
  const siteUrl = data.strapiAbout.url
  const imageSources = data.strapiError.hero.localFile.childImageSharp.gatsbyImageData.images.sources
  if (!imageSources || imageSources.length === 0) {
    throw new Error("Expected gatsbyImageData.images.sources to be defined with at least one entry")
  }

  const largestImageFromSrcSet = imageSources[0].srcSet
    .split(",")
    .at(-1)
    ?.trim()
    ?.split(" ")[0]
  const mediaPath = largestImageFromSrcSet
  if (!mediaPath) {
    throw new Error("Expected a valid srcSet image URL for Pinterest media")
  }

  const mediaUrl = new URL(mediaPath, `${siteUrl}/`).toString()
  console.log(mediaUrl)
  const pinterestHref = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(mediaUrl)}`

  const pinterestLogUrls = [
    "https://www.pinterest.com/pin/1/",
    "https://www.pinterest.com/pin/2/",
  ]

  const logPinterestEntry = async (image: string) => {
    const response = await fetch("/.netlify/functions/log-variable", {
      method: "POST",
      body: JSON.stringify({ date: new Date().toISOString(), image }),
    })

    if (response.ok) {
      console.log("Pinterest entry logged successfully")
    } else {
      console.error("Failed to log Pinterest entry")
    }
  }

  return (
    <React.Fragment>
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

      {/* // TODO: Pinterest button */}
      <a
        href={pinterestHref}
        data-pin-do="buttonBookmark"
        data-pin-shape="round"
      >
        svg
      </a>
      {pinterestLogUrls.map((image, index) => (
        <button
          key={image}
          type="button"
          onClick={() => {
            void logPinterestEntry(image)
          }}
        >
          {`Log ${index + 1}`}
        </button>
      ))}


      <button
        key={3}
        type="button"
        onClick={() => {
          void logPinterestEntry("https://www.pinterest.com/pin/3/")
        }}
      >
        {`Log 3`}
      </button>

      {/* // * both log and actually do the pin */}
      {/* // * needs target _blank to give it time to render */}
      <a
        href={pinterestHref}
        data-pin-do="buttonBookmark"
        data-pin-shape="round"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          void logPinterestEntry("https://www.pinterest.com/pin/3/")
        }}
      >
        🍔
      </a>

      {/* ------------------------------------ */}

      <a
        data-pin-do="buttonPin"
        href="https://www.pinterest.com/pin/create/button/?url=http://www.foodiecrush.com/2014/03/filet-mignon-with-porcini-mushroom-compound-butter/&media=https://i.pinimg.com/736x/17/34/8e/17348e163a3212c06e61c41c4b22b87a.jpg&description=So%20delicious!"
        data-pin-shape="round"
      >
        hello
      </a>
    </React.Fragment>
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