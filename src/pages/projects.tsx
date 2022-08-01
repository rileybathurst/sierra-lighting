import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const ProjectsPage = () => {
  return (
    <>
      <Seo
        title="Projects | Sierra Lighting"
        description="A gallery of some of our past work. Photos of residential and commercial displays in Reno, Tahoe, Truckee, Martis Camp, Lahontan, Grays Crossing, Old Greenwood, Somersett, Caughlin Ranch, Verdi, Damonte Ranch, Galena, Montreux, Incline Village, and more!"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/projects-og-sierra_lighting.jpg"
      />
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
                      <GatsbyImage
                        image={
                          project?.image?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={project.image?.alternativeText}
                        className="poster"
                      />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2 className="mixta">
                          <Link to={`/project/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h2>
                        <p>{project.excerpt}</p>
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
                        className="poster"
                      />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2 className="mixta">
                          <Link to={`/project/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h2>
                        <p>{project.excerpt}</p>
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
                      <GatsbyImage
                        image={
                          project?.image?.localFile?.childImageSharp
                            ?.gatsbyImageData
                        }
                        alt={project.image?.alternativeText}
                        className="poster"
                      />
                      <div className="paper"></div>
                      <div className="content">
                        <hr />
                        <h2 className="mixta">
                          <Link to={`/project/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h2>
                        <p>{project.excerpt}</p>
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
      excerpt
      slug

      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [111, 165, 222, 444, 880]
              width: 222
            )
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
      excerpt
      slug

      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [111, 165, 222, 444, 880]
              width: 222
            )
          }
        }
        alternativeText
      }
    }
  }

  wedding: allStrapiProject(filter: {service: {eq: "wedding"}}) {
    nodes {
      id
      title
      excerpt
      slug

      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [111, 165, 222, 444, 880]
              width: 222
            )
          }
        }
        alternativeText
      }
    }
  }
}
`
