import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import { graphql, Link, Script } from "gatsby";
import React from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import Card from "../components/card";
import DeprecatedSocials from "../components/deprecated-socials";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import StrShort from "../components/StrShort";
import { SEO } from "../components/seo";
import Socials from "../components/socials";
import TestimonialRanking from "../components/testimonial-ranking";
import type { CardType } from "../types/card-type";
import type { ImageWithAspectType } from "../types/image-with-aspect-type";

interface VendorTemplateViewTypes {
  data: {
    strapiVendor: {
      id: React.Key;
      name: string;
      description: string;
      slug: string;
      website: string;
      excerpt: string;
      collaboratorAncillary?: string;

      instagram: string;
      facebook: string;
      pinterest: string;
      social: {
        id: React.Key;
        username: string;
        site: {
          id: React.Key;
          service: string;
          link: string;
          icon: string;
        };
      }[];

      profile: ImageWithAspectType;

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
  return (
    <>
      <Header />

      {data.strapiVendor.profile ? (
        <Hero image={data.strapiVendor.profile} />
      ) : null}

      <main>
        <p>Sierra Lighting Collaborator</p>
        <h1 className="range">{data.strapiVendor.name}</h1>
        {data.strapiVendor.collaboratorAncillary ? (
          <h2>{data.strapiVendor.collaboratorAncillary}</h2>
        ) : null}
        <hr />
        <p>{data.strapiVendor.description}</p>

        {data.strapiVendor.testimonials.length > 0 ? (
          <div className="main">
            <ul className="testimonials">
              {/* // TODO: component this */}
              {data.strapiVendor.testimonials.map((testimonial) => (
                <li key={testimonial.id} className="testimonial">
                  <figure>
                    <blockquote>
                      <h3 className="sr-only">{testimonial.title}</h3>
                      {/* // TODO stars */}
                      <TestimonialRanking stars={testimonial.stars} />
                      <p className="testimonial--quote_mark range">&ldquo;</p>
                      <p>{testimonial.review}</p>
                      <figcaption>
                        <h4 className="range">{testimonial.customer}</h4>
                        <p className="crest">
                          <strong>{data.strapiVendor.name}</strong> -{" "}
                          {testimonial.position}
                        </p>
                      </figcaption>
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {data.strapiVendor.website ? (
          <React.Fragment>
            <hr />

            <p>
              Website&nbsp;
              {/* // TODO this seems like I could have a global function */}
              {data.strapiVendor.website.includes("https://") ? (
                <a
                  href={data.strapiVendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={data.strapiVendor.website}
                >
                  <StrShort website={data.strapiVendor.website} />
                </a>
              ) : (
                <a
                  href={`https://${data.strapiVendor.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={data.strapiVendor.website}
                >
                  <StrShort website={data.strapiVendor.website} />
                </a>
              )}
            </p>
          </React.Fragment>
        ) : null}

        {data.strapiVendor.social.length > 0 ||
        data.strapiVendor.instagram ||
        data.strapiVendor.pinterest ||
        data.strapiVendor.facebook ? (
          <React.Fragment>
            <hr />
            {data.strapiVendor.social.length > 0 && (
              <Socials services={data.strapiVendor.social} />
            )}

            {/* // * deprecated but theres too much here to migrate */}
            {data.strapiVendor.instagram ||
            data.strapiVendor.pinterest ||
            data.strapiVendor.facebook ? (
              <DeprecatedSocials
                instagram={data.strapiVendor.instagram}
                pinterest={data.strapiVendor.pinterest}
                facebook={data.strapiVendor.facebook}
              />
            ) : null}
          </React.Fragment>
        ) : null}

        {data.strapiVendor.collaborator ? (
          <React.Fragment>
            <hr />
            <BlocksRenderer
              content={data.strapiVendor.collaborator.description}
            />
          </React.Fragment>
        ) : null}
      </main>

      {data.strapiVendor.projects.length > 0 ? (
        <>
          <div className="above-deck">
            <hr />
            <h4>Projects we have worked with {data.strapiVendor.name} on</h4>
          </div>
          <div className="deck">
            {data.strapiVendor.projects.map((project: CardType) => (
              <Card key={project.id} {...project} breadcrumb="project" />
            ))}
          </div>
        </>
      ) : null}

      {data.strapiVendor.collaborator ? (
        data.allStrapiVendor.nodes.length > 0 ? (
          <>
            <div className="above-deck">
              <hr />
              <Link to={`/vendor/${data.strapiVendor.collaborator.slug}`}>
                <h4>
                  Other{" "}
                  <span className="capitalize">
                    {data.strapiVendor.collaborator.industry}
                  </span>{" "}
                  Vendors
                </h4>
              </Link>
            </div>

            <div className="deck">
              {data.allStrapiVendor.nodes.map((vendor: CardType) =>
                vendor.collaborator ? (
                  <Card
                    key={vendor.id}
                    {...vendor}
                    breadcrumb={`vendor/${vendor.collaborator.slug}` as const}
                  />
                ) : (
                  <Card key={vendor.id} {...vendor} breadcrumb="vendor" />
                ),
              )}
            </div>
          </>
        ) : null
      ) : null}

      {data.strapiVendor.projects.length === 0 &&
      data.allStrapiVendor.nodes.length === 0 ? (
        <div className="main">
          <h3 className="crest">Looking for something else?</h3>
          <h2 className="range">
            <Link to="/vendor">Other Wedding Vendors</Link>
          </h2>
        </div>
      ) : null}

      <hr />

      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/vendor/">Vendors</Link>
        </Breadcrumb>

        {data.strapiVendor.collaborator ? (
          <Breadcrumb>
            <Link to={`/vendor/${data.strapiVendor.collaborator.slug}`}>
              {data.strapiVendor.collaborator.industry}
            </Link>
          </Breadcrumb>
        ) : null}

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
    $collaborator: String,
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

        social {
          id
          username
          site {
            id
            service
            icon
          }
        }

        excerpt
        collaboratorAncillary
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
          ...heroSEOImageFragment
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
          ...projectCard
        }
      }

      allStrapiVendor(
        limit: 3,
        filter: {collaborator: {slug: {eq: $collaborator}}, slug: {ne: $slug}}
      ) {
        nodes {
          ...vendorCardFragment

          collaboratorAncillary
        }
      }

  }
`;

// ! vendor and venue need image to be sorted

export const Head = ({ data }: VendorTemplateViewTypes) => {
  return (
    <SEO
      title={`${data.strapiVendor.name}`}
      description={data.strapiVendor.excerpt}
      url={`vendor/${data.strapiVendor.slug}`}
      image={data.strapiVendor?.profile}
      breadcrumbs={[
        {
          name: "Vendors",
          item: "vendor",
        },
        {
          name: data.strapiVendor.name,
          item: `vendor/${data.strapiVendor.slug}`,
        },
      ]}
    >
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: data.strapiVendor.name,
          description: data.strapiVendor.excerpt,

          url: `vendor/${data.strapiVendor.slug}`,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://sierra.lighting/vendor/${data.strapiVendor?.slug}/`,
          },
        })}
      </Script>
    </SEO>
  );
};
