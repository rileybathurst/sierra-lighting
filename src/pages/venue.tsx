import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from "gatsby-plugin-image"

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import StateAbbreviation from "../components/state-abbreviation";

interface Area {
  nodes: {
    id: React.Key;
    venueImage: {
      localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
      alternativeText: string
    };
    slug: any;
    excerpt: string
    name: string;

    area: {
      id: React.Key;
      slug: string;
      tagline: string;
      name: string;
      state: string;
    };
  }[];
}

function Populated(props: { area: Area }) {

  if (props.area.nodes.length) {
    return (
      <div
        key={props.area.nodes[0].area.id}
        id={props.area.nodes[0].area.slug}
      >
        <div
          className="measure"
        >
          <hr />
          <h4 className="crest">{props.area.nodes[0].area.tagline}</h4>
          <h3 className="range">
            <Link
              to={`/area/${props.area.nodes[0].area.slug}`}
              className="link--subtle"
            >
              {props.area.nodes[0].area.name},&nbsp;
              <StateAbbreviation state={props.area.nodes[0].area.state} />.
            </Link>
          </h3>
        </div>

        <div className="deck">
          {props.area?.nodes.map(venue => (
            <div key={venue.id}>
              <Card card={venue} breadcrumb="venue" />
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return null
  }
}

const VenuePage = () => {

  const data = useStaticQuery(graphql`

    fragment venueAreaInfo on STRAPI_VENUE {
      area {
        id
        name
        slug
        state
        tagline
      }
    }

    query VenuesQuery {
      southlake: allStrapiVenue(filter: {area: {slug: {eq: "southlake"}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }
      
      reno: allStrapiVenue(filter: {area: {slug: {eq: "reno"}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }
      
      incline: allStrapiVenue(filter: {area: {slug: {eq: "incline"}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }
      
      truckee: allStrapiVenue(filter: {area: {slug: {eq: "truckee"}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }
      
      olympic: allStrapiVenue(filter: {area: {slug: {eq: "olympic"}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }
      
      donner: allStrapiVenue(filter: {area: {slug: {eq: "donner"}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }

      stateline: allStrapiVenue(
        filter: {area: {slug: {eq: "stateline"}}, slug: {ne: "blue"}}
        ) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }
      
      tahoma: allStrapiVenue(filter: {area: {slug: {eq: "tahoma"}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }

      minden: allStrapiVenue(filter: {area: {slug: {eq: "minden"}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }
      
      other: allStrapiVenue(filter: {area: {slug: {nin: [
        "southlake",
        "reno",
        "incline",
        "truckee",
        "olympic",
        "donner",
        "stateline",
        "tahoma",
        "minden"
        ]}}}) {
        nodes {
          ...venueCard
          ...venueAreaInfo
        }
      }
    }
  `)

  // TODO: stateline is a heavyhanded way until I do other uses on venues

  let southlake = data.southlake
  let reno = data.reno
  let incline = data.incline
  let truckee = data.truckee
  let olympic = data.olympic
  let donner = data.donner
  let stateline = data.stateline
  let tahoma = data.tahoma
  let minden = data.minden
  let other = data.other

  // TODO: this is the loop to take other places
  let areas = [
    southlake,
    reno,
    incline,
    truckee,
    olympic,
    donner,
    stateline,
    tahoma,
    minden,
    other
  ];

  return (
    <>
      <Header />

      <main className="venues__page">

        <div className="measure">

          <h2 className="crest">Where to be</h2>
          <h1 className="mixta">Wedding Venues</h1>
        </div>

        {areas.map((area: Area) => (
          <Populated
            area={area}
            key={area?.nodes[0]?.area?.id || "other"}
          />
        ))}

      </main >

      <Footer />

    </>
  )
}

export default VenuePage

export const Head = () => {
  return (
    <SEO
      title={`Venues | ${useSiteMetadata().title}`}
      description="The natural beauty of the Lake Tahoe area makes the perfect backdrop for a wedding. Check out these Tahoe wedding venues that range from rustic to glamorous."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      url="venue"
    />
  )
}
