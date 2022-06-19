import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';

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
        <h4 className='range' itemProp="name">{props.customer}</h4>
        <p className='crest'><Link to={`/vendor/${props.vendor.slug}`}>
          {props.vendor.name}
        </Link> - {props?.position}</p>
      </>
    )
  } else if (props.platform) {
    // console.log('platform');
    return (
      <>
        <h4 className='range' itemProp="name">{props.customer}</h4> - {props?.platform}
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
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <p className="sr-only">
          <span itemProp="worstRating">1</span>
          <span itemProp="ratingValue">{props.stars}</span>/
          <span itemProp="bestRating">5</span>stars
        </p>
      </div>
    );
  } else {
    return null;
  }
}

const TestimonialsPage = () => {
  return (
    <>
      <Seo
        title="Testimonials | Sierra Lighting"
        description="Thanks From Our Customers"
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
              <ul itemProp="review" itemScope itemType="https://schema.org/Review" className="testimonials">
                {data.allStrapiTestimonial.nodes.map(testimonial => (
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
      position
      platform

      vendor {
        name
        slug
      }
    }
  }
}
`