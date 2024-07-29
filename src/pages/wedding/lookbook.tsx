import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import Header from "../../components/header";
import Footer from "../../components/footer";
import Start from "../../components/start";
import SEO from "../../components/seo";

type LinkedLookImageTypes = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  alternativeText: string
}
type LinkedLooklightsTypes = {
  slug: string
  name: string
}
function LinkedLook({ image, lights }: { image: LinkedLookImageTypes, lights: LinkedLooklightsTypes[] }) {

  if (lights.length === 1) {
    return (
      <Link
        to={`/light/${lights[0].slug}`}
        className='look'
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
      <div className='look'>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
        <ul className='lookbook-list'>
          {lights.map((light, i) => (
            <li key={i}>
              <Link to={`/light/${light.slug}`} >
                <span>{light.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='look'>
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={image.alternativeText}
      />
    </div>
  );
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

  type LookbookTypes = {
    id: string
    spread: boolean
    order: number
    flex: boolean
    image: LinkedLookImageTypes
    lights: LinkedLooklightsTypes[]
  }

  return (
    <>
      <Header largeLogo={true} />

      <main className="stork">
        {/* // TODO wedding needs to become a variable */}
        <h2 className="crest">Wedding</h2>
        <h1 className="range">2024 Lookbook</h1>
        <Start className="button--left-align" />
        <hr />
      </main>

      <section className="albatross look5">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 1, 740: 2, 960: 3 }}
        >
          <Masonry className="test">
            {allStrapiLookbook.nodes.map((lookbook: LookbookTypes) => (
              <LinkedLook
                key={lookbook.id}
                image={lookbook.image}
                lights={lookbook.lights}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
      <Footer />

    </>
  )
}

export default LookbookPage


export const Head = () => {
  return (
    <SEO
      title='Wedding Lookbook'
      url="/wedding/lookbook"
    // TODO: 
    />
  )
}