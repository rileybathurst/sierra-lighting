import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "../../styles/app.scss";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}

const ChristmasLightsProjectsPage = () => {
  return (
    <>
      <Seo title="Christmas Light Projects | Sierra Lighting" />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Christmas Light Projects</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure">

        <StaticQuery
          query={query}
          render={data => (
            <>
              <h3>Residential</h3>
              <div className="deck measure">
                {
                  data.residential.nodes.map(project => (
                    <div key={project.id} className="card">

                      <GatsbyImage
                        image={
                          project?.image?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={project.image?.alternativeText}
                        className=""
                      />

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
                      <GatsbyImage
                        image={
                          project?.image?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={project.image?.alternativeText}
                        className=""
                      />
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

export default ChristmasLightsProjectsPage

const query = graphql`
query ChristmasLightsProjectsQuery {
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

      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
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

      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
    }
  }
}
`
