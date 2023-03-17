import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

function ResidentialProjects() {
  return (
    <>
      < div className="measure" >
        <hr />
        <h3 className="crest">What have we done</h3>
        <h2 className="ridge mixta">Projects</h2>

      </div >

      <div className="deck">

        <StaticQuery
          query={query}
          render={data => (
            <>
              {
                data.allStrapiProject.nodes.map(project => (
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
                      {/* <h3 className="crest">{light.byline}</h3> */}
                      <h2 className="mixta">
                        <Link to={`/project/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>
                      <p className="description">
                        {project.description.data.description}
                      </p>
                    </div>

                  </div>
                ))
              }
            </>
          )}
        />
      </div>
    </>
  );
}

export default ResidentialProjects

const query = graphql`
query ResidentialProjectsQuery {
  allStrapiProject(filter: {service: {eq: "residential"}}) {
    nodes {
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