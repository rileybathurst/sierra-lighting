// Only used once on the homepage as it has a query I wanted to abstract out.

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TestimonialRanking from "./testimonial-ranking"

function TestimonialList() {

  const { allStrapiTestimonial } = useStaticQuery(graphql`
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
`)
  return (

    <ul>
      {allStrapiTestimonial.nodes.map(testimonial => (
        <li key={testimonial.id} className="slider">
          {/* // TODO: theres a lot of divs and stuff that can be simplified */}
          <div>
            <div className="five-stars">
              <TestimonialRanking stars={testimonial.stars} />
              <p className="sr-only">{testimonial.stars}</p>
              <p className="sr-only">1/5stars</p>
            </div>
          </div>
          <p>{testimonial.excerpt}</p>
          {/* // TODO: className="together" is a bad name */}
          <div className="together">
            <h3 className="range">{testimonial.customer}</h3>
            <p>{testimonial.platform}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TestimonialList
