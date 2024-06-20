import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo";


import Header from "../components/header";
import Footer from "../components/footer";

const WorkPage = () => {

  const { strapiImageGrab } = useStaticQuery(graphql`
    query strapiImageGrabWork {
      strapiImageGrab(title: {eq: "Work"}) {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />

      <div className="poster">
        <GatsbyImage
          image={strapiImageGrab.image.localFile.childImageSharp.gatsbyImageData}
          alt={strapiImageGrab.title}
        />
      </div>

      <main className="stork">

        <h2 className="crest">Hiring Now</h2>
        <h1 className="range">Jobs</h1>
        <hr />

        <div itemScope itemType="https://schema.org/JobPosting">
          <h2 itemProp="title">Lights Installer</h2>
          <p><strong>Location: </strong>
            <span itemProp="jobLocation" itemScope itemType="https://schema.org/Place">
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Truckee</span>, <span itemProp="addressRegion">CA</span>
              </span>
            </span>
          </p>

          {/* // TODO move to strapi */}
          {/* // TODO SEO */}
          <ul>
            <li key="earn">Earn $9,000 - $13,000 in ten weeks work</li>
            <li key="bonus">Hourly + bonus incentive program</li>
            <li key="trade">Learn a new trade, work outside</li>
            <li key="heights">have fun at heights with a great team</li>
            <li key="housing">Housing / vehicle dwelling possible</li >
          </ul >

          <p>Locally owned and operated in Truckee, Tahoe and Reno. We are in need of reliable, hardworking employees to install wedding and Christmas lights.</p>
          <p>Full time Oct - Jan with holidays off. Can start earlier if desired.</p>

          <h3>↓ Contact us below ↓</h3>
        </div>
      </main >

      <Footer />

    </>
  )
}

export default WorkPage

export const Head = () => {
  return (
    <SEO
      title={`Work`}
      // TODO description and info
      // TODO I have a new image for this
      image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
      url="work"
    />
  )
}
