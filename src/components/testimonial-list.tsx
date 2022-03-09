import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Star from "../images/star";

const TestimonialList = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiTestimonial.nodes.map(testimonial => (
          <li key={testimonial.id} className="slider">
            <div className="five-stars">
              <Star /><Star /><Star /><Star /><Star />
            </div>
            <p>{testimonial.review}</p>
            <h3 className="range">{testimonial.customer}</h3>
            <p>{testimonial.platform}</p>
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
    }
  }
}
`