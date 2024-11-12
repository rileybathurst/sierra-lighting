import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

import TestimonialRanking from "../components/testimonial-ranking";

// TODO: remove the props from the component
type TestimonialLinkTypes = {
  aref: string;
  customer: string;
  vendor: {
    name: string;
    slug: string;
  };
  position: string;
  platform: string;
}
function TestimonialLink(props: TestimonialLinkTypes) {
  if (props.vendor && props.position) {
    // TODO the hypen needs to be on an if
    // TODO if no vendor then maybe it has a platform
    return (
      <>
        <p className='crest'><Link to={`/vendor/${props.vendor.slug}`}>
          {props.vendor.name}
        </Link> - {props?.position}</p>
        <h4 className='range' >{props.customer}</h4>
      </>
    )
  }

  if (props.platform && props.position) {
    return (
      <>
        <h4 className='range' >
          {props.customer} <span>- {props?.platform}</span>
        </h4>
      </>
    );
  }

  if (props.platform) {
    return (
      <h4 className='range' >{props.customer}</h4>
    );
  }

}

const TestimonialsPage = () => {

  const { allStrapiTestimonial } = useStaticQuery(graphql`
    query TestimonialsQuery {
      allStrapiTestimonial(
        sort: {order: ASC}
      ) {
        nodes {
          id
          customer
          stars
          review
          title
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

  type TestimonialTypes = {
    id: React.Key;
    customer: string;
    stars: number;
    review: string;
    title: string;
    slug: string;
    link: string;
    position: string;
    platform: string;
    vendor: {
      name: string;
      slug: string;
    };
  }

  return (
    <>
      <Header />

      <main className="stork">

        <h1 className="crest">Reviews</h1>
        <h2 className="ridge">Testimonials</h2>

        <p>Welcome to our testimonials page, where our satisfied customers speak for us! At Sierra Lighting, we pride ourselves on providing exceptional products/services and ensuring that our clients' experiences exceed expectations, year after year! Don't just take our word for it, hear directly from those who have experienced the quality, reliability, and excellence we deliver firsthand. Dive into the testimonials below to discover why our customers choose us and why you should too!</p>

        <ul className="testimonials">

          {/* // TODO: make this a component for the page and the index */}
          {allStrapiTestimonial.nodes.map((testimonial: TestimonialTypes) => (
            <li key={testimonial.id} className='testimonial'>
              <figure>
                <blockquote>
                  <h2 className="sr-only">{testimonial.title}</h2>

                  <TestimonialRanking stars={testimonial.stars} />
                  <p className='testimonial--quote_mark range'>&ldquo;</p>
                  <p>{testimonial.review}</p>


                  <figcaption>
                    {/* // ? is the span needed anymore */}
                    <span>

                      <TestimonialLink
                        aref={testimonial.link}
                        customer={testimonial.customer}
                        vendor={testimonial?.vendor}
                        position={testimonial?.position}
                        platform={testimonial?.platform}
                      />

                    </span>
                  </figcaption>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>

        <hr />
        <h3 className="crest">
          Help us you buy submitting your own review
        </h3>

        {/* // TODO: variables */}
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
        <p><a
          href="https://nextdoor.com/login/?next=/pages/sierra-lighting-truckee-ca/recommend/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-back">
          NextDoor
        </a>
        </p>

        <form
          className="stork"
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
              Don&#39;t fill this out if you&#39;re human:
              <input name="bot-field" />
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

        <hr />

      </main >

      <Footer />

    </>
  )
}

export default TestimonialsPage

export const Head = () => {
  return (
    <SEO
      title='Testimonials'
      description="Thanks From Our Customers"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/testimonials-og-sierra_lighting.jpg"
      url="testimonials"
    />
  )
}