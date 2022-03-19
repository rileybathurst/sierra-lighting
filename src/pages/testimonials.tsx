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

        <div itemProp="mainEntity" itemScope itemType="https://schema.org/LocalBusiness">
          <h1 className="sr-only" itemProp="name">Sierra Lighting</h1>
          <StaticQuery
            query={query}
            render={data => (
              <ul itemProp="review" itemScope itemType="https://schema.org/Review">
                {data.allStrapiTestimonial.nodes.map(testimonial => (
                  <li key={testimonial.id}>
                    <Link to={`/testimonial/${testimonial.slug}`} itemProp="/testimonail/url">{testimonial.slug}</Link>
                    <h3 itemProp="name">{testimonial.title}</h3>
                    <h2 itemProp="author">{testimonial.customer}</h2>
                    <p className="sr-only" itemProp="datePublished">{testimonial.createdAt}</p>
                    <p itemProp="reviewBody">{testimonial.review}</p>

                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <p>
                        <span itemProp="worstRating">1</span>
                        <span itemProp="ratingValue">{testimonial.stars}</span>/
                        <span itemProp="bestRating">5</span>stars
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          />
        </div>

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
      title
      createdAt
      slug
    }
  }
}
`