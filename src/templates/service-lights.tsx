import { graphql, Link } from "gatsby";
import React from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import ReactMarkdown from "react-markdown";
import Footer from "../components/footer";
import Header from "../components/header";
import ImageCheck from "../components/image-check";
import SEO from "../components/seo";
import type { CardType } from "../types/card-type";
import type { HeroSEOImageType } from "../types/hero-seo-image-type";

type ServiceLightViewTypes = {
  data: {
    strapiService: {
      id: string;
      name: string;
      slug: string;
      description: {
        data: {
          description: string;
        };
      };
      excerpt: string;
      ogimage: HeroSEOImageType;
    };
    allStrapiService: {
      nodes: {
        id: string;
        name: string;
        slug: string;
      }[];
    };
    allStrapiLightGroup: {
      nodes: {
        id: React.Key;
        name: string;
        slug: string;
        weddingOrder: number;
        xmasOrder: number;
        excerpt: string;
        lights: (CardType & {
          services: { slug: string }[];
        })[];
      }[];
    };
  };
}

const ServiceLightView = ({ data }: ServiceLightViewTypes) => {
  // sort by value
  const events = ["Wedding", "Non-wedding Events", "Commercial Events"];

  const xmas = ["Residential Christmas", "Commercial Christmas"];

  if (events.includes(data.strapiService.name)) {
    data.allStrapiLightGroup.nodes.sort(
      (a, b) => a.weddingOrder - b.weddingOrder,
    );
  } else if (xmas.includes(data.strapiService.name)) {
    data.allStrapiLightGroup.nodes.sort((a, b) => a.xmasOrder - b.xmasOrder);
  }

  return (
    <>
      <Header />

      <main>
        {/* // * aconcagua for a long headline */}
        <h1 className="aconcagua">
          {data.strapiService.name} Lighting products
        </h1>
        <div className="react-markdown">
          <ReactMarkdown>
            {data.strapiService.description.data.description}
          </ReactMarkdown>
        </div>
        <p>
          <Link to={`/${data.strapiService.slug}`}>
            Learn more about how we can light up your {data.strapiService.name}
          </Link>
        </p>

        <hr />
        <p>Filter by type:</p>
        <ul>
          {data.allStrapiLightGroup.nodes.map((group) => (
            <li key={group.slug}>
              <Link to={`#${group.slug}`}>{group.name}</Link>
            </li>
          ))}
        </ul>
      </main>

      <section>
        {data.allStrapiLightGroup.nodes.map((group) => (
          <React.Fragment key={group.id}>
            <div className="above-deck" id={group.slug}>
              <hr />
              <h2>
                <Link to={`/light-group/${group.slug}`}>
                  {group.name}
                </Link>
              </h2>
              <p>{group.excerpt}</p>
            </div>
            <div className="deck">
              {group.lights
                .filter(light => light.services.some(service => service.slug === data.strapiService.slug))
                .map((light) =>
                  <ImageCheck
                    key={light.id}
                    {...light}
                  />
                )}
            </div>
          </React.Fragment>
        ))}
      </section>

      <section className="main">
        <hr />
        <h2>Lights For Other Services</h2>
        <ul>
          {data.allStrapiService.nodes.map((service) => (
            <li key={service.id}>
              <Link to={`/${service.slug}/lights`}>{service.name} Lights</Link>
            </li>
          ))}
        </ul>
        <hr />
      </section>

      <Breadcrumbs>
        <Breadcrumb>
          <Link to={`/${data.strapiService.slug}`}>
            {data.strapiService.name} Lighting
          </Link>
        </Breadcrumb>
        <Breadcrumb>Projects</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default ServiceLightView;

export const query = graphql`
  query ServiceLightsTemplate(
    $slug: String!,
  ) {

    strapiService(slug: {eq: $slug}) {
      id
      name
      slug
      description {
        data {
          description
        }
      }
      ogimage {
        ...heroSEOImageFragment
      }
    }

    allStrapiService(filter: {slug: {ne: $slug}}) {
      nodes {
        id
        name
        slug
      }
    }

    allStrapiLightGroup(filter: {services: {elemMatch: {slug: {eq: $slug}}}}) {
      nodes {
        id
        name
        slug
        excerpt
        weddingOrder
        xmasOrder

        lights {
          ...lightCard
          services {
            slug
          }
          
          residentialHero {
            ...cardImageFragment
          }
          commercialHero {
            ...cardImageFragment
          }
        }
      }
    }

  }
`;

export const Head = ({ data }: ServiceLightViewTypes) => {
  return (
    <SEO
      title={`Lighting types for ${data.strapiService.name}`}
      description={data.strapiService.excerpt}
      url={`${data.strapiService.slug}/lights`}
      image={data.strapiService.ogimage}
      breadcrumbs={[
        {
          name: data.strapiService.name,
          item: data.strapiService.slug,
        },
        {
          name: `${data.strapiService.name} Lights`,
          item: `${data.strapiService.slug}/lights`,
        },
      ]}
    />
  );
};
