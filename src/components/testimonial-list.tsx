import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Star from "../images/star";

const TestimonialList = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul itemProp="review" itemScope itemtype="https://schema.org/Review">
        {data.allStrapiTestimonial.nodes.map(testimonial => (
          <li key={testimonial.id} className="slider">
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <div className="five-stars">
                <Star /><Star /><Star /><Star /><Star />
                <p className="sr-only" itemProp="worstRating">{testimonial.stars}</p>
                <p className="sr-only"><span itemProp="ratingValue">1</span>/</p>
                <p className="sr-only"><span itemProp="bestRating">5</span>stars</p>
              </div>
            </div>
            <p>{testimonial.review}</p>
            <div className="together">
              {/* <span itemprop="name">happy camper</span> */}
              <h3 className="range"><span itemProp="author">{testimonial.customer}</span></h3><p>{testimonial.platform}</p>
              <p itemProp="datePublished" className="sr-only">{testimonial.createdAt}
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
    }
  }
}
`