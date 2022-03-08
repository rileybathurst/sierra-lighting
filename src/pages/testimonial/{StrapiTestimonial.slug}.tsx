import * as React from "react"
import { graphql } from "gatsby"
import TestimonialView from "../../views/testimonial-view"

export const query = graphql`
  query TestimonialQuery($slug: String!) {
    strapiTestimonial(slug: { eq: $slug }) {
      id
      customer
      slug
    }
  }
`

const CustomerPage = ({ data }) => {
  const testimonial = data.strapiTestimonial;
  return (
    <TestimonialView
      testimonial={testimonial}
    />
  );
};

export default CustomerPage;
