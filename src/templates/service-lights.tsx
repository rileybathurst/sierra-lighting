// TODO: organize by light group order especially wedding is wrong

import React from 'react';
import { Link, graphql } from "gatsby";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from '../components/header';
import Footer from '../components/footer';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/seo';
import ImageCheck from '../components/image-check';

import type { LightCardType } from '../types/light-card-type';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface ServiceLightViewTypes {
  data: {
    strapiService: {
      id: string,
      name: string,
      slug: string,
      description: {
        data: {
          description: string
        }
      }
      excerpt: string
    },
    allStrapiService: {
      nodes: {
        id: string,
        name: string,
        slug: string,
      }[]
    },

    allStrapiLight: {
      nodes: (LightCardType & {
        light_groups: {
          name: string,
          slug: string,
          excerpt: string,
          weddingOrder: number,
          xmasOrder: number,
        }[];
        residentialHero?: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            }
          },
          alternativeText: string
        },
        commercialHero?: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData
            }
          },
          alternativeText: string
        },
      })[]
    },
    allStrapiLightGroup: {
      nodes: {
        name: string,
        slug: string,
        weddingOrder: number,
        xmasOrder: number,
      }[]
    }
  }
}
const ServiceLightView = ({ data }: ServiceLightViewTypes) => {

  // sort by value
  const events = [
    'Wedding',
    'Non-wedding Events',
    'Commercial Events'
  ]

  const xmas = [
    'Residential Christmas',
    'Commercial Christmas'
  ]

  if (events.includes(data.strapiService.name)) {
    data.allStrapiLightGroup.nodes.sort((a, b) => a.weddingOrder - b.weddingOrder);
  } else if (xmas.includes(data.strapiService.name)) {
    data.allStrapiLightGroup.nodes.sort((a, b) => a.xmasOrder - b.xmasOrder);
  }

  const lightGroupSet = new Set<string>();
  for (const light of data.allStrapiLight.nodes) {
    light.light_groups.forEach((g) => {
      lightGroupSet.add(g.slug);
    });
  }
  const lightGroupArray = Array.from(lightGroupSet) as string[];

  return (
    <>
      <Header />

      <main>
        <section className='stork'>
          <h1 className='mixta aconcagua'>Lighting types for {data.strapiService.name}</h1>
          <div
            className='react-markdown'>
            <ReactMarkdown>
              {data.strapiService.description.data.description}
            </ReactMarkdown>
          </div>
          <p>
            <Link to={`/${data.strapiService.slug}`}>
              Learn more about how we can light up your {data.strapiService.name}
            </Link>
          </p>
        </section>
      </main>

      <section className='stork'>
        <hr />
        <p>Filter by type:</p>
        <ul>
          {data.allStrapiLightGroup.nodes
            .filter((group) => lightGroupArray.includes(group.slug))

            // TODO: sort by value
            /* if (data.strapiService.slug === 'wedding') {
                        .sort((a, b) => a.weddingOrder - b.weddingOrder)
                      } else if(data.strapiService.slug === 'christmas') {
                        .sort((a, b) => a.xmasOrder - b.xmasOrder)
                      } */
            // {data.strapiService.slug}
            // ? do I need to put the sort order before the return?

            .map((group) => (
              <li key={group.slug}>
                <Link to={`#${group.slug}`}>
                  {group.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </section>

      <section>
        {lightGroupArray.map((group) => (
          data.allStrapiLight.nodes
            .filter((light) => light.light_groups.map((g) => g.slug).includes(group))
            .slice(0, 1)
            .map((light) => (
              <React.Fragment key={group}>
                <div
                  className='stork'
                  id={light.light_groups[0].slug}
                >
                  <hr />
                  <h2>
                    <Link to={`/light-group/${light.light_groups[0].slug}`}>
                      {light.light_groups[0].name}
                    </Link>
                  </h2>
                </div>
                <div
                  className='deck'
                >
                  {data.allStrapiLight.nodes
                    .filter((light) => light.light_groups.map((g) => g.slug).includes(group))
                    .map((light) => (
                      <ImageCheck
                        key={light.id}
                        name={light.name}
                        slug={light.slug}
                        excerpt={light.excerpt ?? ''}
                        breadcrumb='light'
                        
                        image={light.image}
                        commercialHero={light.commercialHero}
                        residentialHero={light.residentialHero}

                        query={data.strapiService.slug}
                      />
                    ))}
                </div>
              </React.Fragment>
            ))
        ))}
      </section>

      <section className='stork'>
        <hr />
        <h2>Lights For Other Services</h2>
        <ul>
          {data.allStrapiService.nodes.map((service) => (
            <li key={service.id}>
              <Link to={`/${service.slug}/lights`}>{service.name} Lights</Link>
            </li>
          ))}
        </ul>
      </section>

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to={`/${data.strapiService.slug}`}>{data.strapiService.name} Lighting</Link></Breadcrumb>
        <Breadcrumb>Projects</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default ServiceLightView;

export const query = graphql`
  query ServiceLightsTemplate(
    $slug: String!,
  ) {

    strapiService(slug: {eq: $slug}) {
      id
      name
      slug
      description {
        data {
          description
        }
      }
    }

    allStrapiService(filter: {slug: {ne: $slug}}) {
      nodes {
        id
        name
        slug
      }
    }

    allStrapiLight(
      filter: {services: {elemMatch: {slug: {eq: $slug}}}}
      ) {
      nodes {
        ...lightCard
        light_groups {
          id
          name
          slug
          excerpt
          weddingOrder
          xmasOrder
        }

        residentialHero {
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
        
        commercialHero {
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

    allStrapiLightGroup {
      nodes {
        id
        name
        slug
        weddingOrder
        xmasOrder
      }
    }

  }
`

export const Head = ({ data }: ServiceLightViewTypes) => {
  return (
    <SEO
      title={`Lighting types for ${data.strapiService.name}`}
      description={data.strapiService.excerpt}
      url={`${data.strapiService.slug}/lights`}
      breadcrumbs={[
        {
          name: data.strapiService.name,
          item: data.strapiService.slug
        },
        {
          name: `${data.strapiService.name} Lights`,
          item: `${data.strapiService.slug}/lights`
        }
      ]}
    // TODO: image
    />
  )
}
