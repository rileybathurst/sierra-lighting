// TODO: write this a whole bunch cleaner

import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

// TODO;
{/* function AreaCard(title, image, alt, link, sub) {

  console.log(title);

  return (
    <li key={title} className="area-card">
      <GatsbyImage
        image={image}
        alt={alt}
      />
      <Link to={link}>{title}</Link>
    </li >
  );
} */}

function AreaList() {

  const data = useStaticQuery(graphql`
  query AreasQuery {

    northlakeimage: strapiArea(slug: {eq: "northlake"}) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
    }

    northlake: allStrapiArea(
        filter: { region: { eq: "northlake" }, slug: { ne: "truckee" } }
      ) {
        nodes {
          ...areaLink
        }
      }

    truckeeimage: strapiArea(slug: {eq: "truckee"}) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
    }

    truckee: allStrapiArea(filter: { region: { eq: "truckee" } }) {
      nodes {
        ...areaLink
      }
    }

      calimainder: allStrapiArea(
        filter: {
          region: { nin: ["northlake", "truckee"] }
          state: { eq: "california" }
          slug: { ne: "northlake" }
        }
      ) {
        nodes {
          ...areaLink

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

      renoimage: strapiArea(slug: {eq: "reno"}) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
    }

      reno: allStrapiArea(
        filter: { region: { eq: "reno" }, slug: { ne: "reno" } }
      ) {
        nodes {
          ...areaLink
        }
      }

      sparksimage: strapiArea(slug: {eq: "sparks"}) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }
    }

      sparks: allStrapiArea(filter: { region: { eq: "sparks" } }) {
        nodes {
          ...areaLink
        }
      }

      nevamainder: allStrapiArea(
        filter: {
          region: { nin: ["reno", "sparks"] }
          state: { eq: "nevada" }
          slug: { ne: "sparks" }
        }
      ) {
        nodes {
          ...areaLink

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
  `);

  let northlakeimage = data.northlakeimage;
  let northlake = data.northlake;
  let truckeeimage = data.truckeeimage;
  let truckee = data.truckee;
  let calimainder = data.calimainder;
  let renoimage = data.renoimage;
  let reno = data.reno;
  let sparksimage = data.sparksimage;
  let sparks = data.sparks;
  let nevamainder = data.nevamainder;

  // console.log(northlake);

  return (
    <section className="area-list">
      <ul className="list-style-none">
        <li key="california" className="state__name">
          <h3>California</h3>
        </li>

        {/*         <AreaCard
          image={northlakeimage.image?.localFile?.childImageSharp?.gatsbyImageData}
          alt={northlakeimage.image?.alternativeText || "North Lake Tahoe"}
          link="/area/northlake"
          title="North Lake Tahoe"
          sub={northlake.nodes}
        />
 */}
        <li key="northlake" id="northlake" className="area-card">
          <div className="paper">{/* stay gold */}</div>
          <GatsbyImage
            image={northlakeimage.image?.localFile?.childImageSharp?.gatsbyImageData}
            alt={northlakeimage.image?.alternativeText || "North Lake Tahoe"}
          />
          <div className="content">
            <h4><Link to="/area/northlake">North Lake Tahoe</Link></h4>
            <ul>
              {northlake.nodes.map((area) => (
                <li className="" key={area.id}>
                  <Link to={`/area/${area.slug}`}>{area.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li key="truckee" id="truckee" className="area-card">
          <GatsbyImage
            image={truckeeimage.image?.localFile?.childImageSharp?.gatsbyImageData}
            alt={truckeeimage.image?.alternativeText || "Truckee"}
          />
          <Link to="/area/truckee">Truckee</Link>
          <ul>
            {truckee.nodes.map((area) => (
              <li className="" key={area.id}>
                <Link to={`/area/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </li>

        <li key="calimainder" id="calimainder">
          <ul>
            {calimainder.nodes.map((area) => (
              <li className="" key={area.id}>
                <GatsbyImage
                  image={area.image?.localFile?.childImageSharp?.gatsbyImageData}
                  alt={area.image?.alternativeText || "Truckee"}
                />
                <Link to={`/area/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul >

      <ul className="list-style-none">
        <li key="nevada" className="state__name">
          <h3>Nevada</h3>
        </li>

        <li className="area-card">
          <GatsbyImage
            image={renoimage.image?.localFile?.childImageSharp?.gatsbyImageData}
            alt={renoimage.image?.alternativeText || "Truckee"}
          />
          <Link to="/area/reno">Reno</Link>
          <ul>
            {reno.nodes.map((area) => (
              <li className="" key={area.id}>
                <Link to={`/area/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="area-card">
          <GatsbyImage
            image={sparksimage.image?.localFile?.childImageSharp?.gatsbyImageData}
            alt={sparksimage.image?.alternativeText || "Truckee"}
          />
          <Link to="/area/sparks">Sparks</Link>
          <ul>
            {sparks.nodes.map((area) => (
              <li className="" key={area.id}>
                <Link to={`/area/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </li>

        {nevamainder.nodes.map((area) => (
          <li className="" key={area.id}>
            <GatsbyImage
              image={area.image?.localFile?.childImageSharp?.gatsbyImageData}
              alt={area.image?.alternativeText || "Truckee"}
            />
            <Link to={`/area/${area.slug}`}>{area.name}</Link>
          </li>
        ))}
      </ul>
    </section >
  );
}

export default AreaList;
