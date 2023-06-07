import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

function AreaList() {

  const data = useStaticQuery(graphql`
  query AreasQuery {
    california: allStrapiArea(filter: { state: { eq: "california" } }) {
      nodes {
        id
        name
        state
        slug
      }
    }

    nevada: allStrapiArea(filter: { state: { eq: "nevada" } }) {
      nodes {
        id
        name
        state
        slug
      }
    }
  }
`);

  let california = data.california
  let nevada = data.nevada

  return (
    <section>
      <div className="states">
        {/* the state names are sometimes not needed */}
        <ul>
          <li key="california" className="state__name">
            <h3>California</h3>
          </li>
          {california.nodes.map((area) => (
            <li className="" key={area.id} itemProp="address">
              <div
                itemProp="location"
                itemScope
                itemType="https://schema.org/areaServed"
              >
                <Link
                  to={`/area/${area.slug}`}
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="addressLocality">{area.name}</span>&nbsp;
                  <span itemProp="addressRegion" className="sr-only">
                    {area.state}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <ul itemScope itemType="https://schema.org/areaServed">
          <li key="nevada" className="state__name">
            <h3>Nevada</h3>
          </li>
          {nevada.nodes.map((area) => (
            <li
              className=""
              key={area.id}
              itemScope
              itemType="https://schema.org/Place"
            >
              <Link
                to={`/area/${area.slug}`}
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="addressLocality">{area.name}</span>
                <span itemProp="addressRegion" className="sr-only">
                  {area.state}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AreaList;
