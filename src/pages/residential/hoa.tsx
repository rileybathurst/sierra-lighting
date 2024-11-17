// * removed from /static/robots.txt

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import ReactMarkdown from "react-markdown";
import Start from "../../components/start";
import Card from "../../components/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import type { CardType } from "../../types/card-type";
import { SEO } from "../../components/seo";

function HoaPage() {

  const data = useStaticQuery(graphql`
    query HoaQuery {

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

  type slugAndOrderType = {
    slug: string,
    xmasOrder: number
  }
  const lightGroupSet: slugAndOrderType[] = [];
  const seenSlugs = new Set();

  for (const light of data.allStrapiLight.nodes) {
    light.light_groups.map((group) => {
      if (!seenSlugs.has(group.slug)) {
        lightGroupSet.push({ slug: group.slug, xmasOrder: group.xmasOrder });
        seenSlugs.add(group.slug);
      }
    });
  }

  const lightGroupArray = lightGroupSet.sort((a, b) => a.xmasOrder - b.xmasOrder);

  return (
    <>
      <Header />

      <main>
        <div className="stork">
          <h1 className="mixta">Residential HOAs</h1>
          <ReactMarkdown className='react-markdown'>
            {/* // TODO: move to strapi if we use this */}
            Sierra Lighting specializes in creating stunning holiday lighting displays for Homeowner Associations (HOAs). Our expert team transforms neighborhoods into festive wonderlands, illuminating trees, entrances, and common areas with beautiful, custom-designed lighting. We bring holiday cheer to subdivisions, enhancing the community spirit and making the darker months brighter and more joyful. With a focus on quality and creativity, Sierra Lighting ensures that every display is both magical and memorable, providing a warm and welcoming atmosphere for residents and visitors alike.
          </ReactMarkdown>
          <Start path='hoa' />
        </div>

        < hr className="stork" />
      </main >

      <section>
        <h4 className="stork">Lighting types used on Residential HOA displays</h4>

        {lightGroupArray
          .map((group) => (
            // TODO: cardType + lightGroupType
            data.allStrapiLight.nodes
              .filter((light: CardType) => light.light_groups[0].slug === (group.slug))
              .slice(0, 1)
              .map((light: CardType) => (
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
                      .filter((light) => light.light_groups[0].slug === (group.slug))
                      .map((light: CardType) => (
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

export default HoaPage


export const Head = () => {
  return (
    <SEO
      title='Residential Home Owners Associations Christmas Lights'
    />
  )
}