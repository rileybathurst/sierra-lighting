import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import type { CardType } from "../types/card-type";
import Season from "../components/season";
import ReactMarkdown from "react-markdown";

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
            updatedAt
            ...projectCard
          }

        }
      }

    }
  `);

  interface ServiceType {
    id: React.Key;
    name: string;
    slug: string;
    description: {
      data: {
        description: string;
      }
    }
    projects: CardType[];
  }

  // console.log(allStrapiService);

  return (
    <>
      <Header />

      <main className="stork">
        <h1>Projects</h1>
        {/* // TODO link these from a featured query */}
        <p>A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!</p>
      </main>

      <div className={`projects ${Season()}`}>
        {allStrapiService.nodes.map((service: ServiceType) => (
          service.projects.length > 0 ?
            <div key={service.id} className={service.slug}>
              <div className="stork">
                <hr />
                <h2 className="baseline-drop">{service.name} Projects</h2>
                {service.description ?
                  <section>
                    <div className='react-markdown double-baseline-drop'>
                      <ReactMarkdown>
                        {service.description.data.description}
                      </ReactMarkdown>
                    </div>
                  </section>
                  : null}
              </div>
              <div className="deck">
                {service.projects
                  .sort((a, b) => {
                    const dateA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
                    const dateB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
                    return dateB - dateA;
                  })
                  .map((project: CardType) => (
                    <Card
                      key={project.id}
                      {...project}
                      breadcrumb="project"
                    />
                  ))}
              </div>
              <div className="stork">
                {/* // TODO: make a big link style here */}
                <h3 className="elbrus">
                  <Link to={`/${service.slug}`} className="link_subtle">
                    Learn more about our work on {service.name} lighting
                  </Link>
                </h3 >
              </div >
            </div>
            : null
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ProjectsPage;

export const Head = () => {
  return (
    <SEO
      title='Projects'
      // TODO: query
      description="A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/projects-og-sierra_lighting.jpg"
      url="projects"
    />
  )
}