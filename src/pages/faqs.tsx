import * as React from "react"
import { Script } from 'gatsby';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import { useStrapiFaq } from "../hooks/use-strapi-faq";


const FaqsPage = () => {

  type faqTypes = {
    id: React.Key;
    question: string;
    answer: string;
  }

  return (
    <>
      <Header />

      <main className="stork">

        <h2 className="crest">What Do You Need To Know</h2>
        <h1 className="range">Frequently Asked Questions</h1>

        <ul className="faqs">
          {useStrapiFaq().nodes.map((faq: faqTypes) => (
            <li key={faq.id}>
              <hr />
              <h2>{faq.question}</h2>
              <div>
                <div>
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
      title='FAQs'
      url="faqs"
      description="our list of frequently asked questions. Please reach out for more information and estimates."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/og_image-sierra_lighting-bistro_lights.jpg"
    >
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ${useStrapiFaq().nodes.map((faq: { question: string; answer: string; }) => (
          `{
                  "@type": "Question",
                  "name": "${faq.question}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${faq.answer}"
                  }
                }`
        ))
            .join(',')}
            ]
          }
        `}
      </Script>
    </SEO>
  )
}
