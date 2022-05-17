import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import TestimonialRanking from "../components/testimonial-ranking";

// TODO this whole page

const TestimonialView = ({ testimonial }) => {
  return (
    <>
      <Seo
        title={`${testimonial.name} | Sierra Lighting`}
        description={testimonial.excerpt}
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
            <Link itemProp="item" to="/testimonial">
              <span itemProp="name">Testimonial</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{testimonial.customer}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <article className="measure">
        <h1>{testimonial.customer}</h1>
        <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
          <TestimonialRanking stars={testimonial.stars} />
          <p className="sr-only">
            <span itemProp="worstRating">1</span>
            <span itemProp="ratingValue">{testimonial.stars}</span>/
            <span itemProp="bestRating">5</span>stars
          </p>

          <p className="sr-only" itemProp="datePublished">{testimonial.createdAt}</p>
          <p itemProp="reviewBody">{testimonial.review}</p>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default TestimonialView;
