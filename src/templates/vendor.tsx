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
import SocialIcons from '../components/social-icons';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

// types
import type { CardType } from '../types/card-type';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface VendorTemplateViewTypes {
  data: {
    strapiVendor: {
      id: React.Key;
      name: string;
      description: string;
      slug: string;
      instagram: string;
      facebook: string;
      website: string;
      pinterest: string;
      excerpt: string;

      profile: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
          url: string;
        };
        alternativeText: string;
      };

      collaborator: {
        industry: string;
        slug: string;
        description: BlocksContent;
      };

      testimonials: {
        id: React.Key;
        title: string;
        review: string;
        stars: number;
        customer: string;
        position: string;
      }[];

      projects: CardType[];
    };

    allStrapiVendor: {
      nodes: CardType[];
    };
  };
}

const VendorTemplateView = ({ data }: VendorTemplateViewTypes) => {

  // console.log(data.strapiVendor.instagram)

  return (
    <>
      <Header />

      {data.strapiVendor.profile ?
        <Hero image={data.strapiVendor.profile} />
        : null}

      <main className="stork">
        <h1 className="range">{data.strapiVendor.name}</h1>
        <hr />
        <p>{data.strapiVendor.description}</p>

        {data.strapiVendor.testimonials.length > 0 ?
          <div className="stork" >
            <ul className='testimonials'>
              {/* // TODO: component this */}
              {data.strapiVendor.testimonials.map((testimonial) => (
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

        {data.strapiVendor.instagram || data.strapiVendor.pinterest || data.strapiVendor.facebook ?
          <>
            <hr />
            <SocialIcons
              businessName={data.strapiVendor.name}
              instagram={data.strapiVendor.instagram}
              facebook={data.strapiVendor.facebook}
              pinterest={data.strapiVendor.pinterest}
            />
          </>
          : null
        }

        <hr />
        <BlocksRenderer content={data.strapiVendor.collaborator.description} />
      </main>



      {data.strapiVendor.projects.length > 0 ?
        <>
          <div className="stork">
            <hr />
            <h4>Projects we have worked with {data.strapiVendor.name} on</h4>
          </div>
          <div className="deck">
            {data.strapiVendor.projects.map((project: CardType) => (
              <Card
                key={project.id}
                {...project}
                breadcrumb='project'
              />
            ))}
          </div>
        </>
        : null
      }

      {data.allStrapiVendor.nodes.length > 0 ?
        <>
          <div className="stork">
            <hr />
            <Link to={`/vendor/${data.strapiVendor.collaborator.slug}`}>
              <h4>Other <span className='capitalize'>{data.strapiVendor.collaborator.industry}</span> Vendors</h4>
            </Link>
          </div>

          <div className="deck">
            {data.allStrapiVendor.nodes.map((vendor: CardType) => (
              <Card
                key={vendor.id}
                {...vendor}
                breadcrumb='vendor'
              />
            ))}
          </div>
        </>
        : null}

      {data.strapiVendor.projects.length === 0 && data.allStrapiVendor.nodes.length === 0 ?
        <div className="stork">
          <h3 className="crest">Looking for something else?</h3>
          <h2 className="range">
            <Link to='/vendor'>
              Other Wedding Vendors
            </Link>
          </h2>
        </div>
      : null}

      <hr className='stork' />

      <Breadcrumbs>
        <Breadcrumb><Link to="/vendor/">Vendors</Link></Breadcrumb>
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
    $collaborator: String!,
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
        excerpt
        collaborator {
          industry
          slug
          description {
            children {
              text
              type
            }
            type
          }
        }

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
        filter: {collaborator: {slug: {eq: $collaborator}}, slug: {ne: $slug}}
      ) {
        nodes {
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
`

export const Head = ({ data }: VendorTemplateViewTypes) => {
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
