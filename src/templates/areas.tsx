import React from 'react';
import { graphql, Link, Script } from 'gatsby'

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

import IfHero from "../components/if-hero";
import StateAbbreviation from "../components/state-abbreviation";
import Markdown from "react-markdown";
import Card from '../components/card';
import type { DeckType } from '../types/deck-type';

// TODO: this can be done with a ? :
function SubVenues({ venues }) {

  // TODO: check on this double return I dont think its needed
  if (venues.length !== 0) {
    return (
      <>
        {venues.map((venue: DeckType) => (
          <Card
            key={venue.id}
            card={venue}
            breadcrumb='venue'
          />
        ))}
      </>
    );
  }
  return null
}

function SubAreas({ areas }) {

  interface SubAreasType {
    name: string;
  }

  if (areas.length !== 0) {
    return (
      <div className="stork">
        <hr />
        <p className='elbrus'>Places in the region</p>
        {areas.map((area: SubAreasType) => (
          <p key={area.name} className='kilimanjaro'>
            {area.name}
          </p>
        ))}
        {/* <h3>Wedding Venues in {areas[0].name}</h3> */}
      </div>
    );
  }
  return null
}


// this is no longer right as there might only be sub venues
// if (venues.length !== 0) {
interface VenuesProps {
  name: string;
  venues: CardType[];
  areas: SubAreasType[];
}

function Venues({ name, venues, areas }: VenuesProps) {

  // console.log(areas);

  const subVenues = [];
  areas.map((area) => {
    if (area.venues.length > 0) {
      subVenues.push(area.venues);
    }
  });

  // console.log(subVenues);

  if (venues.length > 0) {
    return (
      <>
        <div className="stork">
          <hr />
          {/* // TODO: this is bold in a way it shouldnt be */}
          <h3 className='elbrus'>Wedding Venues in {name} we create lighting for</h3>
        </div>

        <div className="deck">
          {venues.map((venue: DeckType) => (
            <Card
              key={venue.id}
              card={venue}
              breadcrumb='venue'
            />
          ))}

          {subVenues.length > 0 ?
            areas.map((area) => (
              console.log(area.venues.length),
              area.venues.length >= 1 ?
                area.venues.map((venue: DeckType) => (
                  // console.log('🦖'),
                  // console.log(venue),
                  return (
          // this breaks but currently not getting a return
          <>
            hey
            <Card
              key={venue.id}
              card={venue}
              breadcrumb='venue'
            />
          </>
          )
          ))
          :
          console.log('🦄🦄'),
          null
          ))
          : null
          }

        </div>
      </>
    );
  }
  return null
}

const AreasTemplate = ({ data }) => {

  return (
    <>
      <Header />

      <div className="stork">
        <ol className="breadcrumbs">
          <li key='areas'>
            <Link to="/areas">
              <span>Areas</span></Link>&nbsp;/&nbsp;
          </li>
          <li key={data.strapiArea.name}>
            {data.strapiArea.name}
          </li>
        </ol>
        <hr />
      </div>

      <main>
        <IfHero hero={data.strapiArea?.image} />

        <article className="stork">
          {/* // TODO: THIS IS A MESS */}
          <h2 className="crest">{data.strapiArea.tagline}</h2>
          <h1 className="range">
            {data.strapiArea.name}&nbsp;
            <StateAbbreviation state={data.strapiArea.state} />
          </h1>
          <Markdown
            className="react-markdown"
          >
            {data.strapiArea?.description?.data?.description}
          </Markdown>
        </article >
      </main >

      <SubAreas areas={data.strapiArea.areas} />

      <Venues
        name={data.strapiArea.name}
        venues={data.strapiArea.venues}
        // add the sub areas to the venues deck
        areas={data.strapiArea.areas}
      />

      {/* // TODO: where in the state do we work */}

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
    }
  }
`

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiArea.name} | ${useSiteMetadata().title}`}
      description={data.strapiArea.excerpt}
      image={data.strapiArea?.image?.localFile?.url}
    >
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Areas",
              "item": "${useSiteMetadata().url}/areas"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "${data.strapiArea.name}",
              "item": "${useSiteMetadata().url}/areas/${data.strapiArea.slug}"
            }]
          }
        `}
      </Script>
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${useSiteMetadata().title}",
            "areaServed": {
              "@type": "Place",
              "name": "${data.strapiArea.name}"
            }
          }
        `}
      </Script>


      {/* // TODO: internal map */}
      {data.strapiArea.areas.map((area) => (
        <Script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${useSiteMetadata().title}",
              "areaServed": {
                "@type": "Place",
                "name": "${area.name}"
              }
            }
          `}
        </Script>
      ))}

    </SEO >
  )
}