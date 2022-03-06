import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Star from "../images/star";
import Footer from "../components/footer";

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
      <main>

        <section className="hero">
          <h2 className="mixta">Dependable holiday, landscape and events light installation</h2>

          <div className="village-container">
            <Village />
            <p>The Village at Rancharrah See the Project</p>
          </div>

          <section id="trusted" className="trusted">
            <hr />{/* ? should this be down below the h tag */}
            <h3>Trusted and local</h3>
            <p>Sierra Christmas Lights is here to provide beautiful, hassle free holiday and event lighting for your residence or business. We specialize in outdoor Christmas and wedding lights installation, taking pride in the quality, commercial grade materials we sell and maintain for our customers. Let us help make your next holiday or event really shine!</p>
          </section>
        </section>

        <div className="areas-and-gallery">
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

        <div className="slider-container">
          <section id="slider" className="testimonials">
            <hr />
            <h2>Testimonials</h2>


            <StaticQuery
              query={query}
              render={data => (
                <ul>
                  {data.allStrapiTestimonials.edges[0].node.data.map(testimonial => (
                    <li className="slider">
                      <div className="five-stars">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                      <p key={testimonial.id}>{testimonial.attributes.customer}</p>
                    </li>
                  ))}
                </ul>
              )}
            />
            <h3><Link to="#">Read More Reviews</Link></h3>
          </section>
        </div>



      </main>

      <Footer />

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
