import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import TestimonialRanking from "../components/testimonial-ranking";

const TestimonialsPage = () => {
  return (
    <>
    // TODO image and description
      <Seo title="Sierra Lighting" />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Testimonials</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">

        {/* // TODO this needs more */}
        <h1>Reviews</h1>
        <h2>Testimonials</h2>

        <div itemProp="mainEntity" itemScope itemType="https://schema.org/LocalBusiness">
          <h1 className="sr-only" itemProp="name">Sierra Lighting</h1>
          <StaticQuery
            query={query}
            render={data => (
              <ul itemProp="review" itemScope itemType="https://schema.org/Review" className="testimonials__page">
                {data.allStrapiTestimonial.nodes.map(testimonial => (
                  <li key={testimonial.id}>
                    <hr />
                    {/* <Link to={`/testimonial/${testimonial.slug}`} itemProp="/testimonail/url">{testimonial.slug}</Link> */}
                    <h2 itemProp="name">{testimonial.title}</h2>

                    <ul className="testimonials stars">
                      <TestimonialRanking stars={testimonial.stars} />
                    </ul>
                    <h3 itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{testimonial.customer}</span>
                    </h3>
                    <p className="sr-only" itemProp="datePublished">{testimonial.createdAt}</p>
                    <p itemProp="reviewBody">{testimonial.review}</p>

                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <p className="sr-only">
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

        <hr />
        <h3 className="crest">
          {/* <Link to="#"> */}
          Help us you buy submitting your own review
          {/* </Link> */}
        </h3>

        {/* // TODO need the actual links */}
        <p><Link to="#">Google Review</Link></p>
        <p><Link to="#">Yelp</Link></p>
        <p><Link to="#">NextDoor</Link></p>

        <form className="measure">
          <label>Name
            <input type="text" />
          </label>
          <label>Stars (out of five)
            <input type="number" />
          </label>
          <label>Title
            <input type="text" />
          </label>
          <label>Review
            <textarea />
          </label>
          <label>Email
            <input type="email" />
          </label>
          <button>Send</button>
        </form>

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