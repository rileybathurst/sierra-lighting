import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { CardType } from "../types/card";

function Loop(props: any) {

  // console.log(props.service);

  if (props.service.projects.length > 0) {
    return (
      <div key={props.service.id}>
        <div className="measure">
          <hr />
          <h2>{props.service.name} Projects</h2>
          {/* // TODO: markdown this */}
          {/* // TODO: give some space below */}
          <section>
            <p>{props.service?.description.data.description}</p>
          </section>
        </div>
        <div className="deck">
          {props.service.projects.map((project: CardType) => (
            <Card
              card={project}
              breadcrumb="project"
            />
          ))}
        </div>
        <div className="measure">
          {/* // TODO: make a big link style here */}
          <h3>
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
      <Seo
        title="Projects | Sierra Lighting"
        description="A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/projects-og-sierra_lighting.jpg"
      />
      <Header />

      <main className="measure">

        {/* // TODO: this can be looped I think I want to add the service compent first */}
        <h1>Projects</h1>
        {/* //TODO: eyebrow */}
        <p>A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!</p>
      </main>

      {allStrapiService.nodes.map((service: any) => (
        <Loop service={service} />
      ))}

      <Footer />
    </>
  );
};

export default ProjectsPage;
