// Only used once on the homepage as it has a query I wanted to abstract out.

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import TestimonialRanking from "./testimonial-ranking"

const TestimonialList = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul itemProp="review" itemScope itemType="https://schema.org/Review">
        {data.allStrapiTestimonial.nodes.map(testimonial => (
          <li key={testimonial.id} className="slider">
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <div className="five-stars">

                <TestimonialRanking stars={testimonial.stars} />

                <p className="sr-only" itemProp="ratingValue">{testimonial.stars}</p>
                <p className="sr-only"><span itemProp="worstRating">1</span>/</p>
                <p className="sr-only"><span itemProp="bestRating">5</span>stars</p>
              </div>
            </div>
            <p itemProp="reviewBody">{testimonial.excerpt}</p>
            <div className="together">
              <span itemProp="name" className="sr-only">{testimonial.title}</span>
              <h3 className="range" itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{testimonial.customer}</span>
              </h3>
              <p>{testimonial.platform}</p>
              <p itemProp="datePublished" className="sr-only">
                {testimonial.createdAt}
              </p>
            </div>
          </li>
        ))}
      </ul>
    )}
  />
)

export default TestimonialList

export const query = graphql`
query TestimonialListQuery {
  allStrapiTestimonial(limit: 3) {
    nodes {
      id
      customer
      platform
      excerpt
      createdAt
      stars
      title
    }
  }
}
`