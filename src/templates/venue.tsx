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
import TestimonialRanking from "../components/testimonial-ranking";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import type { CardType } from '../types/card-type';

function Phone({ phone }: { phone: number }) {
  if (phone) {
    const string = phone.toString();
    const change = string.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    return (
      <p>Phone <a href={`tel:${phone}`}>{change}</a></p>
    );
  }
  return null;
}

const VenueView = ({ data }) => {
  return (
    <>
      <Header />

      {data.strapiVenue.venueImage ?
        <Hero {...data.strapiVenue.venueImage} />
        : null}

      <main className="stork venue">
        <hgroup>
          <p className="crest">{data.strapiVenue.area.name}, <StateAbbreviation state={data.strapiVenue.area.state} /></p>
          <h1 className="range">{data.strapiVenue.name}</h1>
        </hgroup>
        <hr />
        <p>{data.strapiVenue.description}</p>

        {data.strapiVenue.testimonials.length > 0 ?
          <div className="stork" >
            <ul className='testimonials'>
              {/* // ! make this a component */}
              {data.strapiVenue.testimonials.map((testimonial) => (
                <li key={testimonial.id} className='testimonial'>
                  <figure>
                    <blockquote>
                      <h3 className='sr-only'>{testimonial.title}</h3>
                      {/* // TODO stars */}
                      <TestimonialRanking stars={testimonial.stars} />
                      <p className='testimonial--quote_mark range'>&ldquo;</p>
                      <p>{testimonial.review}</p>
                      <figcaption>
                        <p className='crest'><strong>{data.strapiVenue.name}</strong> - {testimonial.position}</p>
                        <h4 className='range'>{testimonial.customer}</h4>
                      </figcaption>
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div> : null
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


        <Phone phone={data.strapiVenue.phone} />

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
        <hr />

      </main>
      {/* 
      <Region
        region={data.strapiVenue.area.region}
        area={data.strapiVenue.area}
        areas={data.strapiVenue.area.areas}
      /> */}

      {data.allStrapiVenue.nodes.length > 0 ?
        <>
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
  }
`

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiVenue.name}`}
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
