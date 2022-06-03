// this queries more than netlify likes but its hiding a lot its testing if it loads slower than residential
// it seems totally fine but keep an eye on it

// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
// https://www.erichowey.dev/writing/load-more-button-and-infinite-scroll-in-gatsby/

import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import ResidentialProjects from "../components/residential-projects";

export function Residential() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-1-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="residential_image"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function Wreath() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-4-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="wreath_image"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function SnowyRoof() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-3-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="snowyroof"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

const ResidentialPage = () => {

  const data = useStaticQuery(graphql`
    query ResidentialQuery {
      allStrapiLight(filter: {residentialchristmas: {eq: true}}) {
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

  let allResidentialLights = data.allStrapiLight.nodes
  console.log(allResidentialLights);

  // State for the list
  const [list, setList] = useState([...allResidentialLights.slice(0, 3)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allResidentialLights.length > 3)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allResidentialLights.length
      const nextResults = isMore
        ? allResidentialLights.slice(currentLength, currentLength + 3)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allResidentialLights.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line */

  return (
    <>
      <Seo
        title="Residential Christmas Lights and Decorations"
        description="Sierra Lighting installs Christmas lights on homes in Reno, Truckee, and Tahoe.
        We are full service from design to takedown."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/residential-og-sierra_lighting.jpg"
      />
      <Header />
      <main>

        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Residential</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
          <hr />
        </div>

        <div className="measure">
          <h2 className="crest">Christmas Lights Near Me:</h2>
          <h1 className="mixta">Residential Christmas Lights and Decor</h1>
          <p>It&#39;s the most wonderful time of the year, Christmas, when feelings of joy, love, and giving shine through. Allow Sierra Lighting to further enhance these feelings, and add even more Christmas cheer. Imagine your family gathered around the tree, while your home sparkles and beckons from outside. We are here to help you make the most of this special time of year, while removing any stress of decorating from it.</p>
        </div>
        <div className="triple">
          <Residential />
          <Wreath />
          <SnowyRoof />
        </div>

        <div className="measure">
          <hr />
          {/* // TODO after here is sort of the same as commercial */}
          <h2>Display Consulting and Planning</h2>

          <p>Whether you&#39;d like a simple spruce decorated with beautiful C9 bulbs floating in space, or the whole enchilada, with rooflines, trees, stake lighting, snowflakes, orbs, wreaths, garlands, bows, and figurines, our professional lighting designers will make it happen.  After you contact us with your vision, we will head to your home to discuss the logistics, options, and costs. With a budget in hand, you can make the decision as to what works best for your tastes. We aim to please and wow.</p>

          <hr />
          <h3>Christmas Light Install</h3>

          <p>Sierra Lighting is your full service, hassle free lighting solution.  We send our crew of talented lighting technicians to your home for installation.  They will take your vision and turn it into reality using the highest grade commercial LED materials.  Our displays are custom fit to your home, ensuring a seamless, elegant look with no extra bulbs and line cluttering up the visual spectacle. Additionally, the materials we use are super efficient and durable, for a long life and minimal power bill. You no longer have to worry about tipsy ladders, leaning over rooflines, untangling lights and dealing with strands that are out. Relax and enjoy while our crew takes the danger and hassle out of holiday lighting.</p>
          <hr />
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
          <h5 className="range"><Link to="/lights/residential-christmas-lights" className="link--subtle">View all other Residenital Christmas lights</Link></h5>
          <hr />
          <h3>Full Season Maintenance and Support</h3>

          <p>Once the lights are up, we are only half done.  We want you to be able to count on a brilliant holiday display all season long.  Should anything happen, our techs are just a quick phone call, email, or text away. Sierra Lighting has maintenance crews on call in both Reno and Tahoe Truckee to ensure prompt service should something go wrong.</p>

          <hr />
          <h3>Worry Free Takedown and Storage</h3>

          <p>After the holidays are over, we will be by in the first two weeks of January for takedown.  We affix your display using techniques that cause zero damage to your home, so it will look just as beautiful once the lights comes down.  After cleanup is complete, allow us to store your display. With Sierra Lighting, you no longer have to take up valuable space in you home 10 months of the year, or worry about losing your display.  We store if for you in our secure facility, free of charge. We&#39;ll be in touch next fall for another magical season.</p>
        </div>
      </main>

      <ResidentialProjects />

      <Footer />
    </>
  )
}

export default ResidentialPage
