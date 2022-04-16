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

                <ul className="testimonials stars">
                  <TestimonialRanking stars={testimonial.stars} />
                </ul>

                <p className="sr-only" itemProp="ratingValue">{testimonial.stars}</p>
                <p className="sr-only"><span itemProp="worstRating">1</span>/</p>
                <p className="sr-only"><span itemProp="bestRating">5</span>stars</p>
              </div>
            </div>
            <p itemProp="reviewBody">{testimonial.review}</p>
            <div className="together">
              <span itemProp="name" className="sr-only">{testimonial.title}</span>
              {/* <div itemScope itemType="https://schema.org/Person"> */}
              <h3 className="range" itemProp="author">{testimonial.customer}</h3>{/* // ! check this came in */}
              <p>{testimonial.platform}</p>
              {/* </div> */}
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
  allStrapiTestimonial(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      customer
      platform
      review
      createdAt
      stars
      title
    }
  }
}
`