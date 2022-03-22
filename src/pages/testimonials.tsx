import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Star from "../images/star";

/* function ListItems() {
  const numbers = [1, 2, 3, 4, 5];

  return numbers.map(number => (
    <Star />
  ));
} */

function LoopItems() {
  const count = [];

  let i = 0;
  do {
    i += 1;
    // console.log(i);
    count.push(i);
  } while (i < 5);


  // const numrows = [5, 4, 3, 2, 1];

  return (
    <>
      {count.map(x => <li key={x}><Star /></li>)}
    </>
  );
}

const TestimonialsPage = () => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <h1>Frequently Asked Questions</h1>

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

                    {/* <ListItems /> */}
                    <hr />
                    <ul>
                      <LoopItems />
                    </ul>
                    <h3 itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{testimonial.customer}</span>
                    </h3>
                    <p className="sr-only" itemProp="datePublished">{testimonial.createdAt}</p>
                    <p itemProp="reviewBody">{testimonial.review}</p>

                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <p>
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