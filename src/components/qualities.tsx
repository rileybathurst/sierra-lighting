// ! These need to be connected to SEO somehow

import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

function Qualities() {

  const { allStrapiQuality } = useStaticQuery(graphql`
    query QualityQuery {
      allStrapiQuality {
        nodes {
          id
          name
          eyebrow
          description {
            data {
              description
            }
          }

        }
      }
    }
  `);

  return (
    <>
      {allStrapiQuality.nodes.map((quality) => (
        <section key={quality.id}>
          <div className='brow'>
            <h3 className='supra'>{quality.name}</h3>
            {/* TODO: get rid of these everywhere */}
            {/* <h4 className='eyebrow'>{quality.eyebrow}</h4> */}
          </div>
          <p>{quality.description.data.description}</p>
        </section>
      ))}
    </>
  );
}

export default Qualities
