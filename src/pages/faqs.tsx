import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

const FaqsPage = () => {

  const { allStrapiFar } = useStaticQuery(graphql`
query FaqQuery {
  allStrapiFar(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      question
      answer
    }
  }
}
`)

  return (
    <>
      <Header />

      <main className="measure">

        <h2 className="crest">What Do You Need To Know</h2>
        <h1 className="range">Frequently Asked Questions</h1>

        <ul className="faqs">
          {allStrapiFar.nodes.map(faq => (
            <li key={faq.id} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <hr />
              <h2 itemProp="name">{faq.question}</h2>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <Footer />

    </>
  )
}

export default FaqsPage


export const Head = () => {
  return (
    <SEO
      title={`FAQs | ${useSiteMetadata().title}`}
      url="faqs"
      description="Your go to holiday lights installer in the Reno, Truckee, and North Tahoe area. A list of frequently asked questions. Please reach out for more information and estimates."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/og_image-sierra_lighting-bistro_lights.jpg"
    />
  )
}

// ! FAQ schema
// itemType="https://schema.org/FAQPage"
// itemScope={true}