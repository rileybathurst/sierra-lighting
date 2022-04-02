import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}

const ProjectsPage = () => {
  return (
    <>
      {/* // TODO description and image */}
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Projects</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
          <hr />
        </div>

        <StaticQuery
          query={query}
          render={data => (
            <>
              <h3>Residential</h3>
              <div className="deck measure">
                {
                  data.residential.nodes.map(project => (
                    <div key={project.id} className="card">
                      <NorthTahoeEvents />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h3 className="crest">Byline</h3>
                        <h2 className="mixta">
                          <Link to={`/project/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h2>
                        {/* this is markdown makdown maybe I should also have something else */}
                        {/* <p>{project.description.data.description}</p> */}
                      </div>
                    </div>
                  ))
                }
              </div>

              <hr />

              <h3>Commercial</h3>
              <div className="deck measure">
                {
                  data.commercial.nodes.map(project => (
                    <div key={project.id} className="card">
                      <NorthTahoeEvents />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h3 className="crest">Byline</h3>
                        <h2 className="mixta">
                          <Link to={`/project/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h2>
                        {/* this is markdown makdown maybe I should also have something else */}
                        {/* <p>{project.description.data.description}</p> */}
                      </div>
                    </div>
                  ))
                }
              </div>

              <hr />

              <h3>Wedding</h3>
              <div className="deck measure">
                {
                  data.wedding.nodes.map(project => (
                    <div key={project.id} className="card">
                      <NorthTahoeEvents />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h3 className="crest">Byline</h3>
                        <h2 className="mixta">
                          <Link to={`/project/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h2>
                        {/* this is markdown makdown maybe I should also have something else */}
                        {/* <p>{project.description.data.description}</p> */}
                      </div>
                    </div>
                  ))
                }
              </div>
            </>




          )}
        />

      </main >

      <Footer />

    </>
  )
}

export default ProjectsPage

const query = graphql`
query ProjectsQuery {
  residential: allStrapiProject(filter: {service: {eq: "residential"}}) {
    nodes {
      id
      title
      description {
        data {
          description
        }
      }
      slug
    }
  }
  
  commercial: allStrapiProject(filter: {service: {eq: "commercial"}}) {
    nodes {
      id
      title
      description {
        data {
          description
        }
      }
      slug
    }
  }

  wedding: allStrapiProject(filter: {service: {eq: "wedding"}}) {
    nodes {
      id
      title
      description {
        data {
          description
        }
      }
      slug
    }
  }
}
`
