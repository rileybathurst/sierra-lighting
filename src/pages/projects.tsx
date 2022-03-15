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
      <Seo title="Sierra Lighting" />
      <Header />
      <main className="measure">

        <p className="breadcrumbs">
          <Link to="/">Home</Link>&nbsp;
          / Projects
        </p>
        <hr />

        <div className="deck measure">
          <StaticQuery
            query={query}
            render={data => (
              <>
                {
                  data.allStrapiProject.nodes.map(project => (
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
              </>
            )}
          />
        </div>

      </main >

      <Footer />

    </>
  )
}

export default ProjectsPage

const query = graphql`
query ProjectsQuery {
  allStrapiProject {
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
