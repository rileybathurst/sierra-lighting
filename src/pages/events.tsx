import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import RSL from "../images/rsl";
import AerilDance from "../images/aerildance";
import BistroLights from "../images/bistro-lights";

const EventsPage = () => {

  // TODO: this uses the newer useStaticQuery so reference this for future queries
  const { allStrapiVenue } = useStaticQuery(graphql`
    query EventsQuery {
      allStrapiVenue(filter: {uses: {eq: "non-wedding"}}) {
        nodes {
          id
          name
          slug
          excerpt
          venueImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo
        title="Events | Sierra Lighting"
        description="Sierra Lighting installs Christmas lights on homes in Reno, Truckee, and Tahoe.
        We are full service from design to takedown." // TODO
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/aeril-dance-party-og_image.jpg"
      />
      <Header />
      <main>

        <div className="measure">
          {/* // TODO: this needs space above it */}
          <h2 className="crest">Non-wedding</h2>
          <h1 className="mixta">Events</h1>
          <p>Whether it's an anniversary, birthday party, or any other special event, we have you covered.</p>
          <h2>Display Consulting and Planning</h2>
        </div>
        <div className="triple">
          <BistroLights />
          <RSL />
          <AerilDance />
        </div>

        <hr className="measure" />

      </main>

      <section className="measure">
        <h3>Venues</h3>
        <ul className="deck">
          {allStrapiVenue.nodes.map((venue:
            {
              id: string;
            }) => (
            <div key={venue.id}>
              <Card card={venue} breadcrumb="venue" />
            </div>
          ))
          }
        </ul>
      </section>
      <Footer />

    </>
  )
}

export default EventsPage
