import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}

const WeddingProjectsPage = () => {
  return (
    <>
      <Seo title="Wedding Projects | Sierra Lighting" />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Wedding Projects</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main>

        <div className="measure">
          <hr />
          <h3>Wedding Projects</h3>
        </div>

        <StaticQuery
          query={query}
          render={data => (
            <>

              <div className="deck measure">
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
              </div>
            </>
          )}
        />

      </main >

      <Footer />

    </>
  )
}

export default WeddingProjectsPage

const query = graphql`
query WeddingProjectsPageQuery {
  allStrapiProject(filter: {service: {eq: "wedding"}}) {
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
