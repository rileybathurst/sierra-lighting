import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

import Testimonial from "../components/testimonial";
import type TestimonialTypes from "../types/testimonial-types";

const TestimonialsPage = () => {

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
          }

          project {
            title
            slug
          }
        }
      }

      strapiAbout {
        google
        yelp
        nextdoor
      }

      strapiFeedback {
        about
      }
    }
  `);

  return (
    <>
      <Header />

      <main className="stork">

        <h1 className="crest">Reviews</h1>
        <h2 className="ridge">Testimonials</h2>

        <p>{data.strapiFeedback.about}</p>

        <ul className="testimonials">
          {data.allStrapiTestimonial.nodes.map((testimonial: TestimonialTypes) => (
            <Testimonial
              // biome is mad about the ! but typescript accepts it
              // biome ignore lint/suspicious/noUnsafeNullableKey: The GraphQL query guarantees an `id` for each testimonial node, so this assertion is safe.
              key={testimonial.id!}
              customer={testimonial.customer}
              stars={testimonial.stars}
              review={testimonial.review}
              title={testimonial.title}
              slug={testimonial.slug}
              link={testimonial.link}
              project={testimonial.project}
            />
          ))}
        </ul>

        <hr />
        <h3 className="crest">
          Help us you buy submitting your own review
        </h3>

        {/* // ? these are not using the hover_back?  */}
        {[
          { url: data.strapiAbout.google, label: 'Google Review', preferred: true },
          { url: data.strapiAbout.yelp, label: 'Yelp', preferred: false },
          { url: data.strapiAbout.nextdoor, label: 'NextDoor', preferred: false }
        ].map((platform) => (
          <p key={platform.label}>
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              {platform.label}
            </a>
            {platform.preferred && <em>&nbsp;- preferred</em>}
          </p>
        ))}

        {/* // TODO: move this to a separate component, possibly in the same file */}
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
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/testimonials-og-sierra_lighting.jpg"
      url="testimonials"
    />
  )
}