import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image"

import { SEO } from "../components/seo";

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

  type AffiliationTypes = {
    id: string;
    name: string;
    excerpt: string;
    link: string;
    logo: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
        url: string;
      };
      alternativeText: string;
    };
  }

  return (
    <>
      <Header />

      <main>
        <div className="stork">
          {/* <h1 className="crest">Reviews</h1> */}
          <h2 className="ridge">Affiliations</h2>
        </div>

        {/* // TODO: https://schema.org/Review */}
        <ul className="affiliations">
          {allStrapiAffiliation.nodes.map((affiliation: AffiliationTypes) => (
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

export const Head = () => {
  return (
    <SEO
      title="Affiliations"
      url="affiliations"
    />
  )
}