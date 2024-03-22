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
          name
          excerpt
          slug

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
      
      nv: allStrapiArea(
        filter: {
          featured: {eq: true},
          state: {eq: "nevada"}
        },
        ) {
        nodes {
          name
          excerpt
          slug

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

  // TODO: loops 

  return (
    <section className="area-list">
      <div>
        <h3>California</h3>
        <ul className="list-style-none">
          {data.cali.nodes.map(area => (
            <li key={area.name} className="state__name">

              {area.image ? (
                <GatsbyImage
                  image={area.image.localFile.childImageSharp.gatsbyImageData}
                  alt={area.image.alternativeText}
                />
              ) : null}

              <Link to={`/areas/${area.slug}`}>
                {area.name}

              </Link>
              {/* <p>{area.excerpt}</p> */}
              {/* 
            {area.areas.map(subArea => (
              <VenueCount
                area={subArea.venues}
                region={area.name}
              />
            ))} */}



              {/*             <p>
              {areaCount[area.name]} venues
            </p>
 */}
              {/*             <p>
              {area.venues.length} venues🦄
            </p> */}

              <ul>
                {area.areas.map(subArea => (
                  <li key={subArea.name} className="area__name">
                    {subArea.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Nevada</h3>

        <ul className="list-style-none">
          {data.nv.nodes.map(area => (
            <li key={area.name} className="state__name">
              <Link to={`/areas/${area.slug}`}>
                {area.name}
              </Link>
              {/* <p>{area.excerpt}</p> */}

              <ul>
                {area.areas.map(subArea => (
                  <li key={subArea.name} className="area__name">
                    {subArea.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section >
  );
}

export default AreaList;
