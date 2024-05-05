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

  // console.log(image.localFile.childImageSharp.fluid.aspectRatio);

  if (lights.length === 1) {
    return (
      <Link
        to={`/light/${lights[0].slug}`}
        className={`look flex-${flex}`}
      >
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
        <p>{lights[0].name}</p>
      </Link >
    );
  } if (lights.length > 1) {

    return (
      <div className={`look flex-${flex}`}>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
        <ul className='lookbook-list'>
          {lights.map((light, i) => (
            <li>
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
      <div className={`look flex-${flex}`}>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
      </div>
    );
  }
}

function Aspect({ image, lights }) {
  if (image.localFile.childImageSharp.fluid.aspectRatio > 1.5) {
    // console.log('landscape');
    return (
      <LinkedLook
        image={image}
        lights={lights}
        flex={2}
      />
    );
  } else if (image.localFile.childImageSharp.fluid.aspectRatio > 1 || lights.length > 2) {
    // console.log('landscape');
    return (
      <LinkedLook
        image={image}
        lights={lights}
        flex={3}
      />
    );
  } else if (image.localFile.childImageSharp.fluid.aspectRatio < 1) {
    // console.log('portrait');
    return (
      <LinkedLook
        image={image}
        lights={lights}
        flex={1}
      />
    );
  } else if (image.localFile.childImageSharp.fluid.aspectRatio < 0.6) {
    console.log('super tall');
    // TODO: needs work
    return (
      <LinkedLook
        image={image}
        lights={lights}
        flex={1}
      />
    );
  } else {
    // console.log('square');
    return (
      <LinkedLook
        image={image}
        lights={lights}
        flex={2}
      />
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
                fluid {
                  aspectRatio
                }
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
      <Header
        largeLogo={true}
      />

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
          <Aspect
            key={lookbook.id}
            image={lookbook.image}
            lights={lookbook.lights}
          // flex={lookbook.flex}
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