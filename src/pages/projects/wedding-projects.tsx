import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";

const WeddingProjectsPage = () => {
  return (
    <>
      <Seo
        title="Wedding Projects | Sierra Lighting"
        description="some of our finest wedding projects"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/wedding-og-sierra_lighting.jpg"
      />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/projects">
              <span itemProp="name">Projects</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Wedding Projects</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <main>

        <div className="measure">
          <h3>Wedding Projects</h3>
        </div>

        <StaticQuery
          query={query}
          render={data => (
            <>

              <div className="deck">
                {
                  data.allStrapiProject.nodes.map(project => (
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

export default WeddingProjectsPage

const query = graphql`
query WeddingProjectsPageQuery {
  allStrapiProject(filter: {service: {eq: "wedding"}}) {
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
