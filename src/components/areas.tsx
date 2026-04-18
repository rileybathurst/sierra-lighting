import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/card";
import type { CardType } from "../types/card-type";
import Season from "./season";
import type { ImageType } from "../types/image-type";

// Extend CardType locally to include weddingImage
interface AreaCardType extends CardType {
  image: ImageType;
  weddingImage?: ImageType; // Optional weddingImage property
}

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

          weddingImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
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

  // TODO: venues were getting pulled for something I dont know what tho
  // I guess maybe a count or even if we have them for wedding
  /* venues {
    id
  } */

  // console.log(allStrapiArea.nodes);

  allStrapiArea.nodes.map((area: AreaCardType) => {
    if (Season() === "wedding" && area.weddingImage) {
      area.image = area.weddingImage;
    }
    return area;
  });

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
            .map((area: AreaCardType) => (
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
