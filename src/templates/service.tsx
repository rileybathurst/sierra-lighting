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
import Lookbook from '../components/lookbook';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface ServiceTypes {
  data: {
    strapiService: {
      name: string;
      excerpt: string;
      slug: string;
      description: { data: { description: string } };
      after_the_triptych: { data: { after_the_triptych: string } };
      projects: CardType[];
      triptych: { id: string; localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } } }[];
      featured_lights: CardType[];
      videoMux: string;
      venues: CardType[];
      vendors: CardType[];
    }
    allStrapiProcess: {
      nodes: {
        id: string;
        name: string;
        markdown: { data: { markdown: string } };
      }[]
    };
    allStrapiVenue: { nodes: CardType[] };
    allStrapiVendor: { nodes: CardType[] };
  }
}

interface BaseTypes {
  projects?: {
    breadcrumb: string;
    order: number;
    card: CardType[];
  }[];
  venues?: {
    card: CardType[];
    breadcrumb: string;
    order: number;
  }[];
  vendors?: {
    card: CardType[];
    breadcrumb: string;
    order: number;
  }[];
}
function Base({ projects, venues, vendors }: BaseTypes) {
  const base = [
    { card: {}, title: false, breadcrumb: '', order: 0 },
    { card: {}, title: false, breadcrumb: '', order: 1 },
    { card: {}, title: false, breadcrumb: '', order: 2 },
  ];

  // wrap everything as they are always passed but often have no length
  if (projects && venues && vendors) {

    // * the heirarchy is projects, vendors, venues

    // first create the 3 spots as projects if possible
    // if projects has something the first one has a project breadcrumb
    if (projects.length > 0) {
      base[0].card = projects[0];
      base[0].title = true;
      base[0].breadcrumb = 'projects';
      base[0].order = 0;
    }

    // if projects has atleast 2 the second one has a project breadcrumb
    if (projects.length > 1) {
      base[1].card = projects[1];
      base[1].breadcrumb = 'projects';
      base[1].order = 1;
    }

    // if projects has atleast 3 the third one has a project breadcrumb
    if (projects.length > 2) {
      base[2].card = projects[2];
      base[2].breadcrumb = 'projects';
      base[2].order = 2;
    }

    // if has projects and vendors
    if (vendors.length > 0 && venues.length > 0) {

      // put the vendor in the second spot
      base[1].card = vendors[0];
      base[1].title = true;
      base[1].breadcrumb = 'vendor';

      // put the venue in the third spot
      base[2].card = venues[0];
      base[2].title = true;
      base[2].breadcrumb = 'venue';

      // if has projects and vendors but no venues
      // put the vendor in the third spot
    } else if (vendors.length > 0) {
      base[2].card = vendors[0];
      base[2].title = true;
      base[2].breadcrumb = 'vendor';
    } else if (venues.length > 0) {
      // if has projects and venues but no vendors
      // put the venue in the second spot
      base[1].card = venues[0];
      base[1].title = true;
      base[1].breadcrumb = 'venue';
    }

    // console.log(base);

    return (
      <div className='pelican service-deck' >
        {base.map((item) => (
          <>
            {item.title ?
              <h4
                key={item.breadcrumb}
                className={`capitalize project-title ${item.breadcrumb}-title`}
              >
                <Link to={`/${item.breadcrumb}`}>
                  {item.breadcrumb}
                </Link>
              </h4>
              : null
            }
            {/* // ! this has a problem with css colapsing the subgrid */}
            {item.card.id ?
              <Card
                key={item.card.id}
                {...item.card}
                breadcrumb={item.breadcrumb}
              />
              : null}
          </>
        ))
        }
      </div>
    )
  }
}

const ServiceView = ({ data }: ServiceTypes) => {

  const adj: { [key: string]: string } = {
    wedding: 'special day',
    residential: 'home',
    commercial: 'business',
    'commercial-events': 'business',
    'social_events': 'event',
    patio: 'patio'
  };
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
            {data.strapiService.name} Lighting
          </h1>

          <Markdown className='react-markdown'>
            {data.strapiService.description.data.description}
          </Markdown>
          <Start className="button--left-align" />
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

      <section id="lights">
        <div className="stork">
          <hr />
          <h3 className="crest">Bringing the shine</h3>
          <h2 className="ridge">
            <Link to={`/${data.strapiService.slug}/lights`}>
              Lighting Styles
            </Link>
          </h2>
        </div>


        <div className='deck'>
          {data.strapiService.featured_lights.map((light: CardType) => (
            <Card
              key={light.id}
              {...light}
              breadcrumb='light'
            />
          ))}
        </div>

        <Lookbook slug={data.strapiService.slug} />
      </section >

      <section id="process" className='stork backed bb'>
        <hr />
        <h2>Our Process</h2>
        <p>
          Ready to bring your vision to life? Get started with a free estimate today and let us illuminate your {adjective} with an unforgettable lighting display!
        </p>
        <hr />
        <ol>
          {data.allStrapiProcess.nodes.map((process) => (
            <li key={process.id}>
              <span className="ol-title">{process.name}</span>
              <Markdown className='react-markdown'>
                {process.markdown.data.markdown}
              </Markdown>
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
        <div id="consultant" className='stork'>
          <h3 className='kilimanjaro'>Have you ever noticed how much lighting can affect the feeling of space?</h3>

          <Markdown className='react-markdown'>
            {data.strapiService.after_the_triptych.data.after_the_triptych}
          </Markdown>
        </div>
        : null
      }

      {
        data.strapiService.projects || data.strapiService.venues || data.strapiService.vendors ?
          <Base
            projects={data.strapiService?.projects}
            venues={data.allStrapiVenue?.nodes}
            vendors={data.allStrapiVendor?.nodes}
          />
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

        videoMux
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

        allStrapiVendor(filter: {services: {elemMatch: {slug: {eq: $slug}}}}, limit: 1) {
          nodes {
          ...vendorCard
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
  return (
    <>
      <SEO
        title={`${data.strapiService.name} Lighting`}
        description={data.strapiService.excerpt}
        image={data.strapiService?.ogImage}
        url={`${data.strapiService.slug}`}
      />
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": "${data.strapiService.name}",
            "description": "${data.strapiService.excerpt}",
            "url": "/${data.strapiService.slug}"
          }
        `}
      </Script>
    </>
  )
}