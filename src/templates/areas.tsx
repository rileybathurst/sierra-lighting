import React from 'react';
import { graphql, Link, Script } from 'gatsby'

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

import IfHero from "../components/if-hero";
import StateAbbreviation from "../components/state-abbreviation";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Card from '../components/card';
import { CardType } from '../types/card';

function SubVenues({ venues }) {

  if (venues.length !== 0) {
    return (
      <>
        {venues.map((venue: CardType) => (
          <section key={venue.id}>
            <Card
              card={venue}
              breadcrumb='venue'
            />
          </section>
        ))}
      </>
    );
  } else {
    return null
  }
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
          <p key={area.name} className='denali'>
            {area.name}
          </p>
        ))}
        {/* <h3>Wedding Venues in {areas[0].name}</h3> */}
      </div>
    );
  } else {
    return null
  }
}


// this is no longer right as there might only be sub venues
// if (venues.length !== 0) {
interface VenuesProps {
  name: string;
  venues: CardType[];
  areas: SubAreasType[];
}

function Venues({ name, venues, areas }: VenuesProps) {
  if (venues.length > 0) {
    return (
      <>
        <div className="stork">
          <hr />
          <h3>Wedding Venues in {name} we create lighting</h3>
        </div>

        <div className="deck">
          {venues.map((venue: CardType) => (
            <section key={venue.id}>
              <Card
                card={venue}
                breadcrumb='venue'
              />
            </section>
          ))}

          {areas.map((area: SubAreasType) => (
            <SubVenues venues={area.venues} />
          ))}
        </div>
      </>
    );
  } else {
    return null
  }
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

        <article className="stork single" itemProp="address">
          <div itemProp="location" itemScope itemType="https://schema.org/areaServed">
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="name" className="sr-only">{data.strapiArea.name}</span>
              {/* // ! this is for the address / postaladdress / name / except its not working and its taking the description */}

              <h2 className="crest">{data.strapiArea.tagline}</h2>
              <h1 className="range" >
                <span itemProp="addressLocality">{data.strapiArea.name}</span>,&nbsp;
                <span itemProp="addressRegion" className="first-capital">< StateAbbreviation state={data.strapiArea.state} /></span>
              </h1>
              <ReactMarkdown
                children={data.strapiArea?.description?.data?.description}
                remarkPlugins={[remarkGfm]}
              />

            </div >
          </div >
        </article >
      </main >

      <SubAreas areas={data.strapiArea.areas} />

      <Venues
        name={data.strapiArea.name}
        venues={data.strapiArea.venues}
        // add the sub areas to the venues deck
        areas={data.strapiArea.areas}
      />

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