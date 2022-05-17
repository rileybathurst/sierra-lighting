import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import WeddingProjects from "../components/wedding-projects";
import Logistics from "../components/logistics";

export function BistroLights() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-bistro_lights.jpg"
    alt="sierra lighting bistro lights"
    className=""
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function OutdoorWedding() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-outdoor_wedding.jpg"
    alt="sierra lighting lake tahoe outdoor wedding"
    className=""
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function WeddingBlueHour() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-wedding_blue_hour.jpg"
    alt="sierra lighting setup the outdoor lights over a wedding party"
    className="snowyroof"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}


const WeddingPage = () => {

  const data = useStaticQuery(graphql`
    query WeddingPageQuery {
      allStrapiLight(filter: {wedding: {eq: true}}) {
        nodes {
          id
          name
          byline
          description
          excerpt
          slug
          outdoor
          
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
  console.log(more);

  let allWeddingLights = data.allStrapiLight.nodes
  console.log(allWeddingLights);

  // State for the list
  const [list, setList] = useState([...allWeddingLights.slice(0, 3)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allWeddingLights.length > 3)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allWeddingLights.length
      const nextResults = isMore
        ? allWeddingLights.slice(currentLength, currentLength + 3)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allWeddingLights.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line */

  return (
    <>
      <Seo
        title="Wedding Lighting | Sierra Lighting"
        description="When you're looking for custom, elegant, one of a kind ambiance for your wedding,
        look no further than Sierra Lighting."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/wedding-og-sierra_lighting.jpg"
      />

      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;&nbsp;/&nbsp;&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Wedding</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main>

        <div className="measure">

          <h1>Wedding Lighting</h1>

          <p>Whether it's a wedding or rehearsal dinner we have you covered.</p>

          <p>Sierra Lighting will provide the perfect ambiance and eliminate stressful hassles. Unlike the big rental companies, lights are all we do! We create beautiful custom displays that are far beyond the standard light sets others offer. We also have significantly lower minimums. Sierra Lighting will meet and exceed your expectations.</p>
        </div>
        <div className="triple">
          <BistroLights />
          <OutdoorWedding />
          <WeddingBlueHour />
        </div>

        <Logistics />

        <div className="measure">

          <h3 className="crest">Bringing the shine</h3>
          <h2 className="ridge mixta">Lighting Styles</h2>
        </div>

        <div className="deck">
          {list.map((light) => (
            <div key={light.id} className="card">
              <GatsbyImage
                image={
                  light?.image?.localFile?.childImageSharp
                    ?.gatsbyImageData
                }
                alt={light.venueImage?.alternativeText}
                className=""
              />
              <div className="paper"></div>
              <div className="content">
                <hr />
                <h3 className="crest">{light.byline}</h3>
                <h2 className="mixta"><Link to={`/light/${light.slug}`}>{light.name}</Link></h2>
                <p className="description">{light.excerpt}</p>
                <p>{light.outdoor}</p>
              </div>
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
          <h5 className="range"><Link to="/lights" className="link--subtle">View all other lights</Link></h5>
          <hr />
          <h3>Have something particular in mind? Just ask!</h3>

          <hr />
        </div>
        <div className="measure" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          <h3>Wedding Services</h3>
          <p itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">The natural beauty of the Reno Tahoe area make the perfect backdrop for a wedding. Our custom lighting design enhances your decor and the architectural / landscape features of your venue. Wether your aiming for a low key affair or a luxurious event, we work with you to create the perfect mood.</p>

          <p>Check out our list of wedding lighting services and some of our favorite <Link to="/venues">Tahoe wedding venues</Link>.</p>

          <hr />

          <h3>Have you ever noticed how much lighting can affect the feeling of space?</h3>

          <p>Compare the warm glow of candle light to the blue glare of a fluorescent office and it's clear lighting has a big impact. A professional lighting design package will highlight your decor and bring out the beauty of your venue. Well planned lighting is one of the most affordable ways to truly make your special day shine.</p>

          <p>Your <Link to="/venues">venue</Link>, decor, flowers, cake and photographer are all big investments. Make the most of them with the right lighting design and these elements will shine even brighter.</p>

          <p>Sierra Lighting approaches every event from a photographic standpoint. Your pictures last forever and we want to be certain they look their best. We communicate with your event designer, planner, florist, photographer, and videographer ahead of your wedding. Once we understand the focal points of an event, we can create a lighting scheme that will best accentuate those details. We look at the big picture of an event. When the photographer takes a picture across the room of the couple dancing, they should be lit, along with the centerpieces, the band, and the wall in the back, to highlight all the important focal points of your event.</p>

          <p>We exclusively use modern LED technology, wireless and battery powered where possible. With wireless LEDs, we are eliminating fire risks from traditional technology, reducing tripping hazards and clutter in your photos. We use modern RGB technology to create the perfect lighting effects to highlight your decor and create the ideal mood for your big day. For example, ambers / warm whites add a flattering and romantic glow while deep purple / blue can amp up guests for the dance party portion of the night. You can choose a unified color scheme, select a palette of complimentary colors or even plan changes throughout your event.</p>
        </div>
      </main>

      <WeddingProjects />

      <Footer />
    </>
  )
}

export default WeddingPage
