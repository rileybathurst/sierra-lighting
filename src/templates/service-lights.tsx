// nice start but now organize by light group

import React from 'react';
import { Link, graphql } from "gatsby";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from '../components/header';
import Footer from '../components/footer';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/seo';
import Card from '../components/card';

const ServiceLightView = ({ data }) => {

  // sort by value
  const events = [
    'Wedding',
    'Non-wedding Events',
    'Commercial Events'
  ]
  // if (data.strapiService.name === 'Wedding') {
  /*   if (events.includes(data.strapiService.name)) {
      groups.sort((a, b) => a[0].weddingOrder - b[0].weddingOrder);
    } */

  const xmas = [
    'Residential Christmas',
    'Commercial Christmas'
  ]
  /*   if (xmas.includes(data.strapiService.name)) {
      groups.sort((a, b) => a[0]?.xmasOrder - b[0]?.xmasOrder);
    } */


  const lightGroupSet = new Set();
  for (const light of data.allStrapiLight.nodes) {
    light.light_groups.map((group) => {
      lightGroupSet.add(group.slug)
    })
  }
  const lightGroupArray = Array.from(lightGroupSet);

  return (
    <>
      <Header />

      <main>
        <section className='stork'>
          <h1 className='mixta aconcagua'>{data.strapiService.name} Lighting</h1>
          <ReactMarkdown
            className='react-markdown'>
            {data.strapiService.description.data.description}
          </ReactMarkdown>
          <p>
            <Link to={`/${data.strapiService.slug}`}>
              Learn more about how we can light up your {data.strapiService.name}
            </Link>
          </p>
        </section>
      </main>

      <section>
        {lightGroupArray.map((group) => (
          data.allStrapiLight.nodes
            .filter((light) => light.light_groups.map((group) => group.slug).includes(group))
            .slice(0, 1)
            .map((light) => (
              <>
                <div
                  key={group}
                  className='stork'
                >
                  <hr />
                  <h2>
                    <Link to={`/light-group/${light.light_groups[0].slug}`}>
                      {light.light_groups[0].name}
                    </Link>
                  </h2>
                  <p>{light.light_groups[0].excerpt}</p>
                </div>
                <div className='deck'>
                  {data.allStrapiLight.nodes
                    .filter((light) => light.light_groups.map((group) => group.slug).includes(group))
                    .map((light) => (
                      <Card
                        key={light.id}
                        {...light}
                        breadcrumb='light'
                      />
                    ))}
                </div>
              </>
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
        <Breadcrumb>Lights</Breadcrumb>
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
            name
            slug
            excerpt
            weddingOrder
            xmasOrder
          }
      }
    }


  }
`

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiService.name} Lights`}
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
