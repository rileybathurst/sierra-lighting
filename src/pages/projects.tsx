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

  const data = useStaticQuery(graphql`
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

      allStrapiArea(filter: {featured: {eq: true}}) {
        nodes {
          name
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

  return (
    <>
      <Header />

      <main className="stork">
        <h1>Projects</h1>
        <p>A gallery of some of our past work. Photos of residential and commercial displays in {data.allStrapiArea.nodes.map((area: { name: string }) => area.name).join(", ")}</p>
      </main>

      <div className={`projects ${Season()}`}>
        {data.allStrapiService.nodes.map((service: ServiceType) => (
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
                  .slice(-3)
                  .map((project: CardType) => (
                    <Card
                      key={project.id}
                      {...project}
                      breadcrumb="project"
                    />
                  ))}
              </div>

              <section className="stork">
                {service.projects.length > 3 ?
                  <h3 className="elbrus">
                    <Link to={`/${service.slug}/projects/`} className="link_subtle">
                      View all {service.projects.length} {service.name} projects
                    </Link>
                  </h3 >
                  : null}
              </section>

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
      // TODO: query as above has to move where the query is. I think projects shows the moved query
      description="A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/projects-og-sierra_lighting.jpg"
      url="projects"
    />
  )
}