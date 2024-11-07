// * specifically removed from the SEO on Rom's request in /static/robots.txt
// TODO: create these progamatically for all services if they have tiers but thats just another level

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import ReactMarkdown from "react-markdown";
import Start from "../../components/start";
import Card from "../../components/card";
import Header from "../../components/header";
import Footer from "../../components/footer";

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
      allStrapiShowcase(
        filter: {service: {slug: {eq: "residential"}}}
      ) {
        nodes {
          ...showcase
        }
      }

      strapiService(slug: {eq: "residential"}) {
        showcaseDescription {
          data {
            showcaseDescription
          }
        }
      }

      allStrapiLight(
        sort: {xmasOrder: ASC}
        filter: {
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
        }) {
          nodes {
            ...lightCard
            light_groups {
              ...lightGroup
            }
          }
        }

    }
  `);

  const showcaseSet = new Set();
  for (const showcase of data.allStrapiShowcase.nodes) {
    showcaseSet.add(showcase.tier)
  }
  const showcaseArray = Array.from(showcaseSet);

  const lightGroupSet = new Set();
  for (const light of data.allStrapiLight.nodes) {
    light.light_groups.map((group) => {
      lightGroupSet.add(group.slug)
    })
  }
  const lightGroupArray = Array.from(lightGroupSet);

  // console.log(data.allStrapiLight.nodes.map((light) => light));
  // console.log(data.allStrapiLight.nodes.map((light) => light.light_groups));
  // console.log(lightGroupArray);

  // TODO: This page breaks if a light doesnt have a group do a better of console logging that

  return (
    <>
      <Header />

      <main>
        <div className="stork">
          <h1 className="mixta">Residential Showcase</h1>
          <ReactMarkdown className='react-markdown'>
            {data.strapiService.showcaseDescription.data.showcaseDescription}
          </ReactMarkdown>
          {/* // TODO: start */}
          <h4><Link to="#contact">Enquire Now</Link></h4>
        </div>

        {showcaseArray.map((tier) => (
          data.allStrapiShowcase.nodes
            .filter((showcase) => showcase.tier === tier)
            .map((showcase) => (
              <div key={tier.id} className="pelican">
                <Link to={`/project/${showcase.project.slug}`}>
                  <GatsbyImage
                    image={showcase.project.image?.localFile?.childImageSharp?.gatsbyImageData}
                    alt={showcase.project.title}
                    className="poster"
                  /></Link>

                <div className="stork">
                  <h3 className="capitalize">{showcase.tier} Showcase</h3>
                  <ReactMarkdown className='react-markdown'>
                    {showcase.description.data.description}
                  </ReactMarkdown>
                </div>

                <Attributes
                  price={showcase.price}
                  roofline={showcase.roofline}
                  trees={showcase.tree}
                />
                <Start />
              </div>
            ))
        ))}

        < hr className="stork" />
      </main >

      <section>
        <h4 className="stork">Lighting types used on residential christmas displays</h4>

        {lightGroupArray.map((group) => (
          data.allStrapiLight.nodes
            .filter((light) => light.light_groups[0].slug === (group))
            .slice(0, 1)
            .map((light) => (
              <>
                <section
                  key={light.id}
                  id={light.light_groups[0].slug}
                  className="stork"
                >
                  <hr />
                  <h3>
                    <Link to={`/lights#${light.light_groups[0].slug}`}>
                      {light.light_groups[0].name}
                    </Link>
                  </h3>
                  <p key={light.id}>{light.light_groups[0].excerpt}</p>
                </section>

                <section
                  key={light.id}
                  className="deck">
                  {data.allStrapiLight.nodes
                    .filter((light) => light.light_groups[0].slug === (group))
                    .map((light) => (
                      <Card
                        key={light.id}
                        {...light}
                        breadcrumb='light'
                      />
                    ))}
                </section>
              </>
            ))
        ))}
      </section>

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/residential/">Residential</Link></Breadcrumb>
        <Breadcrumb>Showcase</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  )
}

export default ResidentialShowcase

// TODO: needs SEO for the title