import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/card";
import type { CardType } from "../types/card-type";
import Season from "./season";
import type { ImageType } from "../types/image-type";

// * Extend CardType locally to include weddingImage
type AreaCardType = CardType & {
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
          ...areaCardFragment

          weddingImage {
            ...cardImageFragment
          }

          areas {
            name
            slug
          }
        }
      }
    }
  `);

  interface SortTypes {
    a: { areas: { length: number } },
    b: { areas: { length: number } }
  };

  allStrapiArea.nodes.map((area: AreaCardType) => {
    if (Season() === "wedding" && area.weddingImage) {
      area.image = area.weddingImage;
    }
    return area;
  });

  return (
    <React.Fragment>
      <main className="above-deck">
        <h1 className="margin-block-end-vinson">Service Areas</h1>
        <p>Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area.</p>
      </main>
      <section className="deck">
        {allStrapiArea.nodes
          .sort((a: SortTypes['a'], b: SortTypes['b']) => b.areas.length - a.areas.length)
          .map((area: AreaCardType) => (
            <Card
              key={area.id}
              {...area}
              breadcrumb='areas'
            />
          ))}
      </section>
    </React.Fragment>
  );
}

export default Areas
