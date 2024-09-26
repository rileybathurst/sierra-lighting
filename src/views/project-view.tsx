import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image"
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import StateAbbreviation from "../components/state-abbreviation";
import Card from "../components/card";
import Start from "../components/start";
import Hero from "../components/hero";
import type { CardType } from "../types/card-type";
// import Testimonial from "../components/testimonial";

interface ProjectViewTypes {
  project: {
    id: React.Key;
    title: string;
    description?: {
      data: {
        description: string;
      };
    };
    excerpt?: string;
    slug: string;
    ogImage?: string;
    image?: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
        url: string;
      };
      alternativeText: string;
    };
    gallery: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
        url: string;
      };
      alternativeText: string;
    }[];
    lights: CardType[];
    areas: {
      name: string;
      state: string;
      slug: string;
    }[];
    team: {
      name: string;
      slug: string;
    }[];
    vendors: {
      id: React.Key;
      name: string;
      slug: string;
      service: string;
    }[];
    venue: {
      name: string;
      slug: string;
      area: {
        id: React.Key;
        name: string;
        slug: string;
        state: string;
      };
    };
    services: {
      name: string;
      slug: string;
    }[];
  };
  triptych: CardType[];
  additional: {
    id: React.Key;
    name: string;
    slug: string;
  }[];
  other: {
    nodes: CardType[];
  };
}
const ProjectView = ({ project, triptych, additional, other }: ProjectViewTypes) => {

  return (
    <>
      <Header />

      {project.image ?
        <Hero {...project.image} />
        : null}

      <main className="stork">
        <article className="single">
          <h1>{project.title}</h1>
          {project.description ?
            <ReactMarkdown className='react-markdown'>
              {project.description.data.description}
            </ReactMarkdown>
            : <p>{project.excerpt}</p>}
        </article>

        <hr />
        <h3>Interested in a project like this</h3>
        <Start />
      </main>

      {project.gallery ?
        <section className="deck">
          {project.gallery.map((image) => (
            <div
              key={image.localFile.url}
              className="poster"
            >
              {/* // TODO: these could be expandable in some way or another */}
              <GatsbyImage
                image={
                  image?.localFile?.childImageSharp?.gatsbyImageData
                }
                alt={image.alternativeText || "Gallery Image"}
              />
            </div>
          ))}
        </section>
        : null}


      {/* // * no testimonials currently link to projects so this breaks
      
      {project.testimonial ?
        <>
          <hr className="pelican" />
          <div className="stork">
            <Testimonial {...project.testimonial} />
          </div>
        </>
        : null} */}

      {/* // ! in here is a list key issue */}
      {project.venue || project.areas || project.vendors || project.team ?
        <>
          <hr className="pelican" />
          <div className="attributes">

            {project.venue ?
              <section className="attribute">
                <h3 className="crest">Venue</h3>
                <h4 className="range">
                  <Link to={`/venue/${project.venue.slug}`} className="link--subtle">
                    {project.venue.name}
                  </Link>
                </h4>

                {project.venue?.area ?
                  <p>
                    <Link to={`/areas/${project.venue.area.slug}`} className="link--subtle">
                      {project.venue.area.name}, <StateAbbreviation state={project.venue.area.state} />
                    </Link>
                  </p>
                  : null}

              </section>
              : null}

            {project.vendors.length > 0 ?
              <section className="attribute">
                <h3 className="crest">Vendor{project.vendors.length > 1 ? 's' : null}</h3>
                {project.vendors.map(vendor => (
                  <div key={vendor.id}>
                    <h4 className="range">
                      {/* // TODO these could kinda be attached so the hover state is nicer */}
                      <Link to={`/vendor/${vendor.slug}`} className="link--subtle">
                        {vendor.name}
                      </Link>
                    </h4>
                    <p>
                      <Link to={`/vendor/${vendor.slug}`} className="link--subtle">
                        <span className="capitalize">{vendor.service}</span><br />
                      </Link>
                    </p>
                  </div>
                ))}
              </section>
              : null}

            {project.team ?
              <section className="attribute">
                <h3 className="crest">Team</h3>
                <div className="">
                  {project.team.map(team => (
                    <h4
                      key={team.slug}
                      className="range last-ampersand inline"
                    >
                      <Link to={`/team/${team.slug}`} className="link--subtle">
                        {team.name}
                      </Link>
                    </h4>
                  ))}
                </div>
              </section>
              : null}

          </div>
        </>
        : null}

      {/* 3 featured lights or other projects */}
      {triptych ?
        <>
          <div className="stork">
            <hr />
            <h3>{project.title} uses these lights</h3>
          </div>
          <section className="deck">
            {triptych.map((light) => (
              <Card
                key={light.id}
                {...light}
                breadcrumb="light"
              />
            ))}
          </section>
        </>
        : <>
          <div className="stork">
            <hr />
            <h4>Other Projects</h4>
          </div>

          <div className="deck">
            {other.nodes.map((project) => (
              <Card
                key={project.id}
                {...project}
                breadcrumb="project"
              />
            ))}
          </div>
        </>}

      {/* // TODO: this design need love */}
      {additional ?
        <div className="stork">
          <section className="attribute">
            <ul>
              {additional.map((light) => (
                <li
                  key={light.id}
                  className="range denali"
                >
                  <Link to={`/light/${light.slug}`}>
                    {light.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        : null}

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/projects/">Project</Link></Breadcrumb>
        <Breadcrumb>{project.title}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default ProjectView;
