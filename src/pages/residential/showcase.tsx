// specifically removed from the SEO on Rom's request
// I bet eventually you could create these progamatically for all services but thats just another level

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Header from "../../components/header";
import Footer from "../../components/footer";
import ChristmasLightsOrdered from "../../components/christmas-lights-ordered";

function ReactDescription(props) {
  if (props.description) {
    return <ReactMarkdown
      children={props.description.data.description}
      remarkPlugins={[remarkGfm]}
    />;
  } else if (props.showcaseDescription) {
    return <ReactMarkdown
      children={props.showcaseDescription.data.showcaseDescription}
      remarkPlugins={[remarkGfm]}
    />;
  } else {
    return null;
  }
}

function Attributes(props) {

  const sections = Object.entries(props).map(([key, value]) => {

    return (
      <section className="attribute" key={key}>
        <h3 className="crest first-capital">{key}</h3>
        <h4 className="range">{value}</h4>
      </section>
    )
  })

  return (
    <>
      <hr className="hr-tin-soldier measure" />
      <div className="attributes">
        {sections}
      </div>
      <hr className="hr-tin-soldier measure" />
    </>
  )
}

function ResidentialShowcase() {

  const data = useStaticQuery(graphql`
    query ShowcaseQuery {
      gold: allStrapiShowcase(
        filter: {service: {slug: {eq: "residential"}},
        tier: {eq: "gold"}}
      ) {
        nodes {
          ...showcase
        }
      }

      silver: allStrapiShowcase(
        filter: {service: {slug: {eq: "residential"}},
        tier: {eq: "silver"}}
      ) {
        nodes {
          ...showcase
        }
      }

      bronze: allStrapiShowcase(
        filter: {service: {slug: {eq: "residential"}},
        tier: {eq: "bronze"}}
      ) {
        nodes {
          ...showcase
        }
      }

      description: strapiService(slug: {eq: "residential"}) {
        showcaseDescription {
          data {
            showcaseDescription
          }
        }
      }

      lightGroups: allStrapiLightGroup(
          filter: {services: {elemMatch: {slug: {eq: "residential"}}}}
        ) {
          nodes {
            name
            excerpt
            lights {
              id
              name
              slug
              excerpt
              byline

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

    }
  `);

  let showcase = [data.gold, data.silver, data.bronze];
  let description = data.description;
  // let lightGroups = data.lightGroups;

  // console.log(description);

  return (
    <>
      <Header />
      <div className="measure">
        <ol className="breadcrumbs">
          <li >
            <Link to="/residential">
              Residential
            </Link>&nbsp;/&nbsp;
          </li>
          <li>Showcase</li>
        </ol>
        <hr />
      </div>
      <main>
        <div className="measure">
          <h1 className="mixta">Residential Showcase</h1>
          <ReactDescription showcaseDescription={description.showcaseDescription} />
        </div>

        {showcase.map((level) => (
          <section key={level.nodes[0].id}>
            <hr className="measure" />
            {level.nodes.map(showcase => (
              <div key={showcase.id}>
                <Link to={`/project/${showcase.project.slug}`}>
                  <GatsbyImage
                    image={showcase.project.image?.localFile?.childImageSharp?.gatsbyImageData}
                    alt={showcase.project.title}
                    className="poster"
                  /></Link>

                <div className="measure">
                  <h3 className="first-capital">{showcase.tier} Showcase</h3>
                  <ReactDescription description={showcase.description} />
                </div>

                <Attributes
                  price={showcase.price}
                  roofline={showcase.roofline}
                  trees={showcase.tree}
                />

                {/* // TODO: add smooth scroll here */}
                <h4 className="measure"><Link to="#contact">Enquire Now</Link></h4>
              </div>
            ))
            }
          </section >
        ))}

        <hr className="measure" />
      </main >

      <section>
        <h4 className="measure">Lighting types used on residential christmas displays</h4>
        <ChristmasLightsOrdered />
      </section>

      <Footer />
    </>
  )
}

export default ResidentialShowcase
