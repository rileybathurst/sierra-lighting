import * as React from "react";
import { Link } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// TODO this whole page

const TestimonialView = ({ testimonial }) => {
  return (
    <>
      {/* // TODO image and description */}
      <Seo title="Sierra Lighting"
      // description={testimonial.excerpt}
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
              <span itemProp="name">testimonial</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{testimonial.name}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>
      <article className="single">
        <h1>{testimonial.customer}</h1>
      </article>
      <Footer />
    </>
  );
};

export default TestimonialView;
