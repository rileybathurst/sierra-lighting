import * as React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"

import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../../components/header";
import Footer from "../../components/footer"

import Testimonial from "../../components/testimonial";

export const data = graphql`
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

type TestimonialPageTypes = {
  data: {
    strapiTestimonial: {
      id: React.Key;
      customer: string;
      slug: string;
      stars: number;
      review: string;
      title: string;
      createdAt: string;
      excerpt: string;
    }
  }
}
const TestimonialPage = ({ data }: TestimonialPageTypes) => {

  return (
    <>
      <Header />
      <main>
        <Testimonial {...data.strapiTestimonial} />
        {/* // TODO: relations */}

      </main>
      <Breadcrumbs>
        <Breadcrumb><Link to="/testimonials/">Testimonials</Link></Breadcrumb>
        <Breadcrumb>{data.strapiTestimonial.slug}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default TestimonialPage;

export const Head = ({ data }: TestimonialPageTypes) => {
  return (
    <SEO
      title={`${data.strapiTestimonial.customer} Testimonial`}
      description={data.strapiTestimonial?.excerpt}
      url={`/testimonials/${data.strapiTestimonial.slug}`}
    />
  )
}
