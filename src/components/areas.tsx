// TODO: order

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

function SubAreas({ areas }) {
  if (areas.length > 0) {
    return (
      <>
        <p>Including:</p>
        <ul>
          {areas.map(area => (
            <li key={area.name}>
              {area.name}
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return null;
  }
}

const Areas = ({ className }: { className?: string }) => {

  const { allStrapiArea } = useStaticQuery(graphql`
    query AreasQuery {
      allStrapiArea(
        filter: {
          featured: {eq: true}
        },
        ) {
        nodes {
          ...areaQuery
        }
      }
    }
  `);

  return (
    <main className="albatross">
      <h1 className="stork">Service Areas</h1>
      <p className="stork">Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area.</p>
      <div className="areas__page">
        <ul className="area-list">
          {allStrapiArea.nodes
            .sort((a, b) => b.areas.length - a.areas.length) // Sort by the number of area.areas
            .map((area) => (
              <li key={area.name} className="area-card">
                {area.image ? (
                  <Link to={`/areas/${area.slug}`} className="poster">
                    <GatsbyImage
                      image={area.image.localFile.childImageSharp.gatsbyImageData}
                      alt={area.image.alternativeText}
                    />
                  </Link>
                ) : null}
                <h3 className="kilimanjaro">
                  <Link to={`/areas/${area.slug}`}>
                    {area.name}
                  </Link>
                </h3>
                <SubAreas areas={area.areas} />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}

export default Areas
