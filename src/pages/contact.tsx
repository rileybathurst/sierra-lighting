// TODO: I can query the og image by season
import * as React from "react"
import { useStaticQuery, graphql, type GetServerData } from "gatsby";
import Markdown from "react-markdown";
import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

/*------------------------------------*/

type GoogleReviewsServerData = {
  reviewCount: number | null;
  starRating: number | null;
  lastUpdated: string | null;
  error: string | null;
};

type ContactPageProps = {
  serverData: GoogleReviewsServerData;
};

export const getServerData: GetServerData<GoogleReviewsServerData> = async () => {
  const placeId = "ChIJKUUETZhHmYARR--Ow646_BU";
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.GATSBY_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return {
      props: {
        reviewCount: null,
        starRating: null,
        lastUpdated: null,
        error: "Missing GOOGLE_MAPS_API_KEY",
      },
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    };
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${apiKey}`,
    );

    if (!response.ok) {
      throw new Error(`Google Places request failed: ${response.status}`);
    }

    const data = (await response.json()) as {
      userRatingCount?: number;
      rating?: number;
    };

    return {
      props: {
        reviewCount: data.userRatingCount ?? null,
        starRating: data.rating ?? null,
        lastUpdated: new Date().toISOString(),
        error: null,
      },
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    };
  } catch (error) {
    return {
      props: {
        reviewCount: null,
        starRating: null,
        lastUpdated: null,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    };
  }
};

/*------------------------------------*/


const ContactPage = ({ serverData }: ContactPageProps) => {
  const reviewText =
    serverData.reviewCount !== null ? `${serverData.reviewCount} reviews` : "Reviews unavailable";
  const ratingText =
    serverData.starRating !== null ? `${serverData.starRating} / 5 stars` : "Rating unavailable";

  const { strapiAbout } = useStaticQuery(graphql`
    query ContactQuery {
      strapiAbout {
        description {
          data {
            description
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="react-markdown">
          <Markdown>
            {strapiAbout.description.data.description}
          </Markdown>
          <p>Google Reviews: {reviewText}</p>
          <p>Google Rating: {ratingText}</p>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default ContactPage


export const Head = () => {
  return (
    <SEO
      title='Contact'
      // TODO: strapi query
      description="Contact Sierra Lighting for a free estimate. We offer full service christmas, wedding, and event lighting packages to meet any budget."
      // TODO:
      // image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/contact-og-sierra_lighting.jpg"
      url="contact"
    />
  )
}