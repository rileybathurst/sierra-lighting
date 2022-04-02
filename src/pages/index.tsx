import * as React from "react"
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/app.scss";
import AreaAccordian from "../components/area-accordian";
import TestimonialList from "../components/testimonial-list";

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
    className="snowyroof poster" />
}



const IndexPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main>

        <div className="hero-container">
          <section className="hero">
            <h2 className="mixta">Dependable holiday, landscape and events light installation</h2>

            <div className="village-container">
              <Link to="/project/rancharrah"><Village />
                <p>The Village at Rancharrah See the Project</p>
              </Link>
            </div>

            <section id="trusted" className="trusted">
              <hr />{/* ? should this be down below the h tag */}
              <h3>Trusted and local</h3>
              <p>Sierra Christmas Lights is here to provide beautiful, hassle free holiday and event lighting for your residence or business. We specialize in outdoor Christmas and wedding lights installation, taking pride in the quality, commercial grade materials we sell and maintain for our customers. Let us help make your next holiday or event really shine!</p>
            </section>
          </section>
        </div>


        <div className="areas-and-gallery-container">
          <div className="areas-and-gallery">
            <section id="service-area" className="service-area">
              <hr />
              <h3 className="crest">Service Area</h3>
              <h4 className="small">Reno, Truckee, Lake Tahoe, Carson City and Minden</h4>
              <div className="home__area-acordian">
                <AreaAccordian />
              </div>
              <p>Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area. Get in touch today!</p>
            </section>

            <div className="home-gallery">
              <NorthTahoeArts />
              <NorthTahoeEvents />
              <InclineChevron />
            </div>
          </div>
        </div>

        <div className="services-wrap">
          <section id="services" className="services">
            <hr />
            {/* 📣? I need to think about the H levels here */}
            <h3>Services</h3>
            <h4 className="crest">Locally owned and Fully Insured</h4>
            <h5 className="range">Professional Experience</h5>
            <hr />
            <h4 className="crest">Efficient LEDs, House Safe Install</h4>
            <h5 className="range">Quality Materials</h5>
            <hr />
            <h4 className="crest">Installation, Repair &amp; Removal</h4>
            <h5 className="range">Hassle Free</h5>
            <hr />
            <h4 className="crest">Repairs Free of Charge</h4>
            <h5 className="range">Guaranteed Upkeep</h5>
          </section>

          <div className="snowyroof-container">

            <SnowyRoof />
          </div>
        </div>

        <div className="slider-container">
          <section id="slider" className="testimonials">
            <hr />
            <h2 className="crest">Testimonials</h2>
            <h3 className="range">Thanks From Our Customers</h3>

            <TestimonialList />

            <div className="testimonial-links">
              <h3 className="crest"><Link to="/testimonials">Read More Reviews</Link></h3>
              <h3 className="crest"><Link to="#">Or help us you buy submitting your own review</Link></h3>
            </div>
          </section>
        </div>

      </main>

      <Footer />

    </>
  )
}

export default IndexPage
