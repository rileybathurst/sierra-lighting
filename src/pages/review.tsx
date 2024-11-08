import * as React from "react"
// import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Star from "../images/star";

const ReviewsPage = () => {

  return (
    <>
      <Header />

      <main className="stork">

        <h1 className="crest">Reviews</h1>
        <button type="button" title="Less than Star Button">
          <Star />
          <Star />
          <Star />
          <Star />
        </button>
        <button type="button" title="5 Star Button">
          <Star />
        </button>

      </main >

      <Footer />

    </>
  )
}

export default ReviewsPage

export const Head = () => {
  return (
    <SEO
      title='Reviews'
      // description="Thanks From Our Customers"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/testimonials-og-sierra_lighting.jpg"
    />
  )
}