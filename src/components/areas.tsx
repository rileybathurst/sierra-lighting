// TODO: order

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/card";

const Areas = ({ className }: { className?: string }) => {

  const { allStrapiArea } = useStaticQuery(graphql`
    query AreasQuery {
      allStrapiArea(
        filter: {
          featured: {eq: true}
        },
        ) {
        nodes {
          name
          slug

          state

          image {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }

          venues {
            id
          }

          areas {
            name
            slug

            venues {
              id
            }
          }
        }
      }
    }
  `);

  return (
    <main className="albatross">
      <h1 className="stork">Service Areas</h1>
      <p className="stork">Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area.</p>
      <div className="areas__page">
        <section className="deck">
          {allStrapiArea.nodes
            .sort((a, b) => b.areas.length - a.areas.length) // Sort by the number of area.areas
            .map((area) => (
              <Card
                card={area}
                breadcrumb={area.slug}
              />
            ))}
        </section>
      </div>
    </main>
  );
}

export default Areas



/*   < li key = { area.name } className = "area-card" >
  {
    area.image ? (
      <Link to={`/areas/${area.slug}`} className="poster">
        <GatsbyImage
          image={area.image.localFile.childImageSharp.gatsbyImageData}
          alt={area.image.alternativeText}
        />
      </Link>
    ) : null
  }
    < h3 className = "kilimanjaro" >
      <Link to={`/areas/${area.slug}`}>
        {area.name}
      </Link>
                </h3 >
  <SubAreas areas={area.areas} />
              </li > */