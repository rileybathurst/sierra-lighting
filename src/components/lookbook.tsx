// This is super specific and if we build more look books we need to make this more dynamic

import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';
// import Gats

const Lookbook = ({ slug }: { slug: string }) => {

  const { strapiLookbook } = useStaticQuery(graphql`
    query LookbookPosterQuery {
      strapiLookbook {
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
  `)

  if (slug === 'wedding') {
    return (
      <>
        <hr className='pelican' />
        <Link to="/wedding/lookbook" className='p2 ratio-16-9'>
          <GatsbyImage
            image={strapiLookbook.image.localFile.childImageSharp.gatsbyImageData}
            alt={strapiLookbook.image.alternativeText}
            objectPosition="center"
          />
          <h3>Browse the 2024 Lookbook</h3>
        </Link>
      </>
    )
  } else {
    return null;
  }

}
export default Lookbook