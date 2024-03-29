import React from 'react';
import { graphql, Link } from 'gatsby'

import ReactMarkdown from "react-markdown";

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import StateAbbreviation from "../components/state-abbreviation";
import Website from "../components/website";
import IfHero from "../components/if-hero";

import TestimonialRanking from "../components/testimonial-ranking";

function Use(props) {
  // TODO: heavy handed way of doing this until I have filled out venue uses
  // This can now be done with services
  if (props.slug === 'blue') {
    return null;
  } else {
    return (
      <>Wedding</>
    );
  }
}

function ReactAddress(props) {
  if (props.address) {
    return <ReactMarkdown children={props.address?.data?.address} />;
  } else {
    return null;
  }
}

function Phone(props) {
  if (props.phone) {
    var phone = props.phone;
    var string = phone.toString();
    var change = string.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");

    // console.log(change);

    return (
      <p>Phone <a href={`tel:${props.phone}`}>{change}</a></p>
    );
  } else {
    return null;
  }
}

function IfOther(props) {
  // console.log(props.other.length);
  let lngth = props.other.length;

  if (lngth > 0) {
    return (
      <>
        <div className="stork">
          <h4>Other <Use slug={props.slug} /> Venues in {props.name}, <StateAbbreviation state={props.state} /></h4>
        </div>

        <div className="deck">
          {props.other.map((other) => (
            <div key={other.node.id}>
              <Card
                card={other.node}
                breadcrumb='venue'
              />
            </div>
          ))}
        </div>
        <div className="stork">
          <h3 className="crest">Even More</h3>
          <h2 className="range"><Link to='/venue' className="link--subtle">All Other Venues</Link></h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="stork">
          <h3 className="crest">Looking for somewhere else?</h3>
          <h2 className="range"><Link to='/venue' className="link--subtle">Other <Use slug={props.slug} /> Venues</Link></h2>
        </div>
      </>
    )
  }
}

function Testimonials({ testimonials, venue }) {
  if (testimonials.length > 0) {
    return (
      <div className="stork" >
        <ul className='testimonials'>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className='testimonial'>
              <figure>
                <blockquote>
                  <h3 className='sr-only'>{testimonial.title}</h3>
                  {/* // TODO stars */}
                  <TestimonialRanking stars={testimonial.stars} />
                  <p className='testimonial--quote_mark range'>&ldquo;</p>
                  <p>{testimonial.review}</p>
                  <figcaption>
                    <p className='crest'><strong>{venue}</strong> - {testimonial.position}</p>
                    <h4 className='range'>{testimonial.customer}</h4>
                  </figcaption>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

const VenueView = ({ data }) => {
  return (
    <>
      <Header />

      <div className="stork">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li key='1' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li key='2' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/venue">
              <span itemProp="name">Venues</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li key='3' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to={`/areas/${data.strapiVenue.area.slug}`}>
              <span itemProp="name">{data.strapiVenue.area.name}</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="3" />
          </li>

          <li key='4' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{data.strapiVenue.name}</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
        <hr />
      </div>

      <IfHero hero={data?.strapiVenue?.venueImage} />

      <main className="stork venue">
        <hgroup>
          <p className="crest">{data.strapiVenue.area.name}, <StateAbbreviation state={data.strapiVenue.area.state} /></p>
          <h1 className="range">{data.strapiVenue.name}</h1>
        </hgroup>
        <hr />
        <p>{data.strapiVenue.description}</p>

        <Testimonials testimonials={data.strapiVenue.testimonials} venue={data.strapiVenue.name} />

        <hr />
        <address>


          {/* // TODO this could probably be more structured with seo */}
          <ReactAddress address={data.strapiVenue.address} />
        </address>

        <Website website={data.strapiVenue.website} />
        <Phone phone={data.strapiVenue.phone} />
        {/* {data.strapiVenue.website} */}
        <hr />

      </main>
      {/* 
      <Region
        region={data.strapiVenue.area.region}
        area={data.strapiVenue.area}
        areas={data.strapiVenue.area.areas}
      /> */}

      {/* // TODO this shouldnt get all of these but get the frist 3 then deal with it from there */}
      <IfOther
        other={data.allStrapiVenue.edges}
        name={data.strapiVenue.area.name}
        state={data.strapiVenue.area.state}
        slug={data.strapiVenue.slug}
      />

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
        edges {
          node {
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
  }
`

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiVenue.name} | ${useSiteMetadata().title}`}
      description={data.strapiVenue.excerpt}
      image={data.strapiVenue?.venueImage?.localFile?.url}
    // url={`venue/${data.strapiVenue.slug}`}
    >

// TODO: breadcrumbs

    </SEO>
  )
}
