import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const TestimonialsPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <h1>Frequently Asked Questions</h1>
        <StaticQuery
          query={query}
          render={data => (
            <ul>
              {data.allStrapiTestimonial.nodes.map(testimonial => (
                <li key={testimonial.id}>
                  <h2>{testimonial.customer}</h2>
                  <p>{testimonial.review}</p>
                </li>
              ))}
            </ul>
          )}
        />

        {/* <hr /> */}
        <h3 className="crest"><Link to="#">Help us you buy submitting your own review</Link></h3>
      </main>

      <Footer />

    </>
  )
}

export default TestimonialsPage

const query = graphql`
query TestimonialsQuery {
  allStrapiTestimonial(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      customer
      stars
      review
    }
  }
}
`