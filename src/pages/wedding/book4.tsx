import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Start from "../../components/start";

const Book4Page = () => {
  const { allStrapiLookbook } = useStaticQuery(graphql`
    query Lookbook4Query {
      allStrapiLookbook(sort: { order: ASC }) {
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
  `);

  const looks = allStrapiLookbook.nodes.reduce((acc, look) => {
    acc[look.id] = false;
    return acc;
  }, {});

  // console.log(looks);

  const [btnState, setBtnState] = useState({});

  const handleClick = (look, aspectRatio) => () =>
    setBtnState((looks) => ({
      ...look,

      [look]: !looks[look],
    }));

  return (
    <>
      <Header largeLogo={true} />

      <main className="stork">
        <h2 className="crest">Wedding</h2>
        <h1 className="range">2024 Lookbook</h1>
        <Start className="button--left-align" />
        <hr />
      </main>

      <section className="lookbook albatross">
        {allStrapiLookbook.nodes.map((lookbook) => (
          <button
            key={lookbook.id}
            className={`look ${btnState[lookbook.id]}`}
            onClick={handleClick(lookbook.id, lookbook.image.localFile.childImageSharp.fluid.aspectRatio)}
            style={{
              aspectRatio: lookbook.image.localFile.childImageSharp.fluid.aspectRatio,
            }}
          >
            <GatsbyImage
              image={lookbook.image.localFile.childImageSharp.gatsbyImageData}
              alt={lookbook.image.alternativeText}
            />

            <ul className="lookbook-list">
              {lookbook.lights.map((light, i) => (
                <li>
                  <Link to={`/light/${light.slug}`} key={i}>
                    <span>{light.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Book4Page;
