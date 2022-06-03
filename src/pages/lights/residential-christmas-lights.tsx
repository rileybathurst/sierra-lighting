import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ResidentialChristmaslightsPage = () => {
  return (
    <>
      <Seo
        title="Lights | Sierra Lighting"
        description="When you're looking for custom, elegant, one of a kind ambiance for you wedding, look no further than Sierra Lighting. Creating beautiful displays is all we do! We also offer landscape lighting services to make your outdoor space shine all summer long with cafe lights, uplighting, and more."
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/lights-og-sierra_lighting.jpg"
      />
      <Header />
      <main className="lights__page">

        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/lights">
                <span itemProp="name">Lights</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="2" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Wedding Lights</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
          <hr />
        </div>

        <div className="measure">
          <h2 className="crest">What we build</h2>
          <h1 className="mixta">Residential Christmas Lights</h1>
        </div>

        <StaticQuery
          query={query}
          render={data => (
            <div className="deck">
              {
                data.allStrapiLight.nodes.map(light => (
                  <section className="card" key={light.id}>

                    <GatsbyImage
                      image={
                        light?.image?.localFile?.childImageSharp
                          ?.gatsbyImageData
                      }
                      alt={light.image?.alternativeText}
                      className=""
                    />

                    <div className="paper"></div>
                    <div className="content">
                      <hr />
                      <h2><Link to={`/light/${light.slug}`}>{light.name}</Link></h2>
                      <p>{light.excerpt}</p>
                    </div>
                  </section>
                ))
              }
            </div>
          )}
        />

      </main >

      <div className="measure">
        <hr />
        <h3 className="crest">What else we do</h3>
        <h2 className="range">
          <Link to="/lights/commerical-christmas-lights" className="link--subtle">
            Commercial Christmas Lights
          </Link>
        </h2>
        <h2 className="range">
          <Link to="/lights/wedding-lights" className="link--subtle">
            Wedding Lights
          </Link>
        </h2>
      </div>

      <Footer />

    </>
  )
}

export default ResidentialChristmaslightsPage

const query = graphql`
query ResidentialChristmasLightsQuery {
  allStrapiLight
  (filter: {residentialchristmas: {eq: true}})
  {
    nodes {
      id
      name
      excerpt
      slug
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [111, 165, 222, 444, 880]
              width: 222
            )
          }
        }
        alternativeText
      }
    }
  }
}
`