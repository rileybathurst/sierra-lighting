// This is super specific and if we build more look books we need to make this more dynamic

import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';

interface LookbookTypes {
  slug: string;
}
const Lookbook = ({ slug }: LookbookTypes) => {

  // TODO: this particular lookbook should be attached to the wedding service through the query
  // once its on the query inline it
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
        <Link to="/wedding/lookbook" className='poster ratio-16-9'>
          <GatsbyImage
            image={strapiLookbook.image.localFile.childImageSharp.gatsbyImageData}
            alt={strapiLookbook.image.alternativeText || 'Wedding Lookbook'}
            objectPosition="center"
          />
          {/* // TODO: media query on size */}
          <h3>Browse our 2024 Wedding Lookbook</h3>
        </Link>
      </>
    )
  }
  return null;
}
export default Lookbook