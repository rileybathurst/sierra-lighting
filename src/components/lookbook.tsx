import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';

interface LookbookTypes {
  slug: string;
}
const Lookbook = ({ slug }: LookbookTypes) => {

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

  return (
    <>
      <hr className='pelican' />
      <Link to={`/${slug}/lookbook`} className='poster ratio-16-9'>
        <GatsbyImage
          image={strapiLookbook.image.localFile.childImageSharp.gatsbyImageData}
          alt={strapiLookbook.image.alternativeText || `${slug} Lookbook`}
          objectPosition="center"
        />
        <h3>Browse our {new Date().getFullYear()} {slug} Lookbook</h3>
      </Link>
    </>
  )
}
export default Lookbook