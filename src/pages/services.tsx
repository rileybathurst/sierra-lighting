// ! this page is weird and should be put somewhere else
// probably into the cms and actually use it

import * as React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby';
import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const ServicesPage = () => {

  const { allStrapiService } = useStaticQuery(graphql`
  query ServiceQuery {
    allStrapiService {
      nodes {
        id
        name
        slug
      }
    }
  }
`)

  return (
    <>
      <Seo
        title="Services | Sierra Lighting"
        description="A professional lighting design package will highlight your decor and bring out the beauty of your venue.  Learn about the many design options Sierra Lighting can use to make your Reno Tahoe wedding really shine."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/services-og-sierra_lighting.jpg"
      />
      <Header />

      <main className="measure">

        <h1>Services</h1>
        {allStrapiService.nodes.map((service) => (
          <div id={service.id}>

            <h2>
              <Link to={`/service/${service.slug}`}>
                {service.name}
              </Link>
            </h2>

          </div>
        ))}

        {/* <h2>The Christmas lights services we provide include:</h2> */}
        {/* // ! this was a thing maybe it needs to be used again */}
        {/* // TODO: remove this we now just show all the lights lots of places */}
        {/* // TODO: use the idea of this hasOfferCatalog */}
        {/* <ul itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          <li key="roofs" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Roof lines hung with damage free attachment methods outlined in high efficiency energy saving C9 LED bulbs</span>
          </li>
          <li key="windows" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Windows and doors outlined in mini LED bulbs or garlands</span>
          </li>
          <li key="columns" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Columns and railings wrapped in mini LED bulbs or garlands</span>
          </li>
          <li key="garlands" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Garlands and wreaths either lit or unlit, decorated or plain</span>
          </li>
          <li key="trunks" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Trunk wraps in mini LED lights</span>
          </li>
          <li key="trees" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Tree canopies either swirl wrapped or with limbs individually wrapped to create an elegant silhouette</span>
          </li>
          <li key="bushes" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Bushes and Shrubs wrapped in mini LED lights</span>
          </li>
          <li key="bows" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Bows and ornaments for that extra detail</span>
          </li>
          <li key="lit" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
            <span itemProp="name">Lit figurines, snowflakes and trees for special accents</span>
          </li>
          <li key="missing">Is something missing? Just ask!</li>
        </ul> */}



      </main>

      <Footer />

    </>
  )
}

export default ServicesPage
