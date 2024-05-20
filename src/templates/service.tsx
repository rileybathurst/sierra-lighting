import React from 'react';
import { graphql, Link, Script } from 'gatsby'
import MuxPlayer from '@mux/mux-player-react';
import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Card from '../components/card';
import type { CardType } from '../types/card';
import Start from '../components/start';
import Adjective from '../components/adjective';
import Lookbook from '../components/lookbook';

function Breadcrumb(props: { title: string; }) {

  if (props.title === 'project') {
    return (
      <Link to="/projects">
        Explore Projects
      </Link>
    )
  } else {


    return (
      <Link to={`/${props.title}`}>
        Explore {props.title}s
      </Link>
    )
  }
}

function Base(props: {
  projects: string | any[];
  venues: string | any[];
  vendors: string | any[];
  slug: string;
}) {
  let base = [];

  if (!props?.projects.length && !props?.venues.length && !props?.vendors.length) {
    // base.push(props?.projects[0]);
    // console.log('no projects, venues or vendors');
    return null;
  } else {
    // * the heirarchy is projects, vendors, venues

    // first create the 3 spots as projects if possible
    // if projects has something the first one has a project breadcrumb
    if (props?.projects.length > 0) {
      base.push(props?.projects[0]);
      base[0].breadcrumb = 'project';
      base[0].order = 0;
    }

    // if projects has atleast 2 the second one has a project breadcrumb
    if (props?.projects.length > 1) {
      base.push(props?.projects[1]);
      base[1].breadcrumb = 'project';
      base[1].order = 1;
    }

    // if projects has atleast 3 the third one has a project breadcrumb
    if (props?.projects.length > 2) {
      base.push(props?.projects[2]);
      base[2].breadcrumb = 'project';
      base[2].order = 2;
    }


    // if has projects and vendors
    if (props?.vendors.length && props?.venues.length) {

      // put the vendor in the second spot
      let vendorInset = props?.vendors[0];
      vendorInset.breadcrumb = 'vendor';
      base.splice(1, 1, vendorInset);

      let venueInset = props?.venues[0];
      venueInset.breadcrumb = 'venue';
      base.splice(2, 2, venueInset);
    } else if (props?.vendors.length) {

      // if has projects and vendors but no venues
      // put the vendor in the third spot

      let vendorInset = props?.vendors[0];
      vendorInset.breadcrumb = 'vendor';
      base.splice(2, 2, vendorInset);

    } else if (props?.venues.length) {
      // if has projects and venues but no vendors
      let venueInset = props?.venues[0];
      venueInset.breadcrumb = 'venue';
      base.splice(2, 2, venueInset);

    }

    let titles = [];
    // first always needs a title
    titles[0] = base[0].breadcrumb;
    // console.log(titles[0]);
    // titles[0]

    if (base[1]) {
      if (base[1]?.breadcrumb !== base[0].breadcrumb) {
        titles[1] = base[1].breadcrumb;
      }
    }

    if (base[1] && base[2]) {
      if (base[2]?.breadcrumb !== base[0].breadcrumb && base[2]?.breadcrumb !== base[1].breadcrumb) {
        titles[2] = base[2].breadcrumb;
      }
    }

    // console.log(titles);
    // console.log(base);

    return (
      <>
        <hr className='stork' />

        <div className='deck margin-block-end-0 service-deck'>
          {titles.map((title) => (
            <h4
              key={title}
              className={`first-capital ${title}-title`}
            >
              <Breadcrumb title={title} />
            </h4>
          ))}


          {base.map((card) => (
            // console.log(card.breadcrumb),
            <div key={card.id} className={`${card.breadcrumb} ${card.breadcrumb}-${card.order}`} >
              <Card
                card={card}
                breadcrumb={card.breadcrumb}
              />
            </div>
          ))}
        </div >
      </>
    )
  }
}

function ReactDescription(props: { description: string | null | undefined; }) {
  // console.log(props.description)
  if (props?.description) {
    return (
      <ReactMarkdown
        children={props?.description}
        remarkPlugins={[remarkGfm]}
      />
    );
  } else {
    return null;
  }
}

function VideoMux(video: { video: string | undefined; }) {
  // console.log(video.video)
  if (video.video) {
    return (
      <MuxPlayer
        streamType="on-demand"
        playbackId={video.video}
        // playbackId='EOIi01FuRDaiMY2s00e87J4hFTTFmrFs4iKA008rd63zao'
        className='hero-video'
      />
    );
  } else {
    return null;
  }
}

function Consultant({ after_the_triptych }) {
  // console.log(after_the_triptych.data.after_the_triptych)

  if (after_the_triptych.data.after_the_triptych) {
    return (
      <div id="consultant" className='stork'>
        <h3>
          Have you ever noticed how much lighting can affect the feeling of space?
        </h3>

        <ReactMarkdown
          children={after_the_triptych?.data?.after_the_triptych}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    )
  } else {
    return null;
  }
}

const ServiceView = ({ data }) => {

  return (
    <>
      <Header />

      <main>

        {/* // wedding video */}
        <VideoMux video={data.strapiService.videoMux} />

        <section className="stork">
          <h1 className='mixta'>
            {/* // TODO: needs a clamp on the size */}
            {data.strapiService.name} Lighting
          </h1>

          <ReactDescription
            description={data.strapiService.description.data.description}
          />
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

        <section id="lights">
          <div className="stork">
            <hr />
            <h3 className="crest">Bringing the shine</h3>
            <h2 className="ridge">
              <Link to={`/${data.strapiService.slug}/lights`}
              // className="link--subtle"
              >
                Lighting Styles
              </Link>
            </h2>
          </div>

          <div className='deck'>
            {data.strapiService.featured_lights.map((light: CardType) => (
              <div key={light.id}>
                <Card
                  card={light}
                  breadcrumb='light'
                />
              </div>
            ))}


          </div>
          <Lookbook slug={data.strapiService.slug} hr="true" />
        </section>

      </main>

      <section id="process" className='stork backed bb'>
        <hr />
        <h2>Our Process</h2>
        <Adjective service={data.strapiService.slug} />
        <hr />
        <ol>
          {data.allStrapiProcess.nodes.map((process: {
            id: React.Key;
            name: string;
            markdown: { data: { markdown: string } };
          }) => (
            <li key={process.id}>
              <span className="ol-title">{process.name}</span>
              {/* // TODO: this needs markdown processing, its fine now as theres no links etc */}
              <span>{process.markdown.data.markdown}</span>
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

      <Consultant after_the_triptych={data.strapiService?.after_the_triptych} />

      <Base
        projects={data?.strapiService?.projects}
        venues={data?.allStrapiVenue?.nodes}
        vendors={data?.allStrapiVendor?.nodes}
        slug={data.strapiService.slug}
      />

      <Footer />

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

export const Head = ({ data }) => {
  return (
    <>
      <SEO
        title={`${data.strapiService.name} Lighting | ${useSiteMetadata().title}`}
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
            "url": "${useSiteMetadata().url}/${data.strapiService.slug}"
          }
        `}
      </Script>
    </>
  )
}