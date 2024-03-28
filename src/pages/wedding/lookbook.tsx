// TODO: this page needs love

import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { SEO } from "../../components/seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import Header from "../../components/header";
import Footer from "../../components/footer";


function LinkedLook({ image, lights, flex }) {

  console.log(flex);
  /* if (flex === 3) {
      flex = 'flex-3';
    } */

  if (lights.length === 1) {
    return (
      <>
        <Link to={`/light/${lights[0].slug}`} className={`adhere flex-${flex}`}>
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.alternativeText}
          />
          <p className='sticker'>
            <span>{lights[0].name}</span>
          </p>
          <div className='paper'>{/* stay gold */}</div>
        </Link >
      </>
    );
  } if (lights.length > 1) {

    return (
      <>
        <Link to={`/light/${lights[0].slug}`} className={`adhere flex-${flex}`}>
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.alternativeText}
          />
          <ul className='lookbook-list'>
            {lights.map((light, i) => (
              <li>
                <Link to={`/light/${light.slug}`} key={i} className='sticker'>
                  <span>{light.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className='paper'>{/* stay gold */}</div>
        </Link>
      </>
    );
  } else {
    return (
      <div className='adhere'>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
          className={`adhere flex-${flex}`}
        />
        <div className='paper'>{/* stay gold */}</div>
      </div>
    );
  }
}

const LookbookPage = () => {

  const { allStrapiLookbook } = useStaticQuery(graphql`
    query LookbookQuery {
      allStrapiLookbook(sort: {order: ASC}) {
        nodes {
          spread
          order
          flex
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }

          lights {
            slug
            name
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />

      <main className="stork">

        <h2 className="crest">Wedding</h2>
        <h1 className="range">2024 Lookbook</h1>
      </main>

      <section className='lookbook albatross'>
        {/* <GatsbyImage
          key={i}
          image={lookbook.image.localFile.childImageSharp.gatsbyImageData}
          alt={lookbook.image.alternativeText}
        /> */}
        {allStrapiLookbook.nodes.map((lookbook, i) => (
          <LinkedLook
            key={i}
            image={lookbook.image}
            lights={lookbook.lights}
            flex={lookbook.flex}
          />
        ))}
      </section>

      <Footer />

    </>
  )
}

export default LookbookPage


export const Head = () => {
  return (
    <SEO
      title={`Wedding Lookbook | ${useSiteMetadata().title}`}
      url="/wedding/lookbook"
    // TODO: 
    // description="Your go to holiday lights installer in the Reno, Truckee, and North Tahoe area. A list of frequently asked questions. Please reach out for more information and estimates."
    // image="https://sierralighting.s3.us-west-1.amazonaws.com/og-images/og_image-sierra_lighting-bistro_lights.jpg"
    />
  )
}