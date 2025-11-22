// * removed from /static/robots.txt
// ? whats the type for strapi?

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import ReactMarkdown from "react-markdown";
import Start from "../../components/start";
import Card from "../../components/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import type { CardType } from "../../types/card-type";
import { SEO } from "../../components/seo";
import type { LightGroupType } from "../../types/light-group-type";

type HoaPageQueryData = {
  allStrapiLight: {
    nodes: Array<CardType & { light_groups: LightGroupType[] }>;
  };
};

type CardTypesWithLightGroups = CardType & {
  light_groups: LightGroupType[];
};

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
    interface LightGroupType {
      slug: string;
      xmasOrder: number;
    }

    light.light_groups.forEach((group: LightGroupType) => {
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
          <div className='react-markdown'>
            <ReactMarkdown>
              {/* // TODO: move to strapi if we use this */}
              Sierra Lighting specializes in creating stunning christmas or holiday lighting displays for Homeowner Associations (HOAs). Our expert team transforms neighborhoods into festive wonderlands, illuminating trees, entrances, and common areas with beautiful, custom-designed lighting. We bring holiday cheer to subdivisions, enhancing the community spirit and making the darker months brighter and more joyful. With a focus on quality and creativity, Sierra Lighting ensures that every display is both magical and memorable, providing a warm and welcoming atmosphere for residents and visitors alike.
            </ReactMarkdown>
          </div>
          <Start path='hoa' />
        </div>

        < hr className="stork" />
      </main >

      <section>
        {/* // ? why is this here its just repeating whats above */}
        <h4 className="stork">Lighting types used on Residential HOA displays</h4>

        {/* // * map the array but then pull the data from the first (key)light and use that to fill in the info  */}
        {lightGroupArray
          .map((group) => (

            data.allStrapiLight.nodes
              .filter((keyLight: CardTypesWithLightGroups) => keyLight.light_groups[0].slug === (group.slug))
              .slice(0, 1)
              .map((keyLight: CardTypesWithLightGroups) => (
                <>
                  <section
                    key={keyLight.light_groups[0].id}
                    className="stork"
                  >
                    <hr />
                    <h3>
                      <Link to={`/lights#${keyLight.light_groups[0].slug}`}>
                        {keyLight.light_groups[0].name}
                      </Link>
                    </h3>
                    <p key={keyLight.id}>{keyLight.light_groups[0].excerpt}</p>
                  </section>

                  <section
                    key={keyLight.id}
                    className="deck">
                    {data.allStrapiLight.nodes
                      .filter((light: CardTypesWithLightGroups) => light.light_groups[0].slug === (group.slug))
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
        <Breadcrumb>Homne Owners Associations</Breadcrumb>
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