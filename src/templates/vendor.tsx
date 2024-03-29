import React from 'react';
import { graphql, Link } from 'gatsby'

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

import Website from "../components/website";
import IfHero from "../components/ifHero";

import TestimonialRanking from "../components/testimonial-ranking";
import Card from '../components/card';
import { CardType } from '../types/card';

function IfOther(props) {
  if (props.projects.length > 0) {

    // console.log(props.projects);

    return (
      <>
        <div className="measure">
          <hr />
          <h4>Projects we have worked with {props.name} on</h4>
        </div>
        <div className="deck">
          {props.projects.map((project: CardType) => (
            <div key={project.id}>
              <Card
                card={project}
                breadcrumb='project'
              />
            </div>
          ))}
        </div>
      </>
    );
  } else if (props.other.length > 0) {
    return (
      <>
        <div className="measure">
          <hr />
          <h4>Other <span className='first-capital'>{props.service}</span> Vendors</h4>
        </div>

        <div className="deck">
          {/* // TODO: needs nesting */}
          {props.other.map((other: CardType) => (
            <div key={other.node.id}>
              <Card
                card={other.node}
                breadcrumb='vendor'

              />
            </div>
          ))}
        </div>
        <div className="measure">
          <h3 className="crest">Even More</h3>
          <h2 className="range">
            <Link to={`/vendors/${props.service}`} className="link--subtle">
              All Other <span className='first-capital'>{props.service}</span> Vendors
            </Link>
          </h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="measure">
          <h3 className="crest">Looking for something else?</h3>
          <h2 className="range"><Link to='/vendor' className="link--subtle">Other Wedding Vendors</Link></h2>
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

const VendorTemplateView = ({ data }) => {
  return (
    <>
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li key='2' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/vendor">
              <span itemProp="name">Vendors</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li key='3' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to={`/vendors/${data.strapiVendor.service}`}>
              <span itemProp="name" className='first-capital'>{data.strapiVendor.service}</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li key='4' itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{data.strapiVendor.name}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <IfHero hero={data?.strapiVendor?.profile} />

      <main className="measure">
        <article className="single">
          <h1 className="range">{data.strapiVendor.name}</h1>
          <hr />
          <p>{data.strapiVendor.description}</p>

          <Testimonials testimonials={data.strapiVendor.testimonials} venue={data.strapiVendor.name} />

          <hr />

          <p><Website website={data.strapiVendor.website} /></p>

          <hr />
        </article>
      </main>


      <IfOther
        projects={data.strapiVendor.projects}
        other={data.allStrapiVendor.edges}
        service={data.strapiVendor.service}
        name={data.strapiVendor.name}
      />

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
      title={`${data.strapiVendor.name} | ${useSiteMetadata().title}`}
      description={data.strapiVendor.excerpt}
      url={`vendor/${data.strapiVendor.slug}`}
      image={data.strapiVendor?.profile?.localFile?.url}
    />
  )
}
