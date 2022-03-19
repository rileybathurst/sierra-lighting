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
        itemType="https://schema.org/FAQPage"
        itemScope={true}
        description="Frequently asked questions about our services and products."
      />

      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link> /&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/faqs">
              <span itemProp="name">FAQs</span></Link>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">

        <h1>Frequently Asked Questions</h1>
        <StaticQuery
          query={query}
          render={data => (
            <ul>
              {data.allStrapiFar.nodes.map(faq => (
                <div key={faq.id} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h2 itemProp="name">{faq.question}</h2>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
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