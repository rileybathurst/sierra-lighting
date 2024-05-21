import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { CardType } from "../types/card-type";
import Season from "../components/season";

function Loop(props: any) {

  // console.log(props.service);

  if (props.service.projects.length > 0) {
    return (
      <div key={props.service.id} className={props.service.slug}>
        <div className="stork">
          <hr />
          <h2 className="baseline-drop">{props.service.name} Projects</h2>
          {/* // TODO: markdown this */}
          {/* // TODO: give some space below */}
          <section>
            <p className="double-baseline-drop">
              {props.service?.description.data.description}
            </p>
          </section>
        </div>
        <div className="deck">
          {props.service.projects.map((project: CardType) => (
            <Card
              key={project.id}
              card={project}
              breadcrumb="project"
            />
          ))}
        </div>
        <div className="stork">
          {/* // TODO: make a big link style here */}
          <h3 className="elbrus">
            <Link to={`/${props.service.slug}`} className="link_subtle">
              Learn more about our work on {props.service.name} lighting
            </Link>
          </h3 >
        </div >
      </div>
    )
  } else {
    return null
  }
}

const ProjectsPage = () => {

  const { allStrapiService } = useStaticQuery(graphql`
    query ProjectsQuery {

      allStrapiService {
        nodes {
          id
          name
          slug
          description {
            data {
              description
            }
          }

          projects {
            ...projectCard
          }

        }
      }

    }
  `);

  return (
    <>
      <Header />

      <main className="stork">

        {/* // TODO: this can be looped I think I want to add the service compent first */}
        <h1 className="baseline-drop">Projects</h1>
        {/* //TODO: eyebrow */}
        <p>A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!</p>
      </main>

      <div className="projects">
        <Season>
          {allStrapiService.nodes.map((service: any) => (
            <Loop service={service} />
          ))}
        </Season>
      </div>

      <Footer />
    </>
  );
};

export default ProjectsPage;

export const Head = () => {
  return (
    <SEO
      title={`Projects | ${useSiteMetadata().title}`}
      // TODO: query
      description="A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/projects-og-sierra_lighting.jpg"
      url="projects"
    />
  )
}