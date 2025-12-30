// TODO: needs testimonials per service
// TODO: add top level areas
// Couple biome errors that im not sure how to get rid of yet
// * vendors are hard coded to only show on wedding service page for now 
// which is kinda messy as its always queried so reducing that work might be nice

import React from 'react';
import { graphql, Link, Script } from 'gatsby'
import MuxPlayer from '@mux/mux-player-react';
import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Markdown from "react-markdown";
import Card from '../components/card';
import type { CardType } from '../types/card-type';
import Start from '../components/start';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { GatsbyImageType } from '../types/gatsby-image';
import type VideoTypes from '../types/video-types';

interface ServiceTypes {
  data: {
    strapiService: {
      name: string;
      excerpt: string;
      slug: string;
      description: { data: { description: string } };
      after_the_triptych: { data: { after_the_triptych: string } };
      projects: CardType[];
      triptych: { id: React.Key; localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } } }[];
      featured_lights: CardType[];
      videoMux: string;
      lights: { id: string }[]; // Add the lights property
      lookbookCover: GatsbyImageType;
      venues: CardType[];
      vendors: CardType[];
      videos: VideoTypes[];
    }
    allStrapiProcess: {
      nodes: {
        id: React.Key;
        name: string;
        markdown: { data: { markdown: string } };
      }[]
    };
    allStrapiVenue: { nodes: CardType[] };
    allStrapiVendor: { nodes: CardType[] };
    allStrapiLookbook: { nodes: { id: string }[] };

    strapiAbout: {
      businessName: string;
      url: string;
    }
    allStrapiArea: {
      nodes: {
        id: React.Key;
        name: string;
        state: string;
        slug: string;
        areas: {
          id: React.Key;
          name: string;
        }[]
      }[]
    }
  }
}

type SortTypes = {
  a: {
    areas: {
      id: React.Key;
      name: string;
    }[]
  },
  b: {
    areas: {
      id: React.Key;
      name: string;
    }[]
  }
};

interface BaseTypes {
  projects: CardType[];
  venues: CardType[];
  vendors: CardType[];
}
function Base({ projects, venues, vendors }: BaseTypes) {

  // order the projects by updatedAt
  projects.sort((a, b) => {
    const dateA = new Date(a.updatedAt ?? 0);
    const dateB = new Date(b.updatedAt ?? 0);
    return dateB.getTime() - dateA.getTime();
  });

  /* const emptyCard = {
    id: '',
    slug: '',
    excerpt: '',
    breadcrumb: '',
    title: '',
    name: '',
    image: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: {
            images: {
              fallback: {
                src: ''
              }
            }
          }
        }
      },
      alternativeText: ''
    }
  }; */

  // empty card slots
  // * I know this has type issues
  const base: { card: CardType | Record<string, never>, title: boolean, breadcrumb: string, order: number, id: React.Key }[] = [
    { card: {} as CardType, title: false, breadcrumb: '', order: 0, id: '' },
    { card: {} as CardType, title: false, breadcrumb: '', order: 1, id: '' },
    { card: {} as CardType, title: false, breadcrumb: '', order: 2, id: '' },
  ];

  // console.log(base);

  // wrap everything as they are always passed but often have no length
  if (projects && venues && vendors) {

    // * the heirarchy is projects, vendors, venues

    // first create the 3 spots as projects if possible
    // if projects has something the first one has a project breadcrumb
    if (projects.length > 0) {
      base[0].card = projects[0];
      base[0].title = true;
      // TODO: this has an ugly hard code to fix the link
      base[0].breadcrumb = 'project';
      base[0].order = 0;
      // this doesnt work on gatsby build
      // base[0].id = self.crypto.randomUUID();

    }

    // if projects has atleast 2 the second one has a project breadcrumb
    if (projects.length > 1) {
      base[1].card = projects[1];
      base[1].breadcrumb = 'project';
      base[1].order = 1;
      // base[1].id = self.crypto.randomUUID();
    }

    // if projects has atleast 3 the third one has a project breadcrumb
    if (projects.length > 2) {
      base[2].card = projects[2];
      base[2].breadcrumb = 'project';
      base[2].order = 2;
      // base[2].id = self.crypto.randomUUID();
    }

    // * if has projects and vendors
    if (vendors.length > 0 && venues.length > 0) {

      // put the vendor in the second spot
      base[1].card = vendors[0];
      base[1].title = true;
      base[1].breadcrumb = 'vendor';
      // base[1].id = self.crypto.randomUUID();

      // put the venue in the third spot
      base[2].card = venues[0];
      base[2].title = true;
      base[2].breadcrumb = 'venue';
      // base[2].id = self.crypto.randomUUID();

      // if has projects and vendors but no venues
      // put the vendor in the third spot
    } else if (vendors.length > 0) {
      base[2].card = vendors[0];
      base[2].title = true;
      base[2].breadcrumb = 'vendor';
      // base[2].id = self.crypto.randomUUID();

    } else if (venues.length > 0) {
      // if has projects and venues but no vendors
      // put the venue in the second spot
      base[1].card = venues[0];
      base[1].title = true;
      base[1].breadcrumb = 'venue';
      // base[1].id = self.crypto.randomUUID();
    }

    return (
      <div className='pelican service-deck'>
        {base.map((item) => (
          <React.Fragment key={item.order}>
            {item.title ? (
              <h4
                key={`${item.id}-title`}
                className={`capitalize project-title ${item.breadcrumb}-title`}
              >
                <Link to={`/${item.breadcrumb}${item.breadcrumb === 'project' ? 's' : ''}`}>
                  {item.breadcrumb}{item.breadcrumb === 'project' ? 's' : ''}
                </Link>
              </h4>
            ) : null}
            {item.card?.id ? (
              <div
                key={`${item.id}-card`}
                className='service-card'
              >
                <Card
                  key={`${item.id}-card`}
                  {...(item.card as CardType)}
                  breadcrumb={item.breadcrumb}
                />
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    )
  }

  if (projects && venues) {

    return (
      <div className='pelican service-deck'>
        {projects.slice(0, 2).map((project, index) => (
          <React.Fragment key={project.id}>
            <div
              className='service-card'
            >
              {index === 0 ? (
                <h4
                  className='capitalize project-title project-title'
                >
                  <Link to="/projects">
                    Projects
                  </Link>
                </h4>
              ) : null}
            </div>
            <Card
              key={project.id}
              {...project}
              breadcrumb='project'
            />
          </React.Fragment>
        ))}

        {venues.slice(0, 1).map((venue) => (
          <React.Fragment key={venue.id}>
            <div
              className='service-card'
            >
              <h4
                className='capitalize venue-title venue-title'
              >
                <Link to="/venues">
                  Venues
                </Link>
              </h4>
            </div>
            <Card
              key={venue.id}
              {...venue}
              breadcrumb='venue'
            />
          </React.Fragment>
        ))}
      </div>
    )
  }

  if (projects && !venues?.length && !vendors) {

    return (
      <div className='pelican service-deck'>
        {projects.slice(0, 3).map((project, index) => (
          <React.Fragment key={project.id}>
          <div
            className='service-card'
          >
            {index === 0 ? (
              <h4
                className='capitalize project-title project-title'
              >
                <Link to="/projects">
                  Projects
                </Link>
              </h4>
            ) : null}
            </div>
            <Card
              key={project.id}
              {...project}
              breadcrumb='project'
            />
          </React.Fragment>
        ))}
      </div>
    )
  }

  return null;
}

const ServiceView = ({ data }: ServiceTypes) => {

  const adj: { [key: string]: string } = {
    wedding: 'special day',
    residential: 'home',
    commercial: 'business',
    'commercial-events': 'business',
    'social_events': 'event',
  };
  // patio: 'patio'
  const adjective = adj[data.strapiService.slug];

  return (
    <>
      <Header />
      <main>
        {data.strapiService.videoMux ?
          <MuxPlayer
            streamType="on-demand"
            playbackId={data.strapiService.videoMux}
            className='hero-video'
          />
          : null
        }

        <section className="stork">
          <h1 className='mixta'>
            {/* // TODO: needs a clamp on the size */}
            {data.strapiService.name} Lighting Installation
          </h1>

          <div className='react-markdown'>
            <Markdown>
              {data.strapiService.description.data.description}
            </Markdown>
          </div>
          <Start
            className="button--left-align"
            path={data.strapiService.slug}
          />
        </section>

        {/*         <section className="triple">
          {data.strapiService?.triptych?.map((image) => (
            <div key={image.id}>
              <GatsbyImage image={image?.localFile?.childImageSharp?.gatsbyImageData}
                alt=""
                objectFit="fill"
              />
            </div>
          ))}
        </section> */}
      </main >

      <section className="lights">

        <hr className='stork' />

        <div className='deck'>
          {data.strapiService.featured_lights.map((light: CardType) => (
            <Card
              key={light.id}
              {...light}
              breadcrumb='light'
            />
          ))}
        </div>

        <div className="stork">
          <h2 className="kilimanjaro">
            <Link to={`/${data.strapiService.slug}/lights`}>
              {data.strapiService.lights.length} {data.strapiService.name} lighting styles explore them here
            </Link>
          </h2>

        </div>

        {data.allStrapiLookbook?.nodes.length > 0 ?
          <>
            <hr className='pelican' />
            <Link to={`/${data.strapiService.slug}/lookbook`} className='poster ratio-16-9'>
              <GatsbyImage
                image={data.strapiService.lookbookCover?.localFile.childImageSharp.gatsbyImageData}
                alt={data.strapiService.lookbookCover?.alternativeText || `${data.strapiService.slug} Lookbook`}
                objectPosition="center"
              />
              <h3>Browse our {new Date().getFullYear()} {data.strapiService.name} Lookbook</h3>
            </Link>
          </>
          : null}
      </section >

      <section className='process stork backed bb'>
        <hr />
        <h2>Our {data.strapiService.name} lighting Process</h2>
        <p>
          Ready to bring your vision to life? Get started with a free estimate today and let us illuminate your {adjective} with an unforgettable lighting display!
        </p>
        <hr />
        <ol>
          {data.allStrapiProcess.nodes.map((process) => (
            <li key={process.id}>
              <span className="ol-title">{process.name}</span>
              <div className='react-markdown'>
                <Markdown>
                  {process.markdown.data.markdown}
                </Markdown>
              </div>
            </li>
          ))}
        </ol>
        <p>
          <Link to="/faqs">
            Learn more about our process on our FAQ page
          </Link>
        </p>
        <hr />
      </section>

      {data.strapiService.after_the_triptych.data.after_the_triptych !== '' ?
        <div className='consultant stork'>
          <h3 className='kilimanjaro'>Have you ever noticed how much lighting can affect the feeling of space?</h3>

          <div className='react-markdown'>
            <Markdown>
              {data.strapiService.after_the_triptych.data.after_the_triptych}
            </Markdown>
          </div>
        </div>
        : null
      }

      {/* // TODO: this needs a design maybe from the home page but thats pretty large and heavy */}
      <section className='stork'>
        <hr />
        <h3 className='elbrus'>We install {data.strapiService.name} lighting in and around</h3>
        <ul>
          {data.allStrapiArea.nodes
            .sort((a: SortTypes['a'], b: SortTypes['b']) => b.areas.length - a.areas.length) // Sort by the number of area.areas
            .map((area) => (
              <li key={area.id}>
                <Link to={`/areas/${area.slug}`}>
                  {area.name}, <span className='capitalize'>{area.state}</span>
                  <span className='sr-only'>{data.strapiService.name} Lighting Installation</span>
                </Link>
                {area.areas.length > 0 ?
                  <ul
                    className='sub-area-ul'
                  >
                    {area.areas.map((subArea) => (
                      <li key={subArea.id}>
                        {subArea.name} <span className='sr-only'>{data.strapiService.name} Lighting Installation</span>
                      </li>
                    ))}
                  </ul>
                  : null}
              </li>
            ))}
        </ul>
      </section>

      {
        data.strapiService.projects || data.strapiService.venues || data.strapiService.vendors ?
          <>
            <hr className='pelican' />
            <Base
              projects={data.strapiService?.projects}
              venues={data.allStrapiVenue?.nodes}
              vendors={data.strapiService.slug === 'wedding' ? data.allStrapiVendor?.nodes : data.strapiService?.vendors}
            />
          </>
          : null
      }

      < Footer />

    </>
  );
};

export default ServiceView;

export const query = graphql`
  query ServiceTemplate(
    $slug: String!,
  ) {
    strapiService(slug: {eq: $slug}) {
      id
      name
      excerpt
      slug

      description {
          data {
          description
        }
      }

      after_the_triptych {
        data {
          after_the_triptych
        }
      }

      projects {
        updatedAt
        ...projectCard
      }

      triptych {
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }

      featured_lights {
        ...lightCard
      }

      lights {
        id
      }

      videoMux

      videos {
        name
        mux
        description
        publishedAt
        thumbnailTime
      }

      lookbookCover {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
    }

    allStrapiProcess(filter: {services: {elemMatch: {slug: {eq: $slug}}}}) {
      nodes {
        ...process
      }
    }

    allStrapiVenue(filter: {services: {elemMatch: {slug: {eq: $slug}}}}, limit: 1) {
      nodes {
        ...venueCard
      }
    }

    allStrapiVendor(limit: 1) {
      nodes {
        ...vendorCard
      }
    }

    allStrapiLookbook(filter: {service: {slug: {eq: $slug}}}) {
      nodes {
        id
      }
    }

    strapiAbout {
      url
      businessName
    }

    allStrapiArea(filter: {featured: {eq: true}}) {
      nodes {
        id
        name
        state
        slug
        areas {
          id
          name
        }
      }
    }

  }
`

// Header
// Video (if exists)
// Description
// Triptych
// Process
// Lights - cards

// ? Consultant
// ? maybe just after typtich thats sort of what we have at the moment?

// Projects - cards
// ? Venues - cards
// ? Vendors - cards

// wedding the bottom 3 cards might be one of each
// or atleast if has?
// projects goes last as it fills everything in

// Footer

export const Head = ({ data }: ServiceTypes) => {

  const sanitazeDescription = data.strapiService.description.data.description.replace(/"/g, " inches");

  const descriptionKeyWords = `Creating professional ${data.strapiService.name} lighting installations including ${data.strapiService.featured_lights.map((light: CardType) => light.name).join(', ')} in ${data.allStrapiArea.nodes.map((area) => area.name).join(', ')}`;

  return (
    <SEO
      title={`${data.strapiService.name} Lighting Installation`}
      // TODO: in the top level areas
      description={descriptionKeyWords}
      url={data.strapiService.slug}
      videos={data.strapiService.videos}
    >
      <Script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          "name": "${data.strapiService.name} lighting installation",
          "description": "${sanitazeDescription}",
          "url": "${data.strapiAbout.url}/${data.strapiService.slug}"
        }
      `}
      </Script>
    </SEO>
  )
}