// TODO: holiday vs wedding flip here
// TODO: add a gallery of images from the area

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

  // console.log(data.strapiArea.projects);
  // data.strapiArea.projects ? console.log(data.strapiArea.projects.map((project) => project.image)) : null;

  let areaProjectHeros = [];
  if (data.strapiArea.projects) {
    areaProjectHeros = data.strapiArea.projects.map((project) => project.image);
    // console.log(areaProjectHeros);

    if (data.strapiArea.areas.length > 0) {
      data.strapiArea.areas.map((area) => {
        if (area.projects.length > 0) {
          area.projects.map((project) =>
            // console.log(project.image)
            areaProjectHeros.push(project.image)
          );
        }
      });
    }
  }

  // console.log(data.strapiArea.areas.map((area) => area.projects));

  // areas and sub area projects
  const areaSubAreaProjects = new Set();

  if (data.strapiArea.projects) {
    data.strapiArea.projects.map((project) =>
      areaSubAreaProjects.add(project)
    );

    if (data.strapiArea.areas.length > 0) {
      data.strapiArea.areas.map((area) => {

        if (area.projects.length > 0) {
          area.projects.map((project) =>
            areaSubAreaProjects.add(project)
          );
        }

      });
    }

  }

  // console.log(areaSubAreaProjects);
  const areaSubAreaProjectsArray = Array.from(areaSubAreaProjects);
  // console.log(areaSubAreaProjectsArray);

  return (
    <>
      <Header />

      {data.strapiArea.image ?
        <Hero
          image={data.strapiArea.image}
          gallery={areaProjectHeros}
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
          <div
            className="react-markdown"
          >
            <Markdown
            >
              {data.strapiArea?.description?.data?.description}
            </Markdown>
          </div>

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

      {areaSubAreaProjectsArray.length > 0 ?
        <section>
          <div className='stork'>
            <hr />
            <h3 >Lighting projects in we have installed in {data.strapiArea.name}</h3>
          </div>
          <div className="deck">
            {areaSubAreaProjectsArray.map((project: CardType) => (
              <Card
                key={project.id}
                {...project}
                breadcrumb='project'
              />
            ))}
          </div>
        </section>
        : null}

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

        projects {
          id
          title
          slug
          excerpt

          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }
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

      projects {
        id
        title
        slug
        excerpt

        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
        }
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

type AreasTemplateSEOTypes = {
  data: {
    strapiArea: {
      name: string;
      excerpt: string;
      slug: string;
      image: {
        localFile: {
          url: string;
        };
      };
    };
    allStrapiService: {
      nodes: {
        name: string;
      }[];
    };
    strapiAbout: {
      businessName: string;
    };
  };
}
export const Head = ({ data }: AreasTemplateSEOTypes) => {

  const servicesString = data.allStrapiService.nodes.map((service) => (
    `${service.name} light installs`
  )).join(', ');
  // console.log(servicesString);

  let subAreasString = '';
  if (data.strapiArea.areas.length > 0) {
    // console.log(data.strapiArea.areas)
    subAreasString = data.strapiArea.areas.map((area) => area.name).join(', ');
  }

  // console.log(subAreasString)

  return (
    <SEO
      title={`${data.strapiArea.name} professional Christmas, Wedding and event light installation`}
      description={`Professional ${servicesString} installations in ${data.strapiArea.name}${subAreasString ? `, ${subAreasString}` : null}.`}
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