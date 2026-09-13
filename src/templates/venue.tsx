import { graphql, Link, Script } from "gatsby";
import React from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import Markdown from "react-markdown";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import { Phone } from "../components/phone";
import StrShort from "../components/StrShort";
import { SEO } from "../components/seo";
import StateAbbreviation from "../components/state-abbreviation";
import Testimonial from "../components/testimonial";
import { data } from "../pages/about";
import type { CardType } from "../types/card-type";
import type { HeroSEOImageType } from "../types/hero-seo-image-type";
import type TestimonialTypes from "../types/testimonial-types";

type VenueViewTypes = {
  data: {
    strapiVenue: {
      id: React.Key;
      name: string;
      description: string;
      slug: string;
      excerpt: string;
      website: string;
      phone?: number;
      area: {
        name: string;
        state: "california" | "nevada";
        slug: string;
        featured: boolean;
        region: {
          name: string;
          slug: string;
        };
      };
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;

      address?: {
        data?: {
          address: string;
        };
      };
      venueImage: HeroSEOImageType;
      testimonials: TestimonialTypes[] | null;

      projects: CardType[];
    };
    allStrapiVenue: {
      nodes: CardType[];
    };
    strapiService: {
      featured_lights: CardType[];
    };

    strapiAbout: {
      businessName: string;
    };
  };
};
const VenueView = ({ data }: VenueViewTypes) => {
  return (
    <>
      <Header />

      {data.strapiVenue.venueImage ? (
        <Hero image={data.strapiVenue.venueImage} />
      ) : null}

      {/* // ? whats the venue class doing? */}
      <main className="venue">
        <hgroup>
          <p className="crest">
            {data.strapiVenue.area.name},{" "}
            <StateAbbreviation state={data.strapiVenue.area.state} />
          </p>
          <h1 className="range">{data.strapiVenue.name}</h1>
        </hgroup>
        <hr />
        <p>{data.strapiVenue.description}</p>

        {data.strapiVenue.testimonials &&
        data.strapiVenue.testimonials.length > 0 ? (
          <Testimonial {...data.strapiVenue.testimonials[0]} />
        ) : null}

        <hr />

        {data.strapiVenue.streetAddress ||
        data.strapiVenue.addressLocality ||
        data.strapiVenue.addressRegion ||
        data.strapiVenue.postalCode ? (
          <address>
            {data.strapiVenue.streetAddress &&
              `${data.strapiVenue.streetAddress},`}
            {data.strapiVenue.addressLocality &&
              `${data.strapiVenue.addressLocality},`}
            {data.strapiVenue.addressRegion &&
              `${data.strapiVenue.addressRegion},`}
            {data.strapiVenue.postalCode && `${data.strapiVenue.postalCode}`}
          </address>
        ) : null}

        {/* // * this is the deprecated version */}
        {!data.strapiVenue.streetAddress &&
        !data.strapiVenue.addressLocality &&
        !data.strapiVenue.addressRegion &&
        !data.strapiVenue.postalCode &&
        data.strapiVenue?.address?.data?.address ? (
          <address>
            <div className="react-markdown">
              <Markdown>{data.strapiVenue.address.data.address}</Markdown>
            </div>
          </address>
        ) : null}

        {data.strapiVenue.phone ? (
          <p>
            Phone: <Phone phone={data.strapiVenue.phone} />
          </p>
        ) : null}

        <p>
          Website&nbsp;
          {data.strapiVenue.website.includes("https://") ? (
            <a
              href={data.strapiVenue.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.strapiVenue.website}
            >
              <StrShort website={data.strapiVenue.website} />
            </a>
          ) : (
            <a
              href={`https://${data.strapiVenue.website}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.strapiVenue.website}
            >
              <StrShort website={data.strapiVenue.website} />
            </a>
          )}
        </p>
      </main>
      {/* 
      <Region
        region={data.strapiVenue.area.region}
        area={data.strapiVenue.area}
        areas={data.strapiVenue.area.areas}
      /> */}

      <section className="above-deck">
        <hr />
        <h3 className="kilimanjaro">
          Explore the lighting styles we can create at {data.strapiVenue.name}
        </h3>
      </section>

      <div className="deck">
        {data.strapiService.featured_lights.map((light: CardType) => (
          <Card key={light.id} {...light} breadcrumb="light" />
        ))}
      </div>

      <h4 className="main">
        <Link to="/wedding/lights">Browse all our wedding lighting styles</Link>
      </h4>

      {data.strapiVenue.projects.length > 0 ? (
        <>
          <div className="above-deck">
            <hr />
            <h3 className="crest">Projects at {data.strapiVenue.name}</h3>
          </div>
          <div className="deck">
            {data.strapiVenue.projects.map((card: CardType) => (
              <Card key={card.id} {...card} breadcrumb="project" />
            ))}
          </div>
        </>
      ) : null}

      {data.allStrapiVenue.nodes.length > 0 ? (
        <>
          <div className="above-deck">
            <hr />
            <h3 className="crest">
              More Venues in {data.strapiVenue.area.name},{" "}
              <StateAbbreviation state={data.strapiVenue.area.state} />
            </h3>
          </div>
          <div className="deck">
            {data.allStrapiVenue.nodes.map((card: CardType) => (
              <Card key={card.id} {...card} breadcrumb="venue" />
            ))}
          </div>
        </>
      ) : (
        <div className="main">
          <h3 className="crest">Looking for somewhere else?</h3>
          <h2 className="range">
            <Link to="/venue">
              Other {data.strapiVenue.slug === "blue" ? null : "Wedding"} Venues
            </Link>
          </h2>
        </div>
      )}

      <hr />

      {/* // ? I dont think we have non featured pages anymore */}
      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/venue/">Venues</Link>
        </Breadcrumb>
        <Breadcrumb>
          {data.strapiVenue.area.featured ? (
            <Link to={`/areas/${data.strapiVenue.area.slug}`}>
              {data.strapiVenue.area.name}
            </Link>
          ) : (
            data.strapiVenue.area.name
          )}
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

        streetAddress
        addressLocality
        addressRegion
        postalCode

        venueImage {
          ...heroSEOImageFragment
        }

        projects {
          ...projectCardFragment
        }
        testimonials {
          ...testimonialCardFragment
        }
      }

      # // * blue is a heavyhanded way until I do other uses on venues
      allStrapiVenue(
        limit: 3,
        filter: {
          area: {slug: {eq: $area}},
          slug: {nin: [$slug, "blue"]}
        }
      ) {
        nodes {
          ...venueCardFragment

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

      strapiAbout{
        businessName
      }
  }
`;

export const Head = ({ data }: VenueViewTypes) => {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    data.strapiVenue;
  const structuredAddress = [
    streetAddress,
    addressLocality,
    addressRegion,
    postalCode,
  ]
    .filter(Boolean)
    .join(", ");
  const legacyAddress = data.strapiVenue.address?.data?.address?.replace(
    /[\r\n]+/g,
    " ",
  );
  const address = structuredAddress || legacyAddress || "";

  return (
    <SEO
      title={`${data.strapiVenue.name} Wedding Venue`}
      description={`${data.strapiAbout.businessName} creates beautiful lighting for weddings and events at ${data.strapiVenue.name} located at ${address}`}
      image={data.strapiVenue?.venueImage}
      breadcrumbs={[
        {
          name: "Venues",
          item: "/venue",
        },
        {
          name: data.strapiVenue.area.featured
            ? data.strapiVenue.area.name
            : `${data.strapiVenue.area.name}, ${data.strapiVenue.area.state}`,
          item: `/areas/${data.strapiVenue.area.slug}`,
        },
        {
          name: data.strapiVenue.name,
          item: `/venue/${data.strapiVenue.slug}`,
        },
      ]}
    >
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          name: data.strapiVenue.name,
          description: data.strapiVenue?.excerpt,
          image: data.strapiVenue?.venueImage?.localFile?.url,

          url: data.strapiVenue?.slug,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://sierra.lighting/venue/${data.strapiVenue?.slug}/`,
          },

          address: {
            "@type": "PostalAddress",
            streetAddress: data.strapiVenue?.streetAddress,
            addressLocality: data.strapiVenue?.addressLocality,
            addressRegion: data.strapiVenue?.addressRegion,
            postalCode: data.strapiVenue?.postalCode,
          },
        })}
      </Script>
    </SEO>
  );
};
