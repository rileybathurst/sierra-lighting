// ! this whole page changes with the new way of ddoing regions
// ! im kinda half way
// TODO: write this a whole bunch cleaner

import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"


let areaCount = {};

function VenueCount({ area, region }) {

  let count = 0;

  if (area.length) {
    count += area.length;
  }

  console.log(area.length);

  if (areaCount[region]) {
    areaCount[region] += count;
  } else {
    areaCount[region] = count;
  }

  console.log(areaCount);

  return (
    <p>
      {count} venues
    </p>
  );
}

function SubAreas({ areas }) {
  if (areas.length > 0) {
    return (
      <ul>
        {areas.map(area => (
          <li key={area.name}>
            {area.name}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}

function AreaList() {

  const data = useStaticQuery(graphql`
    query AreasQuery {
      cali: allStrapiArea(
        filter: {
          featured: {eq: true},
          state: {eq: "california"}
        },
        ) {
        nodes {
          ...areaQuery
        }
      }
      
      nv: allStrapiArea(
        filter: {
          featured: {eq: true},
          state: {eq: "nevada"}
        },
        ) {
        nodes {
          ...areaQuery
        }
      }
    }
  `);

  let states = [data.cali, data.nv];

  return (
    <ul className="area-list">
      {states.map((state) => (
        <li>
          <h3 className="first-capital">{state.nodes[1].state}</h3>
          <ul className="list-style-none">
            {state.nodes.map((area) => (
              <li key={area.name} className="area-card">
                {area.image ? (
                  <>
                    <GatsbyImage
                      image={area.image.localFile.childImageSharp.gatsbyImageData}
                      alt={area.image.alternativeText}
                    />
                    <hr />
                  </>
                ) : null}
                <Link to={`/areas/${area.slug}`}>
                  {area.name}
                </Link>
                <SubAreas areas={area.areas} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default AreaList;



{/* <li key={area.name} className="featured_area">

{area.image ? (
  <GatsbyImage
    image={area.image.localFile.childImageSharp.gatsbyImageData}
    alt={area.image.alternativeText}
  />
) : null}

<Link to={`/areas/${area.slug}`}>
  {area.name}

</Link>
// <SubAreas areas={area.areas} />
</li> */}