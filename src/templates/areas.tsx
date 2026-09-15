import { graphql, Link, Script } from "gatsby";
import React, { type Key } from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import Markdown from "react-markdown";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Season from "../components/season";
import { SEO } from "../components/seo";
import Start from "../components/start";
import StateAbbreviation from "../components/state-abbreviation";
import Suite from "../components/suite";
import type { CardType } from "../types/card-type";
import type { HeroSEOImageType } from "../types/hero-seo-image-type";
import type { SuiteType } from "../types/suite-type";

type AreasTemplateTypes = {
  data: {
    strapiArea: {
      id: Key;
      title: string;
      tagline: string;
      weddingDescription: {
        data: {
          weddingDescription: string;
        };
      };
      xmasDescription: {
        data: {
          xmasDescription: string;
        };
      };
      state: "california" | "nevada";
      slug: string;
      image: HeroSEOImageType;
      weddingImage: HeroSEOImageType;
      areas: {
        name: string;
        slug: string;
        excerpt: string;
        // ? are both versions of venues and projects necessary
        venues: CardType[];
        projects: (CardType & { services: { slug: string }[] })[];
      }[];
      venues: CardType[];
      projects: (CardType & { services: { slug: string }[] })[];
    };
    strapiAbout: {
      businessName: string;
    };
    allStrapiService: {
      nodes: SuiteType["services"];
    };
  };
};
const AreasTemplate = ({ data }: AreasTemplateTypes) => {
  // Using Project Heros is interesting but I'm not sure if it's right I was just trying to get something more
  let areaProjectHeros: HeroSEOImageType[] = [];
  if (data.strapiArea.projects) {
    areaProjectHeros = data.strapiArea.projects
      .map((project) => project.image)
      .filter(
        (img): img is HeroSEOImageType =>
          !!img && !!img.localFile?.childImageSharp?.gatsbyImageData,
      );

    if (data.strapiArea.areas.length > 0) {
      data.strapiArea.areas.forEach((area) => {
        if (area.projects.length > 0) {
          area.projects.forEach((project) => {
            if (project.image?.localFile?.childImageSharp?.gatsbyImageData) {
              areaProjectHeros.push(project.image as HeroSEOImageType);
            }
          });
        }
      });
    }
  }

  const allProjects = [
    ...data.strapiArea.projects,
    ...data.strapiArea.areas.flatMap((area) => area.projects),
  ];

  const allVenues = [
    ...data.strapiArea.venues,
    ...data.strapiArea.areas.flatMap((area) => area.venues),
  ];

  const eventSlugs = ["wedding", "social-events", "commercial-events"];
  const xmasSlugs = ["residential", "commercial"];

  const startingImage =
    Season() === "wedding"
      ? data.strapiArea?.weddingImage
      : data.strapiArea.image;

  return (
    <>
      <Header />

      {startingImage ? (
        <Hero image={startingImage} gallery={areaProjectHeros} />
      ) : null}
      <main>
        <h2 className="crest">{data.strapiArea.tagline}</h2>
        <h1 className="range">
          {data.strapiArea.title},&nbsp;
          <StateAbbreviation state={data.strapiArea.state} />
        </h1>
        <hr />
        <h3 className="kilimanjaro">Ready to work with us</h3>
        <Start path={`areas-${data.strapiArea.slug}`} />

        {(data.strapiArea?.weddingDescription ||
          data.strapiArea?.xmasDescription) && (
            <div className="react-markdown">
              <hr />
              <Markdown>
                {Season() === "wedding"
                  ? data.strapiArea.weddingDescription.data.weddingDescription
                  : data.strapiArea.xmasDescription.data.xmasDescription}
              </Markdown>
            </div>
          )}

        {data.strapiArea.areas.length > 0 && (
          <React.Fragment>
            <hr />
            <p className="elbrus">
              Regions we light in {data.strapiArea.title}
            </p>
            <ul className="area-list">
              {data.strapiArea.areas.map((area) => (
                <li key={area.name}>
                  <h3 className="elbrus">{area.name}</h3>
                  {/* <p>{area.excerpt}</p> */}
                </li>
              ))}
            </ul>
          </React.Fragment>
        )}
        <hr />
        <h3>
          Lighting installation services we provide in {data.strapiArea.title}
        </h3>
      </main>

      <Suite services={data.allStrapiService.nodes} />

      {allProjects.length > 0 ? (
        <section>
          <div className="above-deck">
            <hr />
            <h3>
              Lighting projects we have installed in {data.strapiArea.title}
            </h3>
          </div>
          <div className="deck">
            {allProjects
              .filter((project) =>
                (project.services ?? []).some((service) =>
                  eventSlugs.includes(service.slug),
                ),
              )
              .slice(-3)
              .map((project: CardType) => (
                <Card key={project.id} {...project} breadcrumb="project" />
              ))}
            {allProjects
              .filter((project) =>
                (project.services ?? []).some((service) =>
                  xmasSlugs.includes(service.slug),
                ),
              )
              .slice(-3)
              .map((project: CardType) => (
                <Card key={project.id} {...project} breadcrumb="project" />
              ))}
          </div>
        </section>
      ) : null}

      {allVenues.length > 0 && (
        <section>
          <div className="above-deck">
            <hr />
            <h3 className="elbrus">
              Wedding Venues in {data.strapiArea.title} we create lighting for
            </h3>
          </div>

          <div className="deck">
            {allVenues.map((venue: CardType) => (
              <Card key={venue.id} {...venue} breadcrumb="venue" />
            ))}
          </div>
          <hr />
        </section>
      )}

      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/areas/">Areas</Link>
        </Breadcrumb>
        <Breadcrumb>{data.strapiArea.title}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default AreasTemplate;

export const query = graphql`
  query AreasTemplate(
  $slug: String!
  ) {
    strapiArea(slug: {eq: $slug}) {
      id
      title: name
      tagline
      excerpt

      weddingDescription {
        data {
          weddingDescription
        }
      }
      xmasDescription {
        data {
          xmasDescription
        }
      }

      state
      slug

      image {
        ...heroSEOImageFragment
      }

      weddingImage {
        ...heroSEOImageFragment
      }

      projects {
        id
        title
        slug
        excerpt

        image {
          ...heroSEOImageFragment
        }

        services {
          slug
        }
      }

      venues {
        ...venueCardFragment
      }

      areas {
        name
        slug
        excerpt

        venues {
          ...venueCardFragment
        }

        # needs to supply a hero image as well as the card hence not the card fragment
        projects {
          id
          title
          slug
          excerpt

          image {
            ...heroSEOImageFragment
          }

          services {
            slug
          }
        }
      }
    }

    strapiAbout {
      businessName
    }

    allStrapiService {
      nodes {
        ...suiteFragment
      }
    }
  }
      `;

export const Head = ({ data }: AreasTemplateTypes) => {
  const servicesString = data.allStrapiService.nodes
    .map((service) => `${service.name} light installs`)
    .join(", ");

  let subAreasString = "";
  if (data.strapiArea.areas.length > 0) {
    subAreasString = data.strapiArea.areas.map((area) => area.name).join(", ");
  }

  const seasonalOrder =
    Season() === "wedding"
      ? "Wedding, Christmas and event"
      : "Christmas, Wedding and event";

  return (
    <SEO
      title={`${data.strapiArea.title} professional ${seasonalOrder} light installation`}
      description={`Professional ${servicesString} installations in ${data.strapiArea.title}${subAreasString ? `, ${subAreasString}` : null}.`}
      image={data.strapiArea?.image}
      breadcrumbs={[
        {
          name: "Areas",
          item: "areas",
        },
        {
          name: data.strapiArea.title,
          item: `areas/${data.strapiArea.slug}`,
        },
      ]}
    >
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${data.strapiAbout.businessName}",
            "areaServed": {
              "@type": "Place",
              "name": "${data.strapiArea.title}"
            }
          }
        `}
      </Script>
    </SEO>
  );
};
