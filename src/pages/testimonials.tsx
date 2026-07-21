import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

import Testimonial from "../components/testimonial";
import type TestimonialTypes from "../types/testimonial-types";

import { useIsWithinBusinessHours } from '../components/business-hours';

const TestimonialsPage = () => {
  const isWithinBusinessHours = useIsWithinBusinessHours();

  const data = useStaticQuery(graphql`
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

            collaborator {
              industry
              slug
            }
          }

          project {
            title
            slug
          }
        }
      }

      strapiAbout {
        googleReviews
      }

      strapiFeedback {
        about
      }

      strapiForm {
        outsideHours
      }
    }
  `);

  return (
    <>
      <Header />

      <main>

        <h1>Testimonials</h1>

        <p>{data.strapiFeedback.about}</p>

        <ul className="testimonials">
          {data.allStrapiTestimonial.nodes.map((testimonial: TestimonialTypes) => {
            return (
              <Testimonial
                key={testimonial.id}
                {...testimonial}
              />
            );
          })}
        </ul>

        <hr />
        <h3>
          Help us by submitting your own review
        </h3>

        <p>
          <a
            href={data.strapiAbout.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Google Review
          </a>
          &nbsp;- preferred, or fill in the form below
        </p>

        {/* // TODO: move this to a separate component, possibly in the same file */}
        <form
          name="testimonial"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/form-success"
        >
          <input type="hidden" name="form-name" value="testimonial" />

          <input type="hidden" name="subject"
            value={`${!isWithinBusinessHours && "Outside Business Hours: "} Testimonial Form from sierra.lighting`}
          />

          {!isWithinBusinessHours && (
            <input className="sr-only" type="hidden" name="hours" value={`${data.strapiForm.outsideHours}`} />
          )}

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
      // ? is there a reason for this specific image?
      // TODO:
      // image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/testimonials-og-sierra_lighting.jpg"
      url="testimonials"
    />
  )
}