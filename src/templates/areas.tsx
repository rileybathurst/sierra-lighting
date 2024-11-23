// TODO: holiday vs wedding flip here

import React from 'react';
import { graphql, Link, Script } from 'gatsby'
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

import Hero from "../components/hero";
import StateAbbreviation from "../components/state-abbreviation";
import Markdown from "react-markdown";
import Card from '../components/card';
import type { CardType } from '../types/card-type';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import Start from '../components/start';
import Season from '../components/season';
import { GatsbyImage } from 'gatsby-plugin-image';


// this is no longer right as there might only be sub venues
// if (venues.length !== 0) {
interface VenuesProps {
  name: string;
  venues: CardType[];
  areas: SubAreasType[];
}

function Venues({ name, venues, areas }: VenuesProps) {

  const subVenues = [];
  areas.map((area) => {
    if (area.venues.length > 0) {
      subVenues.push(area.venues);
    }
  });

  // console.log(subVenues);
  if (venues.length || subVenues.length > 0) {
    return (
      <>
        <div className="stork">
          <hr />
          {/* // TODO: this is bold in a way it shouldnt be */}
          <h3 className='elbrus'>Wedding Venues in {name} we create lighting for</h3>
        </div>

        <div className="deck">
          {venues.map((venue: CardType) => (
            <Card
              key={venue.id}
              {...venue}
              breadcrumb='venue'
            />
          ))}

          {subVenues.length > 0 ?
            areas.map((area) => (
              area.venues.length >= 1 ?
                area.venues.map((venue: CardType) => (
                  <Card
                    key={venue.id}
                    {...venue}
                    breadcrumb='venue'
                  />
                ))
                : null
            ))
            : null
          }

        </div>
      </>
    );
  }
  return null
}

type AreasTemplateTypes = {
  data: {
    strapiArea: {
      id: React.Key;
      name: string;
      tagline: string;
      description: {
        data: {
          description: string;
        };
      };
      state: 'california' | 'nevada';
      slug: string;
      image: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
          url: string;
        };
        alternativeText: string;
      };
      areas: SubAreasType[];
      venues: CardType[];
    };
    strapiAbout: {
      businessName: string;
    };
  };
};
const AreasTemplate = ({ data }: AreasTemplateTypes) => {

  return (
    <>
      <Header />

      {data.strapiArea.image ?
        <Hero
          image={data.strapiArea.image}
        />
        : null}
      <main>

        <article className="stork">
          <h2 className="crest">{data.strapiArea.tagline}</h2>
          <h1 className="range">
            {data.strapiArea.name},&nbsp;
            <StateAbbreviation state={data.strapiArea.state} />
          </h1>
          <hr />
          <h3 className='kilimanjaro'>Ready to work with us</h3>
          <Start
            className='button--left-align'
            path={`areas-${data.strapiArea.slug}`}
          />
          <Markdown
            className="react-markdown"
          >
            {data.strapiArea?.description?.data?.description}
          </Markdown>

        </article >

        {/* // TODO: make this a second column on a larger screen */}
        {data.strapiArea.areas.length > 0 ?
          <div
            key={data.strapiArea.name}
            className="stork"
          >
            <hr />
            <p className='elbrus'>Regions we light in {data.strapiArea.name}</p>
            <ul className='subareas'>
              {data.strapiArea.areas.map((area) => (
                <li
                  key={area.name}
                >
                  <h2 className='elbrus'>{area.name}</h2>
                  {/* <p>{area.excerpt}</p> */}

                </li>
              ))}
            </ul>
          </div>
          : null
        }
        <hr />
        <h3 >Lighting installation services we provide in {data.strapiArea.name}</h3>
      </main >

      <div className={`away-services ${Season()}`}>
        {data.allStrapiService.nodes.map((service: ServiceTypes) => (
          <Link
            key={service.id}
            to={`/${service.slug}`}
            className={`poster ${service.slug}`}
          >
            {service.hero_light ?
              <>
                <GatsbyImage image={service.hero_light.localFile.childImageSharp.gatsbyImageData}
                  alt={service.hero_light.alternativeText || service.name}
                />
                <span>{service.name} Lighting</span>
              </>
              : null}
          </Link>
        ))}
      </div>

      <div className='stork'>
        <hr />
        <Start
          className='button--left-align'
          path={`areas-services-${data.strapiArea.slug}`}
        />
      </div>

      <Venues
        name={data.strapiArea.name}
        venues={data.strapiArea.venues}
        areas={data.strapiArea.areas}
      />

      {/* // TODO: where in the state do we work */}

      <hr className='stork' />

      <Breadcrumbs>
        <Breadcrumb><Link to="/areas/">Areas</Link></Breadcrumb>
        <Breadcrumb>{data.strapiArea.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default AreasTemplate;

export const query = graphql`
  query AreasTemplate(
    $slug: String!
  ) {
    strapiArea(slug: {eq: $slug}) {
      id
      name
      tagline
      excerpt

      description {
        data {
          description
        }
      }
      
      state
      slug

      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [960, 1840]
                width: 960
            )
          }
          url
        }
        alternativeText
      }

      areas {
        name
        slug
        excerpt

        venues {
          id
          name
          slug
          excerpt

          venueImage {
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

        project {
          ...projectCard
        }
      }

      venues {
        id
        name
        slug
        excerpt

        venueImage {
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

      project {
        ...projectCard
      }
    }

    strapiAbout {
      businessName
    }

    allStrapiService {
      nodes {
        id
        name
        slug
        hero_light {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }

        hero_dark {
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
`

export const Head = ({ data }) => {

  const servicesString = data.allStrapiService.nodes.map((service: ServiceTypes) => (
    `${service.name} lighting'`
  )).join(', ');
  // console.log(servicesString);

  // console.log(data.strapiArea.project); // ! is this a single needs to be updated
  // console.log(data.strapiArea.areas.map((area) => area.project));


  return (
    <SEO
      title={`${data.strapiArea.name} professional Christmas, Wedding and event lighting installation`}
      description={`${data.strapiArea.excerpt} ${data.strapiAbout.businessName} create professional ${servicesString} installations in ${data.strapiArea.name}.`}
      image={data.strapiArea?.image?.localFile?.url}
      breadcrumbs={[
        {
          name: 'Areas',
          item: 'areas'
        }, {
          name: data.strapiArea.name,
          item: `areas/${data.strapiArea.slug}`
        }
      ]}
    >
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${data.strapiAbout.businessName}",
            "areaServed": {
              "@type": "Place",
              "name": "${data.strapiArea.name}"
            }
          }
        `}
      </Script>
    </SEO >
  )
}