import * as React from "react";
import { Link } from "gatsby";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../components/header";
import Footer from "../components/footer"
import TestimonialRanking from "../components/testimonial-ranking";

// TODO this whole page but also can it be inlined

const TestimonialView = ({ testimonial }) => {
  return (
    <>
      <Header />

      <article className="stork">
        <h1>{testimonial.customer}</h1>
        {/* TODO: component */}
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

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/testimonial/">Testimonial</Link></Breadcrumb>
        <Breadcrumb>{testimonial.slug}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default TestimonialView;
