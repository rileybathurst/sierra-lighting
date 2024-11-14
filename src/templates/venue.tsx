import React from 'react';
import { graphql, Link } from 'gatsby'
import Markdown from "react-markdown";
import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import StateAbbreviation from "../components/state-abbreviation";
import StrShort from "../components/StrShort";
import Hero from "../components/hero";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import type { CardType } from '../types/card-type';
import Testimonial from '../components/testimonial';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { Phone } from '../components/phone';

type VenueViewTypes = {
  data: {
    strapiVenue: {
      id: React.Key;
      name: string;
      description: string;
      slug: string;
      excerpt: string;
      website: string;
      phone: number;
      area: {
        name: string;
        state: 'california' | 'nevada';
        slug: string;
        featured: boolean;
        region: {
          name: string;
          slug: string;
        }
      }
      address: {
        data: {
          address: string;
        }
      }
      venueImage: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          }
          url: string;
        }
        alternativeText: string;
      }
      testimonials: {
        id: React.Key;
        title: string;
        review: string;
        stars: number;
        customer: string;
        position: string;
        vendor: {
          name: string;
        }
      }[]

      projects: CardType[]

    }
    allStrapiVenue: {
      nodes: CardType[]
    }
  }
}
const VenueView = ({ data }: VenueViewTypes) => {

  return (
    <>
      <Header />

      {data.strapiVenue.venueImage ?
        <Hero image={data.strapiVenue.venueImage} />
        : null}

      <main className="stork venue">
        <hgroup>
          <p className="crest">{data.strapiVenue.area.name}, <StateAbbreviation state={data.strapiVenue.area.state} /></p>
          <h1 className="range">{data.strapiVenue.name}</h1>
        </hgroup>
        <hr />
        <p>{data.strapiVenue.description}</p>

        {data.strapiVenue.testimonials.length > 0 ?
          <Testimonial {...data.strapiVenue.testimonials[0]} />
          : null
        }

        <hr />
        {/* // TODO this could probably be more structured with seo */}
        {data.strapiVenue.address ?
          <address>
            <Markdown className='react-markdown'>
              {data.strapiVenue.address.data.address}
            </Markdown>
          </address>
          : null}

        <p>Phone: <Phone phone={data.strapiVenue.phone} /></p>

        <p>
          Website&nbsp;
          {data.strapiVenue.website.includes('https://') ?
            <a href={data.strapiVenue.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.strapiVenue.website}
            >
              <StrShort website={data.strapiVenue.website} />
            </a>
            :
            <a href={`https://${data.strapiVenue.website}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.strapiVenue.website}
            >
              <StrShort website={data.strapiVenue.website} />
            </a>
          }
        </p>

      </main>
      {/* 
      <Region
        region={data.strapiVenue.area.region}
        area={data.strapiVenue.area}
        areas={data.strapiVenue.area.areas}
      /> */}

      {/* // TODO: what can we create here */}
      <section className='stork'>
        <hr />
        <h3>Explore the lighting styles we can create at {data.strapiVenue.name}</h3>
      </section>

      <div className='deck'>
        {data.strapiService.featured_lights.map((light: CardType) => (
          <Card
            key={light.id}
            {...light}
            breadcrumb='light'
          />
        ))}
      </div>

      <h4 className='stork'>
        <Link to='/wedding/lights'>Browse all our wedding lighting styles</Link>
      </h4>

      {data.strapiVenue.projects.length > 0 ?
        <>
          <hr className='stork' />
          <div className="stork">
            <h3 className="crest">Projects at {data.strapiVenue.name}</h3>
          </div>
          <div className="deck">
            {data.strapiVenue.projects.map((card: CardType) => (
              <Card
                key={card.id}
                {...card}
                breadcrumb='project'
              />
            ))}
          </div>
        </>
        : null
      }

      {data.allStrapiVenue.nodes.length > 0 ?
        <>
          <hr className="stork" />
          <div className="stork">
            <h3 className="crest">More Venues in {data.strapiVenue.area.name}, <StateAbbreviation state={data.strapiVenue.area.state} /></h3>
          </div>
          <div className="deck">
            {data.allStrapiVenue.nodes.map((card: CardType) => (
              <Card
                key={card.id}
                {...card}
                breadcrumb='venue'
              />
            ))}
          </div>
        </>
        :
        <>
          <div className="stork">
            <h3 className="crest">Looking for somewhere else?</h3>
            <h2 className="range">
              <Link to='/venue'>
                Other {data.strapiVenue.slug === 'blue' ? null : 'Wedding'} Venues
              </Link>
            </h2>
          </div>
        </>
      }

      <hr className='stork' />

      {/* // ? I dont think we have non featured pages anymore */}
      <Breadcrumbs>
        <Breadcrumb><Link to="/venue/">Venues</Link></Breadcrumb>
        <Breadcrumb>
          {data.strapiVenue.area.featured ?
            <Link to={`/areas/${data.strapiVenue.area.slug}`}>
              {data.strapiVenue.area.name}
            </Link>
            :
            data.strapiVenue.area.name
          }
        </Breadcrumb>
        <Breadcrumb>{data.strapiVenue.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default VenueView;

export const query = graphql`
  query VenueTemplate(
    $slug: String!,
    $area: String!
    ) {
      strapiVenue(slug: {eq: $slug}) {
        id
        name
        description
        slug
        excerpt
        website
        phone
        slug
        
        area {
          name
          state
          slug
          featured

          region {
            name
            slug
          }
        }

        address {
          data {
            address
          }
        }

        venueImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
            url
          }
          alternativeText
        }

        projects {
          ...projectCard
        }

        testimonials {
          id
          title
          review
          stars
          customer
          position
          vendor {
            name
          }
        }
      }

      # // TODO: this is a heavyhanded way until I do other uses on venues
      allStrapiVenue(
        limit: 3,
        filter: {
          area: {slug: {eq: $area}},
          slug: {nin: [$slug, "blue"]}
        }
      ) {
        nodes {
          name
          id
          slug
          excerpt

          venueImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  breakpoints: [660]
                  width: 660
                )
              }
            }
            alternativeText
          }

          area {
            name
            state
          }
        }
      }

      strapiService(slug: {eq: "wedding"}) {
        featured_lights {
          ...lightCard
        }
      }
  }
`

export const Head = ({ data }: VenueViewTypes) => {
  return (
    <SEO
      title={`${data.strapiVenue.name} Wedding Venue`}

      // TODO: Sierra lighting can create lighting at
      description={data.strapiVenue.excerpt}
      image={data.strapiVenue?.venueImage?.localFile?.url}
      // url={`venue/${data.strapiVenue.slug}`}
      // TODO: is this actually three levels deep? and why is it featured and state etc
      breadcrumbs={
        [
          {
            name: 'Venues',
            item: '/venue'
          },
          {
            name: data.strapiVenue.area.featured ?
              data.strapiVenue.area.name :
              `${data.strapiVenue.area.name}, ${data.strapiVenue.area.state}`,
            item: `/areas/${data.strapiVenue.area.slug}`
          },
          {
            name: data.strapiVenue.name,
            item: `/venue/${data.strapiVenue.slug}`
          }
        ]
      }
    />
  )
}
