// * specifically removed from the SEO on Rom's request
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
  }

  if (props.showcaseDescription) {
    return <ReactMarkdown
      children={props.showcaseDescription.data.showcaseDescription}
      remarkPlugins={[remarkGfm]}
    />;
  }

  return null;
}

type AttributeTypes = {
  price: string;
  roofline: string;
  trees: string;
}
function Attributes({ price, roofline, trees }: AttributeTypes) {
  const sections = Object.entries({ price, roofline, trees }).map(([key, value]) => {
    return (
      <section className="attribute" key={key}>
        <h3 className="crest capitalize">{key}</h3>
        <h4 className="range">{value}</h4>
      </section>
    )
  })

  return (
    <>
      <hr className="hr-tin-soldier stork" />
      <div className="attributes">
        {sections}
      </div>
      <hr className="hr-tin-soldier stork" />
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

  const showcase = [data.gold, data.silver, data.bronze];
  const description = data.description;
  // let lightGroups = data.lightGroups;

  // console.log(description);

  return (
    <>
      <Header />
      <div className="stork">
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
        <div className="stork">
          <h1 className="mixta">Residential Showcase</h1>
          <ReactDescription showcaseDescription={description.showcaseDescription} />
          <h4><Link to="#contact">Enquire Now</Link></h4>
        </div>

        {showcase.map((level) => (
          <section key={level.nodes[0].id}>
            <hr className="stork" />
            {level.nodes.map(showcase => (
              <div key={showcase.id} className="pelican">
                <Link to={`/project/${showcase.project.slug}`}>
                  <GatsbyImage
                    image={showcase.project.image?.localFile?.childImageSharp?.gatsbyImageData}
                    alt={showcase.project.title}
                    className="poster"
                  /></Link>

                <div className="stork">
                  <h3 className="capitalize">{showcase.tier} Showcase</h3>
                  <ReactDescription description={showcase.description} />
                </div>

                <Attributes
                  price={showcase.price}
                  roofline={showcase.roofline}
                  trees={showcase.tree}
                />

                {/* // TODO: add smooth scroll here */}
                <h4 className="stork"><Link to="#contact">Enquire Now</Link></h4>
              </div>
            ))
            }
          </section >
        ))}

        <hr className="stork" />
      </main >

      <section>
        <h4 className="stork">Lighting types used on residential christmas displays</h4>
        <ChristmasLightsOrdered />
      </section>

      <Footer />
    </>
  )
}

export default ResidentialShowcase
