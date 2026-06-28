// TODO: I can query the og image by season
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Markdown from "react-markdown";
import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

/*------------------------------------*/

// TODO: Working

const testEnvValue = process.env.GATSBY_TEST || "(GATSBY_TEST is not set)";
console.log(`Test env value: ${testEnvValue}`);

console.log(`https://places.googleapis.com/v1/places/XMZ412G?fields=rating,userRatingsTotal&key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`)

const placeId = 'XMZ412G';
const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;
const url = `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingsTotal&key=${apiKey}`;

async function fetchGoogleReviews() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const reviewCount = data.userRatingsTotal;
    const starRating = data.rating;

    console.log(`Google Reviews: ${reviewCount} reviews, ${starRating} stars`);

    // Update your website's HTML elements
    // document.getElementById('google-count').innerText = `${reviewCount} reviews`;
    // document.getElementById('google-stars').innerText = `${starRating} / 5 Stars`;
  } catch (error) {
    console.error('Error fetching Google Places data:', error);
  }
}

// yeah this doesnt worn on gatsby
// Run the function when the page loads
// window.onload = fetchGoogleReviews;

/*------------------------------------*/


const ContactPage = () => {

  fetchGoogleReviews();

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
      <main data-has-google-maps-key={String(Boolean(process.env.GATSBY_GOOGLE_MAPS_API_KEY))}>
        <div className="react-markdown">
          <Markdown>
            {strapiAbout.description.data.description}
          </Markdown>
          <p>Test env: {testEnvValue}</p>
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