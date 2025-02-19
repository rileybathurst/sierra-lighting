import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/card";
import type { CardType } from "../types/card-type";

const Areas = () => {

  const { allStrapiArea } = useStaticQuery(graphql`
    query AreasQuery {
      allStrapiArea(
        filter: {
          featured: {eq: true}
        },
        ) {
        nodes {
          id
          name
          slug
          excerpt

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

  interface SortTypes {
    a: { areas: { length: number } },
    b: { areas: { length: number } }
  };

  return (
    <main className="albatross">
      <div className="stork">
        <hgroup>
          <h1>Service Areas</h1>
          <p className="margin-block-end-kilimanjaro">Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area.</p>
        </hgroup>
      </div>
      <div className="areas__page">
        <section className="deck">
          {allStrapiArea.nodes
            .sort((a: SortTypes['a'], b: SortTypes['b']) => b.areas.length - a.areas.length) // Sort by the number of area.areas
            .map((area: CardType) => (
              <Card
                key={area.id}
                {...area}
                breadcrumb='areas'
              />
            ))}
        </section>
      </div>
    </main>
  );
}

export default Areas
