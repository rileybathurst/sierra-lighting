import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

export function RSL() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/events/sierra_lighting-rsl-outdoor_lighting.jpg"
    alt="bistro lights display on an entrance in reno nevada"
    className="RSL_image"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function RancheroTree() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/events/sierra_lighting-rancherro_tree-outdoor.jpg"
    alt="christmas lights display on a tree in Reno nevada"
    className="RancheroTree"
    breakpoints={[300, 600, 900]}
    width={300}
  />
}

export function BistroLights() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/wedding/sierra_lighting-bistro_lights.jpg"
    alt="sierra lighting bistro lights"
    className=""
    breakpoints={[300, 600, 900]}
    width={650}
  />
}


const EventsPage = () => {
  return (
    <>
      <Seo
        title="Events | Sierra Lighting"
        description="Sierra Lighting installs Christmas lights on homes in Reno, Truckee, and Tahoe.
        We are full service from design to takedown." // TODO
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/og_image-sierra_lighting-bistro_lights.jpg"
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
              <span itemProp="name">Events</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
          <hr />
        </div>

        <div className="measure">
          <h2 className="crest">Non-wedding</h2>
          <h1 className="mixta">Events</h1>
          <p>Whether it's an anniversary, birthday party, or any other special event, we have you covered.</p>
        </div>
        <div className="triple">
          <BistroLights />
          <RSL />
          <RancheroTree />
        </div>

        <div className="measure">
          <hr />
          <h2>Display Consulting and Planning</h2>

        </div>

      </main>
      <Footer />

    </>
  )
}

export default EventsPage

/* const query = graphql`
query ResidentialLightQuery {
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
            gatsbyImageData
          }
        }
        alternativeText
      }
    }
  }
}
` */
