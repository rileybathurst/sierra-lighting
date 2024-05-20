import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/card";
// ? does the card type actually work here?
import type { CardType } from "../types/card";

const Areas = () => {

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

  interface SortTypes {
    a: { areas: { length: number } },
    b: { areas: { length: number } }
  };

  return (
    <main className="albatross">
      <h1 className="stork">Service Areas</h1>
      <p className="stork">Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area.</p>
      <div className="areas__page">
        <section className="deck">
          {allStrapiArea.nodes
            .sort((a: SortTypes['a'], b: SortTypes['b']) => b.areas.length - a.areas.length) // Sort by the number of area.areas
            .map((area: CardType) => (
              <Card
                key={area.slug} // * biome asks for this even if its in the card component
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
