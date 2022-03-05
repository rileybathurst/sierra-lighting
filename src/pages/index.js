import * as React from "react"
import { StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";

import "../styles/app.scss";


export function Village() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/Rancharrah-13-web-tagged.jpg"
    alt="christmas lighting display at the village at rancharrah"
    className="village" />
}


// markup
const IndexPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <Village />
      <main>

        <section>
          <hr />{/* this should be down */}
          <h3>Trusted and local</h3>
          <p>Sierra Christmas Lights is here to provide beautiful, hassle free holiday and event lighting for your residence or business. We specialize in outdoor Christmas and wedding lights installation, taking pride in the quality, commercial grade materials we sell and maintain for our customers. Let us help make your next holiday or event really shine!</p>
        </section>

        <section>
          <hr />
          <h3>Service Area</h3>
          <h4>Reno, Truckee, Lake Tahoe, Carson City and Minden</h4>
          <button>
            <span>California</span>
            <span>Nevada</span>
            <span>+</span>
          </button>
        </section>

        <section>
          <h2>Testimonials</h2>
          <StaticQuery
            query={query}
            render={data => (
              <ul>
                {data.allStrapiTestimonials.edges[0].node.data.map(testimonial => (
                  <li key={testimonial.id}>{testimonial.attributes.customer}</li>
                ))}
              </ul>
            )}
          />
        </section>

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
