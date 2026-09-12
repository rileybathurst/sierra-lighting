// TODO: holiday vs wedding flip here
// TODO: add a gallery of images from the area
// TODO: showing more 18 projects like north lake is way over the top - split them by service or just pull a couple

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
import type { ImageWithAspectType } from "../types/image-with-aspect-type";
import type { SuiteType } from "../types/suite-type";

// this is no longer right as there might only be sub venues
// if (venues.length !== 0) {
interface VenuesProps {
  name: string;
  venues: CardType[];
  areas: {
    name: string;
    slug: string;
    excerpt: string;
    venues: CardType[];
    projects: CardType[];
  }[];
}

function Venues({ name, areas }: VenuesProps) {
  const subVenues = [];
  areas.forEach((area) => {
    if (area.venues.length > 0) {
      subVenues.push(area.venues);
    }
  });

  if (subVenues.length > 0) {
    return (
      <>
        <div className="above-deck">
          <hr />
          {/* // TODO: this is bold in a way it shouldnt be */}
          <h3 className="elbrus">
            Wedding Venues in {name} we create lighting for
          </h3>
        </div>

        <div className="deck">
          {subVenues.length > 0
            ? areas.map((area) =>
                area.venues.length >= 1
                  ? area.venues.map((venue: CardType) => (
                      <Card key={venue.id} {...venue} breadcrumb="venue" />
                    ))
                  : null,
              )
            : null}
        </div>
      </>
    );
  }
  return null;
}
type AreasTemplateTypes = {
  data: {
    strapiArea: {
      id: Key;
      title: string;
      tagline: string;
      description: {
        data: {
          description: string;
        };
      };
      state: "california" | "nevada";
      slug: string;
      image: ImageWithAspectType;
      areas: {
        name: string;
        slug: string;
        excerpt: string;
        // ? are both versions of venues and projects necessary
        venues: CardType[];
        projects: CardType[];
      }[];
      venues: CardType[];
      projects: CardType[];
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
  let areaProjectHeros: ImageWithAspectType[] = [];
  if (data.strapiArea.projects) {
    areaProjectHeros = data.strapiArea.projects
      .map((project) => project.image)
      .filter(
        (img): img is ImageWithAspectType =>
          !!img && !!img.localFile?.childImageSharp?.gatsbyImageData,
      );

    if (data.strapiArea.areas.length > 0) {
      data.strapiArea.areas.forEach((area) => {
        if (area.projects.length > 0) {
          area.projects.forEach((project) => {
            if (project.image?.localFile?.childImageSharp?.gatsbyImageData) {
              areaProjectHeros.push(project.image as ImageWithAspectType);
            }
          });
        }
      });
    }
  }

  // areas and sub area projects
  const areaSubAreaProjects = new Set<CardType>();

  if (data.strapiArea.projects) {
    data.strapiArea.projects.forEach((project) => {
      areaSubAreaProjects.add({ ...project, breadcrumb: "project" });
    });

    if (data.strapiArea.areas.length > 0) {
      data.strapiArea.areas.forEach((area) => {
        if (area.projects.length > 0) {
          area.projects.forEach((project) => {
            areaSubAreaProjects.add({ ...project, breadcrumb: "project" });
          });
        }
      });
    }
  }

  // console.log(areaSubAreaProjects);
  const areaSubAreaProjectsArray = Array.from(areaSubAreaProjects);
  // console.log(areaSubAreaProjectsArray);

  return (
    <>
      <Header />

      {/* // TODO: check on small images */}
      {data.strapiArea.image ? (
        <Hero image={data.strapiArea.image} gallery={areaProjectHeros} />
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
        <hr />
        {data.strapiArea?.description && (
          <div className="react-markdown">
            <Markdown>{data.strapiArea.description.data.description}</Markdown>
          </div>
        )}

        {/* // TODO: make this a second column on a larger screen */}
        {data.strapiArea.areas.length > 0 && (
          <React.Fragment>
            <hr />
            <p className="elbrus">
              Regions we light in {data.strapiArea.title}
            </p>
            <ul className="subareas">
              {data.strapiArea.areas.map((area) => (
                <li key={area.name}>
                  <h2 className="elbrus">{area.name}</h2>
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

      {areaSubAreaProjectsArray.length > 0 ? (
        <section>
          <div className="above-deck">
            <hr />
            <h3>
              Lighting projects in we have installed in {data.strapiArea.title}
            </h3>
          </div>
          <div className="deck">
            {areaSubAreaProjectsArray.map((project: CardType) => (
              <Card key={project.id} {...project} breadcrumb="project" />
            ))}
          </div>
        </section>
      ) : null}

      <div className="main">
        <hr />
        <Start
          className="button--left-align"
          path={`areas-services-${data.strapiArea.slug}`}
        />
      </div>

      <Venues
        name={data.strapiArea.title}
        venues={data.strapiArea.venues}
        areas={data.strapiArea.areas}
      />

      {/* // TODO: where in the state do we work */}

      <hr />

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

      description {
        data {
          description
        }
      }

      state
      slug

      image {
        ...imageWithAspectFragment
      }

      projects {
        id
        title
        slug
        excerpt

        image {
          ...imageWithAspectFragment
        }
      }

      areas {
        name
        slug
        excerpt

        venues {
          ...venueCardFragment
        }

        projects {
          id
          title
          slug
          excerpt

          image {
            ...imageWithAspectFragment
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
