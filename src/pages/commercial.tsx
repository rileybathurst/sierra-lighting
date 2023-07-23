import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import CommercialProjects from "../components/commercial-projects";
import NorthTahoeEvents from "../images/northtahoeevents";
import InclineChevron from "../images/inclinechevron";
import SnowyRoof from "../images/snowyroof";

import Card from "../components/card";

const CommercialPage = () => {

  const data = useStaticQuery(graphql`
    query CommercialQuery {
      allStrapiLight
      # (filter: {services: {eq: "commercialchristmas"}})
      {
        nodes {
          id
          name
          byline
          description
          excerpt
          slug
          
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  breakpoints: [111, 165, 222, 444, 880]
                  width: 222
                )
              }
            }
            alternativeText
          }
        }
      }
    }
  `)

  const more = { data }

  let allCommercialLights = data.allStrapiLight.nodes

  // State for the list
  const [list, setList] = useState([...allCommercialLights.slice(0, 3)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allCommercialLights.length > 3)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allCommercialLights.length
      const nextResults = isMore
        ? allCommercialLights.slice(currentLength, currentLength + 3)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allCommercialLights.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line */

  return (
    <>

      <Seo
        title="Commercial Christmas Lights &amp; Decor"
        description="We have LED lights, wreaths, garland, and decor to make your business shine.
        Sierra Lighting is your dependable decorating partner."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/commercial-og-sierra_lighting.jpg"
      />
      <Header />

      <main>

        <div className="measure">

          <h2 className="crest">Christmas Lights For Business:</h2>
          <h1 className="range">Commercial Christmas Lights &amp; Decor</h1>

          <p>Allow us to help your business spread holiday cheer this season. There is a strong sense of goodwill and community during Christmas, and our lighting displays can help enhance those feelings. For many businesses in Reno, Truckee, and Tahoe, Christmastime is THE most important period of the year. An investment in a beautiful lighting display will help your business stand out from the rest and enhance your bottom line during this busy season for years to come. We can install lights on shopping centers, office buildings, restaurants, municipal buildings, medical facilities, HOA's, schools, car dealerships, and casinos. We also do commercial accent lighting year round. Please check out our patio lights page for more information.</p>
        </div>
        <div className="triple">
          <NorthTahoeEvents />
          <InclineChevron />
          <SnowyRoof />
        </div>

        <div className="measure">
          <hr />
          {/* TODO after here is sort of the same as commercial */}
          <h2>Display Consulting and Planning</h2>

          <p>We strive to accommodate customers at any point in the season. After the initial communication, Sierra Lighting will send one of our designers to your site. Our goal is to learn about your vision, budget, and preferences. Our professional lighting designer will provide you with a clear plan for your project with a comprehensive budget, renderings, examples of similar past work, and options to fit your tastes. We have a host of LED lighting options, wreaths, garlands, indoor and exterior decor, trees, and snowflakes to make your business shine. When you hire Sierra Lighting, you get a dependable partner so you can focus on your business. We take care of the rest!</p>
          <hr />
          <h3>Christmas Light Install</h3>

          <p>Our goal is to make certain your property shines for that holiday party, concert, sale, or event. Please specify the date you would like install finished and we will do our absolute best to make it happen. We send out a crew of highly experienced technicians to complete installation at the time that works for you. We will create an elegant holiday display that woos your customers, increases traffic and visibility to your locale, and enhances your profits.</p>
          <hr />
          <h2>Full Season Maintenance and Support</h2>

          <p>Christmas is such a busy time of year for any business owner.  Take holiday lighting off your to do list today by hiring the team at Sierra Lighting. We source the highest quality LED lights and displays, and exclusively use custom commercial grade materials to ensure the reliability and beauty of your display. Should there be an issue, we are just a call, text, or email away. Timely fixes are our priority. We have service teams on call located in both Truckee / Tahoe and Reno to ensure prompt service if something goes wrong.</p>

          <hr />
          <h3 className="crest">Bringing the shine</h3>
          <h2 className="ridge mixta">Lighting Styles</h2>
        </div>

        <div className="deck">

          {list.map((light) => (
            <div key={light.id}>
              <Card
                card={light}
                breadcrumb="light"
              />
            </div>
          ))}
        </div>
        <div className="measure__extend">
          {hasMore ? (
            <>
              <button onClick={handleLoadMore} className='button--left-align'>Load More</button>&nbsp;&nbsp;<span className="crest">Even More?</span>
            </>
          ) : (
            <p>No more results</p>
          )}
        </div>

        <div className="measure">
          <hr />
          <h2>Worry Free Takedown and Storage</h2>

          <p>After the holidays are over, we remove your display during the first two weeks of January. Our goal is to work around your customers&rsquo; needs and integrate seamlessly into your business, creating the minimum presence possible. Allow us to store your holiday display until next season in our secure facility. We&rsquo;d like to minimize the chance your display gets damaged or lost by ensuring proper storage for the remainder of the year. We&rsquo;ll be in touch next fall for another beautiful, worry free, profitable Christmas season.</p>
        </div>
      </main>

      <CommercialProjects />

      <Footer />

    </>
  )
}

export default CommercialPage
