// ! this needs to move to static Query
// TODO: add FAQ

import React from 'react';
import { graphql, Link } from 'gatsby'
import MuxPlayer from '@mux/mux-player-react';
import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Card from '../components/card';
import { GatsbyImage } from 'gatsby-plugin-image';

// import Process from '../components/fragments/process';

function TypeTitles(types) {
  // console.log('TypeTitles');
  // console.log(types);

  // TODO: needs vertical borders between the different types
  /*   return (
      <h1>
        span
      </h1 >
    ) */

  return null;

}



function Base(props) {
  let base = [];

  if (!props?.projects.length && !props?.venues.length && !props?.vendors.length) {
    // base.push(props?.projects[0]);
    console.log('no projects, venues or vendors');
    return null;
  } else {
    // * the heirarchy is projects, vendors, venues

    // first create the 3 spots as projects if possible
    // if projects has something the first one has a project breadcrumb
    if (props?.projects.length > 0) {
      base.push(props?.projects[0]);
      base[0].breadcrumb = 'project';
    }

    // if projects has atleast 2 the second one has a project breadcrumb
    if (props?.projects.length > 1) {
      base.push(props?.projects[1]);
      base[1].breadcrumb = 'project';
    }

    // if projects has atleast 3 the third one has a project breadcrumb
    if (props?.projects.length > 2) {
      base.push(props?.projects[2]);
      base[2].breadcrumb = 'project';
    }


    // if has projects and vendors
    if (props?.vendors.length && props?.venues.length) {

      // console.log('🦄');

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

    // ? was this the titles?
    /*     if (Object.values(base[0]).indexOf('project') > -1) {
          // console.log('has project');
        } else {
          // console.log('no project');
        } */


    let titles = [];
    // first always needs a title
    titles[0] = base[0].breadcrumb;

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

    console.log(titles);
    console.log(base);

    return (
      <>
        <hr className='measure' />

        {/* // ! splitting these doesnt work on a small screen */}
        <div className='deck margin-block-end-0'>
          {titles.map((title) => (
            <h3 key={title} className='first-capital'>
              Explore {title}s
            </h3>
          ))}
        </div>

        <div className='deck'>
          {base.map((card) => (
            // console.log(card.breadcrumb),
            <div key={card.id}>
              <Card
                card={card}
                breadcrumb={card.breadcrumb}
              />
            </div>
          ))}
        </div>
      </>
    )
  }
}

function ReactDescription(props) {
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

function VideoMux(video) {
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

const ServiceView = ({ data }) => {
  return (
    <>
      <Seo
        title={`${data.strapiService.name} Lighting | Sierra Lighting`}
        description={data.strapiService?.excerpt}
        /// TODO: check this query
        image={data.strapiService?.ogImage}
      />
      <Header />

      <main>

        {/* // wedding video */}
        <VideoMux video={data.strapiService.videoMux} />

        <section className="measure">
          <h1 className='mixta'>
            {/* // TODO: needs a clamp on the size */}
            {data.strapiService.name} Lighting
          </h1>

          <ReactDescription
            description={data.strapiService.description.data.description}
          />
        </section>

        <section className="triple">
          {data.strapiService?.triptych?.map((image) => (
            <div key={image.id}>
              <GatsbyImage image={image?.localFile?.childImageSharp?.gatsbyImageData}
                alt=""
                objectFit="fill"
              />
            </div>
          ))}
        </section>

      </main>

      <section id="process" className='measure'>
        <h2>Our Process</h2>
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

      <section id="lights">
        <div className="measure">
          <h3 className="crest">Bringing the shine</h3>
          <h2 className="ridge mixta">
            <Link to={`/${data.strapiService.slug}/lights`} className="link--subtle">
              Lighting Styles
            </Link>
          </h2>
        </div>

        <div className='deck'>
          {data.strapiService.featuredLights.map((light) => (
            <div key={light.id}>
              <Card
                card={light}
                breadcrumb='light'
              />
            </div>
          ))}
          {/* // TODO: including the view more etc */}
        </div>

        <div className="measure" >
          <h3>
            <Link
              to={`/${data.strapiService.slug}/lights`}>
              View all other <span className='lowercase'>{data.strapiService.name}</span> lights
            </Link>
          </h3>
          <p>Have something particular in mind? Just ask!</p>
          <hr />
        </div>
      </section>

      {/* // ? name - why is this split out? */}
      <div id="consultant" className='measure'>
        <h3>
          Have you ever noticed how much lighting can affect the feeling of space?
        </h3>

        <ReactMarkdown
          children={data.strapiService?.after_the_triptych?.data?.after_the_triptych}
          remarkPlugins={[remarkGfm]}
        />
      </div>

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
      
      featuredLights {
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
