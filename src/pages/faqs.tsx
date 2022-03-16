import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// markup
const FaqsPage = () => {
  return (
    <>
      <Seo
        title="Sierra Lighting | FAQs"
        titleColor="yellow"
        itemtype="https://schema.org/FAQPage"
        description="Frequently asked questions about our services and products."
      />

      <Header />
      <main className="measure">

        <h1>Frequently Asked Questions</h1>
        <StaticQuery
          query={query}
          render={data => (
            <ul>
              {data.allStrapiFar.nodes.map(faq => (
                <div key={faq.id} itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                  <h2 itemprop="name">{faq.question}</h2>
                  <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          )}
        />
      </main>

      <Footer />

    </>
  )
}

export default FaqsPage

const query = graphql`
query FaqQuery {
  allStrapiFar(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      question
      answer
    }
  }
}
`