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
  console.log('TypeTitles');
  console.log(types);

  /*   return (
      <h1>
        span
      </h1 >
    ) */

  return null;

}



function Base(props) {

  // TODO: I should make 3 here
  // Array.prototype.splice()
  // months.splice(4,1,"May");
  // replaces 1 element at index 4

  // console.log(props.projects)
  // console.log(props.slug);

  let base = [];
  if (props?.projects.length > 0) {
    base.push(props?.projects[0]);
    base[0].breadcrumb = 'project';
  }
  if (props?.projects.length > 1) {
    base.push(props?.projects[1]);
    base[1].breadcrumb = 'project';
  }
  if (props?.projects.length > 2) {
    base.push(props?.projects[2]);
    base[2].breadcrumb = 'project';
  }
  // console.log(base)

  if (props?.slug === 'wedding') {
    if (props?.vendors) {
      base.splice(1, 1, props?.vendors[0]);
      base[1].breadcrumb = 'vendor';
    }
  }

  if (props?.venues.length > 0) {
    base.splice(2, 1, props?.venues[0]);
    // console.log(base[1]);
    base[2].breadcrumb = 'venue';
  }

  // console.log(base);

  if (Object.values(base[0]).indexOf('project') > -1) {
    // console.log('has project');
  } else {
    // console.log('no project');
  }

  let types = [];

  // // (Object.values(base[0]).indexOf('project') > -1) ? console.log('has project') : console.log('no project');
  // if (base[0].breadcrumb === 'project') {
  //   console.log('has 1 project');
  //   types.push('project');
  // }

  base.map(type => {
    (types.push(type.breadcrumb))
  });

  return (
    <>
      <div className='measure'>
        <hr />
        {/* // ! fix based on the card */}
        {/* <h3 className="crest">What have we done</h3> */}
        {/* <h2 className="ridge mixta">Projects</h2> */}
        {/* // ! the top might have to be in a seperate loop which is kinda ok */}
        {/* //* rename this */}
        {/*         <Top
          base={base}
        // ? do I need other options
        /> */}
        {TypeTitles(types)}
      </div>
      <div className='deck'>
        {base.map((card) => (
          <div key={card.id}>
            {/* <h5><Link to={`/${card.breadcrumb}`}>Explore our {card.breadcrumb}s</Link></h5> */}
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

        {/* // Wedding */}
        {/*         <p>
          The natural beauty of the Reno Tahoe area make the perfect backdrop for a wedding. Our custom lighting design enhances your decor and the architectural / landscape features of your venue. Wether your aiming for a low key affair or a luxurious event, we work with you to create the perfect mood.
        </p> */}

        {/* // Wedding */}
        {/*         <p>
          We exclusively use modern LED technology, wireless and battery powered where possible. With wireless LEDs, we are eliminating fire risks from traditional technology, reducing tripping hazards and clutter in your photos. We use modern RGB technology to create the perfect lighting effects to highlight your decor and create the ideal mood for your big day. For example, ambers / warm whites add a flattering and romantic glow while deep purple / blue can amp up guests for the dance party portion of the night. You can choose a unified color scheme, select a palette of complimentary colors or even plan changes throughout your event.
        </p> */}

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

    allStrapiVendor(limit: 1) {
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
