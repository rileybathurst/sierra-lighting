// TODO: this page needs love

import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { SEO } from "../../components/seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Start from "../../components/start";

// ! masonry-layout the npm package was last published 6 years ago that maybe means it works but maybe not

function LinkedLook({ image, lights, flex }: { image: any, lights: any[], flex: any }) {

  // console.log(flex);

  if (lights.length === 1) {
    return (
      <Link to={`/light/${lights[0].slug}`} className={`flex-${flex} look`}>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
        <p>{lights[0].name}</p>
      </Link >
    );
  } if (lights.length > 1) {

    return (
      <div className="look">
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
        <ul className='lookbook-list'>
          {lights.map((light, i) => (
            <li>
              {/* // ! link cant decend link */}
              <Link to={`/light/${light.slug}`} key={i}>
                <span>{light.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className='look'>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
          className={`flex-${flex}`}
        />
      </div>
    );
  }
}

const LookbookPage = () => {

  const { allStrapiLookbook } = useStaticQuery(graphql`
    query LookbookQuery {
      allStrapiLookbook(sort: {order: ASC}) {
        nodes {
          id
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
        <Start className="button--left-align" />
        <hr />
      </main>

      <section className='lookbook albatross'>
        {/* <GatsbyImage
          key={i}
          image={lookbook.image.localFile.childImageSharp.gatsbyImageData}
          alt={lookbook.image.alternativeText}
        /> */}
        {allStrapiLookbook.nodes.map((lookbook) => (
          <LinkedLook
            key={lookbook.id}
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
    />
  )
}