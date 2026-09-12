// TODO: I can query the og image by season

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Markdown from "react-markdown";
// TODO: testing
import { useIsWithinBusinessHours } from "../components/business-hours";
import Footer from "../components/footer";
import Header from "../components/header";
import { SEO } from "../components/seo";

const ContactPage = () => {
  const { strapiAbout } = useStaticQuery(graphql`
    query ContactQuery {
      strapiAbout {
        description {
          data {
            description
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="react-markdown">
          <Markdown>{strapiAbout.description.data.description}</Markdown>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;

export const Head = () => {
  return (
    <SEO
      title="Contact"
      // TODO: strapi query
      description="Contact Sierra Lighting for a free estimate. We offer full service christmas, wedding, and event lighting packages to meet any budget."
      // TODO:
      // image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/contact-og-sierra_lighting.jpg"
      url="contact"
    />
  );
};
