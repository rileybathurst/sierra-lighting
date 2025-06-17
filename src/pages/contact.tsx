// TODO: I can query the og image by season
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Markdown from "react-markdown";
import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

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
  `)

  return (
    <>
      <Header />
      <main>
        <div className="react-markdown">
          <Markdown>
            {strapiAbout.description.data.description}
          </Markdown>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage


export const Head = () => {
  return (
    <SEO
      title='Contact'
      // TODO: strapi query
      description="Contact Sierra Lighting for a free estimate. We offer full service christmas, wedding, and event lighting packages to meet any budget."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/contact-og-sierra_lighting.jpg"
      url="contact"
    />
  )
}