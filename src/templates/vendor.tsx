import React from 'react';
import { graphql, Link } from 'gatsby'

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

import StrShort from "../components/StrShort";
import Hero from "../components/hero";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import TestimonialRanking from "../components/testimonial-ranking";
import Card from '../components/card';
import type { CardType } from '../types/card-type';

function IfOther(props) {
  if (props.projects.length > 0) {
    // console.log(props.projects);
    return (
      <>
        <div className="stork">
          <hr />
          <h4>Projects we have worked with {props.name} on</h4>
        </div>
        <div className="deck">
          {props.projects.map((project: CardType) => (
            <Card
              key={project.id}
              {...project}
              breadcrumb='project'
            />
          ))}
        </div>
      </>
    );
  }

  if (props.other.length > 0) {
    return (
      <>
        <div className="stork">
          <hr />
          <h4>Other <span className='capitalize'>{props.service}</span> Vendors</h4>
        </div>

        <div className="deck">
          {props.other.map((other: CardType) => (
            <Card
              key={other.node.id}
              {...other.node} // TODO: check this
              breadcrumb='vendor'
            />
          ))}
        </div>
        <div className="stork">
          <h3 className="crest">Even More</h3>
          <h2 className="range">
            <Link to={`/vendor/${props.service}`}>
              All Other <span className='capitalize'>{props.service}</span> Vendors
            </Link>
          </h2>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="stork">
        <h3 className="crest">Looking for something else?</h3>
        <h2 className="range">
          <Link to='/vendor'>
            Other Wedding Vendors
          </Link>
        </h2>
      </div>
    </>
  )
}

interface TestimonialTypes {
  id: string;
  title: string;
  review: string;
  stars: number;
  customer: string;
  position: string;
}

const VendorTemplateView = ({ data }) => {
  return (
    <>
      <Header />

      {data.strapiVendor.profile ?
        <Hero {...data.strapiVendor.profile} />
        : null}

      <main className="stork">
        <h1 className="range">{data.strapiVendor.name}</h1>
        <hr />
        <p>{data.strapiVendor.description}</p>

        {data.strapiVendor.testimonials.length > 0 ?
          <div className="stork" >
            <ul className='testimonials'>
              {data.strapiVendor.testimonials.map((testimonial: TestimonialTypes) => (
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
                        <p className='crest'><strong>{data.strapiVendor.name}</strong> - {testimonial.position}</p>
                      </figcaption>
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
          : null
        }

        <hr />

        <p>
          Website&nbsp;
          {data.strapiVendor.website.includes('https://') ?
            <a href={data.strapiVendor.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.strapiVendor.website}
            >
              <StrShort website={data.strapiVendor.website} />
            </a>
            :
            <a href={`https://${data.strapiVendor.website}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.strapiVendor.website}
            >
              <StrShort website={data.strapiVendor.website} />
            </a>
          }
        </p>
      </main>

      <IfOther
        projects={data.strapiVendor.projects}
        other={data.allStrapiVendor.edges}
        service={data.strapiVendor.service}
        name={data.strapiVendor.name}
      />

      <hr className='stork' />

      <Breadcrumbs>
        <Breadcrumb><Link to="/vendor/">Vendors</Link></Breadcrumb>
        {/* <Breadcrumb><Link to={`/vendor/${data.strapiVendor.service}`}>{data.strapiVendor.service}</Link></Breadcrumb> */}
        <Breadcrumb>{data.strapiVendor.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />

    </>
  );
};

export default VendorTemplateView;

export const query = graphql`
  query VendorTemplate(
    $slug: String!,
    $service: String!,
    ) {
      strapiVendor(slug: {eq: $slug}) {
        id
        name
        description
        slug
        instagram
        facebook
        website
        pinterest
        service
        excerpt

        profile {
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

        testimonials {
          id
          title
          review
          stars
          customer
          position
        }

        projects {
          id
          title
          slug
          excerpt
  
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  breakpoints: [222, 444, 880]
                  width: 222
                )
              }
            }
            alternativeText
          }
        }
      }

      allStrapiVendor(
        limit: 3,
        filter: {service: {eq: $service}, slug: {ne: $slug}}
      ) {
        edges {
          node {
            name
            id
            slug
            excerpt
      
            profile {
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

  }
`

export const Head = ({ data }) => {
  return (
    <SEO
      title={`${data.strapiVendor.name}`}
      description={data.strapiVendor.excerpt}
      url={`vendor/${data.strapiVendor.slug}`}
      image={data.strapiVendor?.profile?.localFile?.url}
      breadcrumbs={[
        {
          name: 'Vendors',
          item: 'vendor'
        },
        {
          name: data.strapiVendor.name,
          item: `vendor/${data.strapiVendor.slug}`
        }
      ]}
    />
  )
}
