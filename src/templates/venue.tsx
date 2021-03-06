import React from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import StateAbbreviation from "../components/state-abbreviation";
import Website from "../components/website";
import IfHero from "../components/ifHero";

import TestimonialRanking from "../components/testimonial-ranking";

function ReactAddress(props) {
  if (props.address) {
    return <ReactMarkdown children={props.address?.data?.address} />;
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
        <div className="measure">
          <h4>Other Wedding Venues in {props.name}, <StateAbbreviation state={props.state} /></h4>
        </div>

        <div className="deck measure">
          {props.other.map((other) => (
            <div key={other.node.id} className="card">

              <GatsbyImage
                image={
                  other.node?.venueImage?.localFile?.childImageSharp
                    ?.gatsbyImageData
                }
                alt={other.node.venueImage?.alternativeText}
                className=""
              />

              <div className="paper"></div>
              <div className="content">
                <hr />
                <h2 className="mixta">
                  <Link to={`/venue/${other.node.slug}`}>
                    {other.node.name}
                  </Link>
                </h2>
                <p>{other.node.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="measure">
          <h3 className="crest">Even More</h3>
          <h2 className="range"><Link to='/venues' className="link--subtle">All Other Venues</Link></h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="measure">
          <h3 className="crest">Looking for somewhere else?</h3>
          <h2 className="range"><Link to='/venues' className="link--subtle">Other Wedding Venues</Link></h2>
        </div>
      </>
    )
  }
}

function Testimonials(props) {
  if (props.testimonials.length > 0) {
    return (
      <div className="measure" >
        <ul className='testimonials'>
          {props.testimonials.map((testimonial) => (
            <li key={testimonial.id} className='testimonial'>
              <figure>
                <blockquote>
                  <h3 className='sr-only'>{testimonial.title}</h3>
                  {/* // TODO stars */}
                  <TestimonialRanking stars={testimonial.stars} />
                  <p className='testimonial--quote_mark range'>&ldquo;</p>
                  <p>{testimonial.review}</p>
                  <figcaption>
                    <h4 className='range'>{testimonial.customer}</h4>
                    <p className='crest'><strong>{props.venue}</strong> - {testimonial.position}</p>
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
      <Seo
        title={`${data.strapiVenue.name} | Sierra Lighting`}
        description={data.strapiVenue?.excerpt}
        image={data.strapiVenue?.venueImage?.localFile?.url}
      />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li key='1' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li key='2' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/venues">
              <span itemProp="name">Venues</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li key='3' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to={`/area/${data.strapiVenue.area.slug}`}>
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

      <main className="measure">
        <article className="single">
          <h2 className="crest">{data.strapiVenue.area.name}, <StateAbbreviation state={data.strapiVenue.area.state} /></h2>
          <h1 className="range">{data.strapiVenue.name}</h1>
          <hr />
          <p>{data.strapiVenue.description}</p>

          <Testimonials testimonials={data.strapiVenue.testimonials} venue={data.strapiVenue.name} />

          <hr />
          <address>


            {/* // TODO this could probably be more structured with seo */}
            <ReactAddress address={data.strapiVenue.address} />
          </address>

          <p><Website website={data.strapiVenue.website} /></p>
          {/* {data.strapiVenue.website} */}

          <hr />
        </article>
      </main>


      {/* // TODO this shouldnt get all of these but get the frist 3 then deal with it from there */}
      <IfOther other={data.allStrapiVenue.edges} name={data.strapiVenue.area.name} state={data.strapiVenue.area.state} />

      <Footer />
    </>
  );
};

export default VenueView;

export const query = graphql`
  query VenueTemplate(
    $slug: String!,
    $area: String!,
    ) {
      strapiVenue(slug: {eq: $slug}) {
        id
        name
        description
        slug
        excerpt
        website
        
        area {
          name
          state
          slug
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

      allStrapiVenue(
        limit: 3,
        filter: {area: {slug: {eq: $area}}, slug: {ne: $slug}}
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
                    breakpoints: [111, 165, 222, 444, 880]
                    width: 222
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
