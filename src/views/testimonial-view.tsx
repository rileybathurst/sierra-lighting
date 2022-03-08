import * as React from "react";
import { Link } from "gatsby";

const TestimonialView = ({ testimonial }) => {
  return (
    <>
      <article className="single">
        <h1>{testimonial.customer}</h1>
      </article>
    </>
  );
};

export default TestimonialView;
