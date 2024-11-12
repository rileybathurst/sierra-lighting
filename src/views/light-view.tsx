import * as React from "react";
import { Link } from "gatsby";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Start from "../components/start";
import Hero from "../components/hero";
import type { CardType } from "../types/card-type";
import type { GatsbyImageType } from "../types/gatsby-image";

interface AliasTypes {
  alias: string;
}
function Aliases({ alias }: AliasTypes) {

  // this combines with a specific regex in strapi
  // testing with market lights
  // console.log(light.alias);
  const split = alias.split('\n').map((line: string) => line.replace('- ', ''));

  return (
    <>
      <h3 className="kilimanjaro">Also known as:</h3>
      <ul>
        {split.map((aka: string) => {
          return (
            <li key={aka} className="capitalize">
              {aka}
            </li>
          )
        })}
      </ul>
      <hr />
    </>
  );
}

type LightViewTypes = {
  light: {
    id: React.Key;
    name: string;
    slug: string;
    excerpt: string;
    description: string;

    services: {
      id: React.Key;
      name: string;
      slug: string;
    }[];

    light_groups: {
      id: React.Key;
      name: string;
      slug: string;
      lights: CardType[];
    }[];
    alias: string;
    image: GatsbyImageType;
    detail: GatsbyImageType;

    altGallery: GatsbyImageType[];
  };
  other: {
    nodes: CardType[];
  };
  weddingProcess: {
    id: React.Key;
    name: string;
  }[];
  holidayProcess: {
    id: React.Key;
    name: string;
  }[];
  projects: {
    nodes: CardType[];
  };
}
const LightView = ({ light, other, weddingProcess, holidayProcess, projects }: LightViewTypes) => {

  console.log(holidayProcess);

  interface ServiceTypes {
    id: React.Key;
    name: string;
    slug: string;
  }

  interface GroupTypes {
    id: React.Key;
    name: string;
    lights: CardType[];
  }

  process.env.NODE_ENV === "development" ?
    light?.image
      ? null
      : console.warn(`${light.name} image is missing`)
    : null;

  process.env.NODE_ENV === "development" ?
    light.image?.alternativeText ?
      null
      : console.warn(`${light.name} image has no alt`)
    : null;


  // console.log(light.services);
  type processTypes = {
    id: React.Key;
    name: string;
  };

  // console.log(projects);

  return (
    <>
      <Header />

      <Hero
        image={light.image}
        name={light.name}
        detail={light.detail}
        gallery={light?.altGallery}
        badge={true}
      />

      <main>
        <article className="stork">
          <h1 className="denali">
            {light.name}
            {light.services.every(service => service.slug === 'residential' || service.slug === 'commercial') ? (
              <span className="capitalize"> for christmas lighting</span>
            ) : (
              <span className="capitalize"> for wedding lighting</span>
            )}

          </h1>

          {light.alias ? <Aliases alias={light.alias} /> : null}

          <p>{light.description}</p>
          <hr />
          <Start />
        </article>
      </main >

      <hr className="stork" />

      <section className="attribute stork">
        <h3 className="crest">We use {light.name} for</h3>
        <ul className="">
          {light.services.map((service: ServiceTypes) => {
            return (
              <li
                key={service.id}
                className="kilimanjaro capitalize"
              >
                <Link to={`/${service.slug}`}>
                  {service.name} lighting
                </Link>
              </li>
            )
          })}
          {/* <li><hr /></li> */}
          {/* <li className="kilimanjaro capitalize">Learn more about our <Link to="/process">process</Link></li> */}
          <li className="kilimanjaro capitalize"><Link to="/faqs">Frequently Asked Questions</Link></li>
        </ul>
      </section>

      <section className="stork">
        <hr />
        <h3><Link to="/process">Learn more about our process</Link></h3>
        <ol>
          {light.services.every(service => service.slug === 'residential' || service.slug === 'commercial') ? (
            holidayProcess.nodes.map((process: processTypes) => {
              return (
                <li
                  key={process.id}
                >
                  {process.name}
                </li>
              )
            })

          ) : weddingProcess.nodes.map((process: processTypes) => {
            return (
              <li
                key={process.id}
              >
                {process.name}
              </li>
            )
          })

          }
        </ol>
      </section>

      {light.light_groups.length > 0 ?
        <div>
          {light.light_groups.map((group: GroupTypes) => {
            return (
              <div key={group.id}>

                <hr className="stork" />
                <h3 className="stork">
                  Other Lights in {group.name}
                </h3>

                <div className="deck">
                  {group.lights
                    .filter((lightSlug) => lightSlug.slug !== light.slug)
                    .map((light: CardType) => (
                      <Card
                        key={light.id}
                        {...light}
                        breadcrumb="light"
                      />
                    ))}
                </div>
              </div>
            )
          })}
        </div>
        :
        <>
          <hr className="stork" />
          <h3 className="stork">
            Other Lights
          </h3>
          <div className="deck">
            {other.nodes.map((light: CardType) => (
              <Card
                key={light.id}
                {...light}
                breadcrumb="light"
              />
            ))}
          </div>
        </>
      }

      {/* // TODO: if more than 3 */}
      {projects.nodes.length > 0 ?
        <>
          <div className="stork">
            <hr />
            <h3>Projects Using {light.name}</h3>
          </div>


          <div className="deck">
            {projects.nodes.map((project: { nodes: CardType }) => (
              <Card
                key={project.id}
                {...project}
                breadcrumb="project"
              />
            ))}
          </div>
        </>
        : null}

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/lights/">Lights</Link></Breadcrumb>
        <Breadcrumb>{light.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default LightView;
