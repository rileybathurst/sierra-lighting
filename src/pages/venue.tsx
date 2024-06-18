import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import type { IGatsbyImageData } from "gatsby-plugin-image"

import { SEO } from "../components/seo";

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
    slug: string;
    excerpt: string
    name: string;

    area: {
      id: React.Key;
      slug: string;
      tagline: string;
      name: string;
      state: string;
      featured: boolean;
    };
  }[];
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
        featured
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

  // TODO: stateline excluding blue is a heavyhanded way until I do other uses on venues
  const areas = [
    data.southlake,
    data.reno,
    data.incline,
    data.truckee,
    data.olympic,
    data.donner,
    data.stateline,
    data.tahoma,
    data.minden,
    data.other
  ];

  return (
    <>
      <Header />

      <main className="venues__page">

        <h1 className="stork kilimanjaro">Wedding venues we create lighting at</h1>

        {areas.map((area: Area) => (
          area.nodes.length > 0 ?
            <div
              key={area.nodes[0].area.id}
              id={area.nodes[0].area.slug}
            >
              <div
                className="stork"
              >
                <hr />
                <h4 className="crest">{area.nodes[0].area.tagline}</h4>
                <h3 className="range">
                  {area.nodes[0].area.featured ?
                    <Link
                      to={`/areas/${area.nodes[0].area.slug}`}
                    >
                      {area.nodes[0].area.name},&nbsp;
                      <StateAbbreviation state={area.nodes[0].area.state} />.
                    </Link>
                    :
                    <>
                      {area.nodes[0].area.name},&nbsp;
                      <StateAbbreviation state={area.nodes[0].area.state} />.
                    </>
                  }
                </h3>
              </div>

              <div className="deck">
                {area?.nodes.map(venue => (
                  <Card
                    key={venue.id}
                    {...venue}
                    breadcrumb="venue"
                  />
                ))}
              </div>
            </div>
            : null
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
      title='Venues'
      description="The natural beauty of the Lake Tahoe area makes the perfect backdrop for a wedding. Check out these Tahoe wedding venues that range from rustic to glamorous."
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/vendors-og-sierra_lighting.jpg"
      url="venue"
    />
  )
}
