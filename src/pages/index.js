import * as React from "react"
import { StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Star from "../images/star";

import "../styles/app.scss";

export function Village() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Rancharrah-13-web-tagged.jpg"
    alt="christmas lighting display at the village at rancharrah"
    className="village" />
}

export function NorthTahoeArts() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Arts-3-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Arts gift shop and gallery"
    className="northtahoearts" />
}

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}

export function InclineChevron() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Incline-7-web-tagged.jpg"
    alt="christmas tree in Incline village nevada"
    className="inclinechevron" />
}

export function SnowyRoof() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Lakeshore_View-3-web-tagged.jpg"
    alt="christmas lights display on an entrance with a snowy roof in Incline village nevada"
    className="snowyroof" />
}


// markup
const IndexPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <div className="village-container">
        <Village />
      </div>
      <main>

        <section id="trusted" className="trusted">
          <hr />{/* this should be down */}
          <h3>Trusted and local</h3>
          <p>Sierra Christmas Lights is here to provide beautiful, hassle free holiday and event lighting for your residence or business. We specialize in outdoor Christmas and wedding lights installation, taking pride in the quality, commercial grade materials we sell and maintain for our customers. Let us help make your next holiday or event really shine!</p>
        </section>

        <section id="service-area" className="service-area">
          <hr />
          <h3>Service Area</h3>
          <h4>Reno, Truckee, Lake Tahoe, Carson City and Minden</h4>
          <button>
            <span>California</span>
            <span>Nevada</span>
            <span>+</span>
          </button>
        </section>

        <div className="home-gallery">
          <NorthTahoeArts />
          <NorthTahoeEvents />
          <InclineChevron />
        </div>

        <section id="services" className="services">
          <hr />
          {/* 📣? I need to think about the H levels here */}
          <h3>Services</h3>
          <h4>Locally owned and Fully Insured</h4>
          <h5>Professional Experience</h5>
          <hr />
          <h4>Efficient LEDs, House Safe Install</h4>
          <h5>Quality Materials</h5>
          <hr />
          <h4>Installation, Repair &amp; Removal</h4>
          <h5>Hassle Free</h5>
          <hr />
          <h4>Repairs Free of Charge</h4>
          <h5>Guaranteed Upkeep</h5>
        </section>

        <div className="snowyroof-container">
          <SnowyRoof />
        </div>

        <section id="slider" className="testimonials">
          <h2>Testimonials</h2>


          <ul>
            <StaticQuery
              query={query}
              render={data => (
                <li className="slider">
                  <div className="five-stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  {data.allStrapiTestimonials.edges[0].node.data.map(testimonial => (
                    <li key={testimonial.id}>{testimonial.attributes.customer}</li>
                  ))}
                </li>
              )}
            />
          </ul>
        </section>

        <section id="contact" className="contact">
          Profiles
          <ul>
            <li><a href="https://www.facebook.com/sierralighting/">facebook</a></li>
            <li><a href="https://www.instagram.com/sierralighting/">instagram</a></li>
            <li><a href="https://www.pinterest.com/sierralighting/">pinterest</a></li>
            <li><a href="https://www.tiktok.com/@sierralighting">tiktok</a></li>
            <li><a href="https://www.linkedin.com/company/sierralighting/">linkedin</a></li>
            <li><a href="https://www.yelp.com/biz/sierra-lighting-calpine/">Yelp</a></li>
            <li><a href="https://nextdoor.com/pages/sierra-lighting-truckee-ca/recommend/">Nextdoor</a></li>
          </ul>
        </section>

      </main>
    </>
  )
}

export default IndexPage

const query = graphql`
      query MyQuery {
        allStrapiTestimonials {
        edges {
        node {
        data {
        id
          attributes {
            customer
          }
        }
      }
    }
  }
}
`;
