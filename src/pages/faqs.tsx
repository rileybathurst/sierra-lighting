import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const FaqsPage = () => {
  return (
    <>
      <Seo
        title="Sierra Lighting | FAQs"
        itemType="https://schema.org/FAQPage"
        itemScope={true}
        description="Your go to holiday lights installer in the Reno, Truckee, and North Tahoe area. A list of frequently asked questions. Please reach out for more information and estimates."
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
            <span itemProp="name">FAQs</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">

        <h2 className="crest">What Do You Need To Know</h2>
        <h1 className="range">Frequently Asked Questions</h1>
        {/* <hr /> */}
        <StaticQuery
          query={query}
          render={data => (
            <ul className="faqs">
              {data.allStrapiFar.nodes.map(faq => (
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