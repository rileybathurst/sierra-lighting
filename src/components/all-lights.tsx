import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

function AllLights() {
  return (
    <div className="deck">
      <StaticQuery
        query={query}
        render={data => (
          <>
            {
              data.allStrapiLight.nodes.map(light => (
                <div key={light.id} className="card">
                  <GatsbyImage
                    image={
                      light?.image?.localFile?.childImageSharp
                        ?.gatsbyImageData
                    }
                    alt={light.image?.alternativeText}
                    className=""
                  />
                  <div className="paper"></div>
                  <div className="content">
                    <hr />
                    <h3 className="crest">{light.byline}</h3>
                    <h2 className="mixta"><Link to={`/light/${light.slug}`}>{light.name}</Link></h2>
                    <p className="description">{light.excerpt}</p>
                    <p>{light.outdoor}</p>
                  </div>

                </div>
              ))
            }
          </>
        )}
      />
    </div>
  );
}

export default AllLights

const query = graphql`
query AllLightsQuery {
  allStrapiLight(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      name
      byline
      excerpt
      slug
      outdoor

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