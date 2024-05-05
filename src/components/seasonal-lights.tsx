// TODO: do more than justresidential

import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby';

import Card from "./card";
import { CardType } from "../types/card";

const SeasonalLights = () => {

  const data = useStaticQuery(graphql`
    query SeasonalLightsQuery {
      strapiSeason {
        wedding
      }

      wedding: allStrapiService(filter: {slug: {eq: "wedding"}}) {
        nodes {
          slug
          featured_lights {
            name
            slug
            excerpt

            image {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }

      holiday: allStrapiService(filter: {slug: {eq: "residential"}}) {
        nodes {
          slug
          featured_lights {
            name
            slug
            excerpt

            image {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }

  `)

  if (data.strapiSeason.wedding === true) {

    console.log(data.wedding);

    return (
      <section>
        <h3><Link to="/wedding/lights">Wedding Lights</Link></h3>
        <p>Our wedding lights are perfect for your special day. We offer a variety of lights to choose from.</p>
        <div className="">
          {data.wedding.nodes.map((service) => (
            service.featured_lights.map((light: CardType) => (
              <Card
                card={light}
                breadcrumb="light"
              />
            ))
          ))}
        </div>
      </section>
    )
  } else {
    return (
      <section>
        <h3><Link to="/christmas-lights">Christmas Lights</Link></h3>
        <p>Our holiday lights are perfect for your home or business. We offer a variety of lights to choose from.</p>
        <div className="deck">
          {data.holiday.nodes.map((service: CardType) => (
            service.featured_lights.map((light: CardType) => (
              <Card
                card={light}
                breadcrumb="light"
              />
            ))
          ))}
        </div>
      </section>
    )
  }
}

export default SeasonalLights