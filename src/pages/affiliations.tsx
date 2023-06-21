import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const TestimonialsPage = () => {


  const { allStrapiAffiliation } = useStaticQuery(graphql`
query AffiliationsQuery {
  allStrapiAffiliation(filter: { publishedAt: { ne: null } }) {
    nodes {
      id
      name
      excerpt
      link

      logo {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }
    }
  }
}
`)

  const title = 'Affiliations';

  return (
    <>
      <Seo
        title={`${title} | Sierra Lighting`}
      // description="// TODO"
      // image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/testimonials-og-sierra_lighting.jpg"
      />
      <Header />

      <main>
        <div className="measure">
          {/* <h1 className="crest">Reviews</h1> */}
          <h2 className="ridge">{title}</h2>
        </div>


        <ul itemProp="review" itemScope itemType="https://schema.org/Review" className="affiliations">
          {allStrapiAffiliation.nodes.map(affiliation => (
            <li key={affiliation.id} className='affiliation'>
              <GatsbyImage
                image={affiliation?.logo?.localFile?.childImageSharp?.gatsbyImageData}
                alt={affiliation?.logo?.alternativeText}
                className=''
                objectFit='contain'
              />
              <a href={affiliation.link} target='_blank' rel='noopener noreferrer'>
                <h3>{affiliation.name}</h3>
              </a>
              <p>{affiliation.excerpt}</p>
              <p><a href={affiliation.link} target='_blank' rel='noopener noreferrer'>Visit Them</a></p>
            </li>
          ))}
        </ul>

      </main>

      <Footer />

    </>
  )
}

export default TestimonialsPage
