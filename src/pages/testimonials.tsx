import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import TestimonialRanking from "../components/testimonial-ranking";

// TODO only show the stars if the user has voted

function TestimonialLink(props) {
  if (props.aref) {
    return (
      <a href={props.aref} target="_blank" rel="noopener noreferrer">
        <span itemProp="name">{props.customer}</span>
      </a>
    );
  } else {
    return (
      <span itemProp="name">{props.customer}</span>
    );
  }
}

const TestimonialsPage = () => {
  return (
    <>
    // TODO description
      <Seo
        title="Testimonials | Sierra Lighting"
        description=""
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/testimonials-og-sierra_lighting.jpg"
      />
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
                    {/* <Link to={`/testimonial/${testimonial.slug}`} itemProp="/testimonail/url">{testimonial.slug}</Link> */}
                    <h2 itemProp="name" className="first-capital">{testimonial.title}</h2>

                    <ul className="testimonials stars">
                      <TestimonialRanking stars={testimonial.stars} />
                    </ul>
                    <h3 itemProp="author" itemScope itemType="https://schema.org/Person">

                      <TestimonialLink aref={testimonial.link} customer={testimonial.customer} />

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
          Help us you buy submitting your own review
        </h3>

        <p>
          <a href="https://g.page/r/CXdQyNRhzs8YEBA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-back hover-back--inline">
            Google Review
          </a><em>- preffered</em>
        </p>
        <p>
          <a href="https://www.yelp.com/biz/sierra-lighting-calpine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-back">
            Yelp
          </a>
        </p>
        <p><a href="https://nextdoor.com/login/?next=/pages/sierra-lighting-truckee-ca/recommend/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-back">
          NextDoor
        </a>
        </p>

        {/* // TODO this isnt linked up yet */}
        <form className="measure">
          <label>Name
            <input type="text" />
          </label>
          <label>Stars (out of five)
            <input type="number" min="0" max="5" />
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
      link
    }
  }
}
`