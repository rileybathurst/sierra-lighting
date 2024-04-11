// This is super specific and if we build more look books we need to make this more dynamic

import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';

function Hr({ hr }: { hr: string }) {
  if (hr === 'true') {
    return (
      <hr className='pelican' />
    )
  } else {
    return null;
  }
}

const Lookbook = ({ slug, hr }: { slug: string; hr: string }) => {

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

        <Hr hr={hr} />

        <Link to="/wedding/lookbook" className='poster ratio-16-9'>
          <GatsbyImage
            image={strapiLookbook.image.localFile.childImageSharp.gatsbyImageData}
            alt={strapiLookbook.image.alternativeText}
            objectPosition="center"
          />
          {/* // TODO: media query on size */}
          <h3>Browse our 2024 Wedding Lookbook</h3>
        </Link>
      </>
    )
  } else {
    return null;
  }

}
export default Lookbook