import * as React from "react"
import { graphql } from "gatsby"
import TestimonialView from "../../views/testimonial-view"
import SEO from "../../components/seo"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const query = graphql`
  query TestimonialQuery($slug: String!) {
    strapiTestimonial(slug: { eq: $slug }) {
      id
      customer
      slug
      stars
      review
      title
      createdAt
    }
  }
`

const CustomerPage = ({ data }) => {
  return (
    <TestimonialView
      testimonial={data.strapiTestimonial}
    />
  );
};

export default CustomerPage;

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiTestimonial.name} | ${useSiteMetadata().title}`}
      description={data.strapiTestimonial?.excerpt}
      url={`testimonial/${data.strapiTestimonial.slug}`}
    />
  )
}
