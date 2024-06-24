import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Start from "../components/start";
import type { CardType } from "../types/card-type";

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

const LightView = ({ light }) => {

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
    light.image?.alternativeText ?
      console.log(`light view image alt ${light.image?.alternativeText}`)
      : console.warn('light view image has no alt')
    : null

  return (
    <>
      <Header />

      <main>

        <div className="light-hero poster">
          <GatsbyImage
            image={
              light?.image?.localFile?.childImageSharp
                ?.gatsbyImageData
            }
            alt={light.image?.alternativeText ? light.image?.alternativeText : light.name}
          />
          {light?.detail ?
            <GatsbyImage
              image={light.detail?.localFile?.childImageSharp?.gatsbyImageData}
              alt={light.detail?.alternativeText ? light.detail?.alternativeText : light.name}
              className="detail"
            />
            : null
          }
        </div>

        <article className="stork">
          {/* // TODO: this could be using a js length test for the lower clamp */}
          <h1 className="clamp-denali_everest">{light.name}</h1>

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
        </ul>
      </section>

      {light.projects.length > 0 ?
        <>
          <div className="stork">
            <hr />
            <h3>Projects Using {light.name}</h3>
          </div>


          <div className="deck">
            {light.projects.map((project: CardType) => (
              <Card
                key={project.id}
                {...project}
                breadcrumb="project"
              />
            ))}
          </div>
        </>
        : null}

      {light.light_groups ?
        <div>
          {light.light_groups.map((group: GroupTypes) => {
            return (
              <div key={group.id}>

                <hr className="stork" />
                <h3 className="stork">
                  Other Lights in {group.name}
                </h3>

                <div className="deck">
                  {group.lights.map((light: CardType) => (
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
        : null}

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/light/">Lights</Link></Breadcrumb>
        <Breadcrumb>{light.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default LightView;
