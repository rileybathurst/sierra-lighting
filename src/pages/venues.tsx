import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { CardType } from "../types/card";

const VenuePage = () => {

  const data = useStaticQuery(graphql`
    query VenuesQuery {
      southlake: allStrapiVenue(filter: {area: {slug: {eq: "southlake"}}}) {
        nodes {
          ...venueCard
        }
      }
      
      reno: allStrapiVenue(filter: {area: {slug: {eq: "reno"}}}) {
        nodes {
          ...venueCard
        }
      }
      
      incline: allStrapiVenue(filter: {area: {slug: {eq: "incline"}}}) {
        nodes {
          ...venueCard
        }
      }
      
      truckee: allStrapiVenue(filter: {area: {slug: {eq: "truckee"}}}) {
        nodes {
          ...venueCard
        }
      }
      
      olympic: allStrapiVenue(filter: {area: {slug: {eq: "olympic"}}}) {
        nodes {
          ...venueCard
        }
      }
      
      donner: allStrapiVenue(filter: {area: {slug: {eq: "donner"}}}) {
        nodes {
          ...venueCard
        }
      }
      


    }
  `)

  // TODO: stateline is a heavyhanded way until I do other uses on venues

  let southlake = data.southlake
  let reno = data.reno
  let incline = data.incline
  let truckee = data.truckee
  let olympic = data.olympic
  let donner = data.donner
  // let stateline = data.stateline
  // let tahoma = data.tahoma I broke something put it in
  // let minden = data.minden
  // let other = data.other

  return (
    <>
      <Seo
        title="Venues | Sierra Lighting"
        description="The natural beauty of the Lake Tahoe area makes the perfect backdrop for a wedding. Check out these Tahoe wedding venues that range from rustic to glamorous."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      />
      <Header />

      <main className="venues__page">

        <div className="measure">

          <h2 className="crest">Where to be</h2>
          <h1 className="mixta">Wedding Venues</h1>
        </div>

        {/* // TODO: query the areas, byline, slug, state etc */}
        <div id="South-Lake" className="measure">
          <hr />
          {/* // I dont think its worth querying for these */}
          <h4 className="crest">National Treasure</h4>
          <h3 className="range">
            <Link to="/area/southlake" className="link--subtle">South Lake Tahoe, NV.</Link>
          </h3>
        </div>

        <div className="deck">
          {southlake.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
        </div>

        <div id="Reno" className="measure">
          <hr />
          <h4 className="crest">The Biggest Little City</h4>
          <h3 className="range">
            <Link to='/area/reno' className="link--subtle">Reno, NV.</Link>
          </h3>
        </div>

        <div className="deck">
          {reno.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
        </div>

        <div id="Incline-Village" className="measure">
          <hr />
          <h3 className='range'>
            <Link to='/area/incline' className="link--subtle">
              Incline Village, NV.
            </Link>
          </h3>
        </div>

        <div className="deck">
          {incline.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
        </div>

        <div id="truckee" className="measure">
          <hr />
          <h4 className="crest">A base camp for a big life</h4>
          <h3 className="range">
            <Link to="/area/truckee" className="link--subtle">Truckee, CA.</Link>
          </h3>
        </div>

        <div className="deck">
          {truckee.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
        </div>

        <div id="olympic-valley" className="measure">
          <hr />
          <h3 className="range">
            <Link to="/area/olympic" className="link--subtle">Olympic Valley, CA.</Link>
          </h3>
        </div>

        <div className="deck">
          {olympic.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
        </div>

        <div id="donner-summit" className="measure">
          <hr />
          <h3 className="range">
            <Link to="/area/donner" className="link--subtle">Donner Summit, CA.</Link></h3>
        </div>

        <div className="deck">
          {donner.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
        </div>

        <div id="stateline" className="measure">
          <hr />
          <h3 className="range">
            <Link to="/area/stateline" className="link--subtle">
              Stateline, NV.
            </Link>
          </h3>
        </div>

        {/*         <div className="deck">
          {stateline.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
        </div> */}

        <div id="tahoma" className="measure">
          <hr />
          {/* <h4 className="crest">// TODO</h4> */}
          <h3 className="range">
            <Link to="/area/tahoma" className="link--subtle">
              Tahoma and West Shore, CA.
            </Link>
          </h3>
        </div>

        {/* <div className="deck">
          {tahoma.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
          </div> */}

        <div id="minden" className="measure">
          <hr />
          {/* <h4 className="crest">// TODO</h4> */}
          <h3 className="range">
            <Link to="/area/minden" className="link--subtle">
              Minden, NV.
            </Link>
          </h3>
        </div>

        {/*         <div className="deck">
          {minden.nodes.map((venue: CardType) => (
            <div id={venue.id}>
              <Card card={venue} />
            </div>
          ))}
        </div> */}

        {/* // TODO: Other including throw a console log for other so I can clean it up */}

      </main >

      <Footer />

    </>
  )
}

export default VenuePage
