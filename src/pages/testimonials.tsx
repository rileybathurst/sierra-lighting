import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import TestimonialRanking from "../components/testimonial-ranking";

function TestimonialLink(props) {
  if (props.vendor) {
    // TODO the hypen needs to be on an if
    // TODO if no vendor then maybe it has a platform
    return (
      <>
        <p className='crest'><Link to={`/vendor/${props.vendor.slug}`}>
          {props.vendor.name}
        </Link> - {props?.position}</p>
        <h4 className='range' itemProp="name">{props.customer}</h4>
      </>
    )
  } else if (props.platform) {
    // console.log('platform');
    return (
      <>
        <h4 className='range' itemProp="name">{props.customer} <span>- {props?.platform}</span></h4>
      </>
    );
  } else {
    // console.log('no vendor or platform');
    return (
      <h4 className='range' itemProp="name">{props.customer}</h4>
    );
  }
}

function ReviewRatings(props) {
  if (props.stars) {
    return (
      <div className="sr-only" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <p>
          <span itemProp="worstRating">1</span>
          <span itemProp="ratingValue">{props.stars}</span><span>/</span>
          <span itemProp="bestRating">5</span>stars
        </p>
      </div>
    );
  } else {
    return null;
  }
}

const TestimonialsPage = () => {

  // ? why do I have this filter? 
  const { allStrapiTestimonial } = useStaticQuery(graphql`
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
      position
      platform

      vendor {
        name
        slug
      }
    }
  }
}
`)

  return (
    <>
      <Seo
        title="Testimonials | Sierra Lighting"
        description="Thanks From Our Customers"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/testimonials-og-sierra_lighting.jpg"
      />
      <Header />

      <main className="measure">

        <h1 className="crest">Reviews</h1>
        <h2 className="ridge">Testimonials</h2>

        <div itemProp="mainEntity" itemScope itemType="https://schema.org/LocalBusiness">
          <h1 className="sr-only" itemProp="name">Sierra Lighting</h1>

          <ul itemProp="review" itemScope itemType="https://schema.org/Review" className="testimonials">
            {allStrapiTestimonial.nodes.map(testimonial => (
              <li key={testimonial.id} className='testimonial'>
                <figure>
                  <blockquote>
                    {/* <Link to={`/testimonial/${testimonial.slug}`} itemProp="/testimonail/url">{testimonial.slug}</Link> */}
                    <h2 itemProp="name" className="sr-only">{testimonial.title}</h2>

                    <TestimonialRanking stars={testimonial.stars} />
                    <p className='testimonial--quote_mark range'>&ldquo;</p>
                    <p itemProp="reviewBody">{testimonial.review}</p>


                    <figcaption>
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">

                        <TestimonialLink
                          aref={testimonial.link}
                          customer={testimonial.customer}
                          vendor={testimonial?.vendor}
                          position={testimonial?.position}
                          platform={testimonial?.platform}
                        />

                      </span>
                      <p className="sr-only" itemProp="datePublished">{testimonial.createdAt}</p>
                    </figcaption>
                    <ReviewRatings stars={testimonial.stars} />
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
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
          </a><em>- preferred</em>
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

        <form
          className="measure"
          name="testimonial"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/form-success"
        >

          <input type="hidden" name="form-name" value="testimonial" />

          <input type="hidden" name="subject"
            value="Testimonial Form from sierra.lighting" />

          <p className="sr-only">
            <label>
              Don&#39;t fill this out if you&#39;re human: <input name="bot-field" />
            </label>
          </p>

          <label>Name
            <input type="text" name="name" />
          </label>
          <label>Stars (out of five)
            <input type="number" min="0" max="5" name="stars" />
          </label>
          <label>Title
            <input type="text" name="title" />
          </label>
          <label>Review
            <textarea name="review" />
          </label>
          <label>Email
            <input type="email" name="email" />
          </label>
          <button type="submit">Send</button>
        </form>

      </main>

      <Footer />

    </>
  )
}

export default TestimonialsPage
