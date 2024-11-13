// TODO: needs testimonials per service
// Couple biome errors that im not sure how to get rid of yet

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
      lookbookCover: GatsbyImageType;
      venues: CardType[];
      vendors: CardType[];
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
      url: string;
    }
  }
}

interface BaseTypes {
  projects: CardType[];
  venues: CardType[];
  vendors: CardType[];
}
function Base({ projects, venues, vendors }: BaseTypes) {

  // console.log(projects, venues, vendors);

  // order the projects by updatedAt
  projects.sort((a, b) => {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);
    return dateB.getTime() - dateA.getTime();
  });

  const emptyCard = {
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
  };



  // empty card slots
  const base: { card: CardType, title: boolean, breadcrumb: string, order: number, id: React.Key }[] = [
    { card: {}, title: false, breadcrumb: '', order: 0, id: '' },
    { card: {}, title: false, breadcrumb: '', order: 1, id: '' },
    { card: {}, title: false, breadcrumb: '', order: 2, id: '' },
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

    // if has projects and vendors
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
                  {...item.card}
                  breadcrumb={item.breadcrumb}
                />
              </div>
            ) : null}
          </React.Fragment>
        ))}
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

  // console.log(data.allStrapiLookbook);
  // console.log(data.allStrapiLookbook.nodes.length);

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
          <h2 className="denali">
            <Link to={`/${data.strapiService.slug}/lights`}>
              Browse All Our {data.strapiService.name} Lighting Styles
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

        {data.allStrapiLookbook?.nodes.length > 0 ?
          <>
            <hr className='pelican' />
            <Link to={`/${data.strapiService.slug}/lookbook`} className='poster ratio-16-9'>
              <GatsbyImage
                image={data.strapiService.lookbookCover?.localFile.childImageSharp.gatsbyImageData}
                alt={data.strapiService.lookbookCover?.alternativeText || `${data.strapiService.slug} Lookbook`}
                objectPosition="center"
              />
              <h3>Browse our 2024 {data.strapiService.name} Lookbook</h3>
            </Link>
          </>
          : null}
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
          <>
            <hr className='pelican' />
            <Base
              projects={data.strapiService?.projects}
              venues={data.allStrapiVenue?.nodes}
              vendors={data.allStrapiVendor?.nodes}
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

      videoMux

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

    allStrapiVendor(filter: {services: {elemMatch: {slug: {eq: $slug}}}}, limit: 1) {
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
  // console.log(sanitazeDescription);

  console.log(data.strapiService.videoMux);

  return (
    <>
      <SEO
        title={`${data.strapiService.name} Lighting`}
        description={sanitazeDescription}
        image={data.strapiService?.ogImage ? data.strapiService.ogImage.url : null}
        url={`${data.strapiService.slug}`}
      />
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": "${data.strapiService.name} lighting",
            "description": "${sanitazeDescription}",
            "url": "${data.strapiAbout.url}/${data.strapiService.slug}"
          }
        `}
      </Script>

      {data.strapiService?.videoMux ? (
        <Script>
          {`
              {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "contentURL": "https://stream.mux.com/${data.strapiService.slug}.m3u8",
                "description": "${data.strapiService.name} lighting video for ${data.strapiAbout.businessName}",
                "embedUrl": "${data.strapiService.slug}",
            `}
        </Script>
      ) : null
      }
    </>
  )
}