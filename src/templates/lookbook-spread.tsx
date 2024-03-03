import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import SEO from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";

function LinkedLook({ image, lights }) {

  // console.log(lights);
  // console.log(lights.length);

  if (!lights) {
    return (
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={image.alternativeText}
      />
    );
  } else if (lights.length === 1) {
    return (
      <>
        <Link to={`/light/${lights[0].slug}`}>
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.alternativeText}
          />
          <h2>{lights[0].name}</h2>
        </Link>
      </>
    );
  } else {
    return (
      <>
        {/* <Link to={`/lookbook/${lights.slug}`}> */}
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
        {/* </Link> */}
      </>
    );
  }
}

const LookbookView = ({ data }) => {

  // console.log(data.current.nodes[0].spread);
  let spreadNumber = data.current.nodes[0].spread;

  let nextSpread = spreadNumber + 1;
  let nextSpreadString = nextSpread.toString();

  let previousSpread = spreadNumber - 1;
  let previousSpreadString = previousSpread.toString();
  // console.log(previousSpreadString);

  // console.log(data.all.distinct);

  const isNextSpreadInArray = data.all.distinct.includes(nextSpreadString);
  // console.log(isNextSpreadInArray);
  const isPrevSpreadInArray = data.all.distinct.includes(previousSpreadString);
  // console.log(isPrevSpreadInArray);

  return (
    <>
      <Header />

      <div className="measure">
        <ol className="breadcrumbs">
          <li>
            <Link to="/wedding">
              Wedding
            </Link>&nbsp;/&nbsp;
          </li>
          <li>
            <Link to="/lookbook/2">
              Lookbook
            </Link>&nbsp;/&nbsp;
          </li>
          <li>
            {data.current.nodes[0].spread}
          </li>
        </ol>
        <hr />
      </div>


      <main className='measure'>
        <h2 className='crest'>Spread {data.current.nodes[0].spread}</h2>
        <h1 className='ridge'>2024 Wedding Lookbook</h1>
        <hr />
      </main>

      <section className='lookbook pelican'>
        {/* <GatsbyImage
          key={i}
          image={lookbook.image.localFile.childImageSharp.gatsbyImageData}
          alt={lookbook.image.alternativeText}
        /> */}
        {data.current.nodes.map((lookbook, i) => (
          <LinkedLook
            key={i}
            image={lookbook.image}
            lights={lookbook.lights}
          />
        ))}
      </section>

      <section className='measure'>
        <hr />
        <h3 className='sr-only'>Navigation</h3>
        <div className='pagination'>
          <p>{isPrevSpreadInArray && <Link to={`/lookbook/${previousSpread}`}>Previous Page</Link>}</p>
          <p>Current spread: {spreadNumber}</p>
          <p>{isNextSpreadInArray && <Link to={`/lookbook/${nextSpread}`}>Next Page</Link>}</p>
        </div>

        <ul className='pagination'>
          {data.all.distinct
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map((spread, i) => (
              <li key={i}>
                <Link
                  to={`/lookbook/${spread}`}
                  activeClassName="current"
                >
                  {spread}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default LookbookView;

export const query = graphql`
  query LookbookTemplate(
    $spread: Int!
  ) {
    current:allStrapiLookbook(filter: {spread: {eq: $spread}}) {
      nodes {
        spread
        order
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

    all:allStrapiLookbook {
      distinct(field: {spread: SELECT})
    }
  }
`


export const Head = ({ data }) => {
  return (
    <SEO
      title={`Wedding Lookbook Spread ${data.current.nodes[0].spread} | ${useSiteMetadata().title}`}
      url={`lookbook/${data.current.nodes[0].spread}`}
    />
  )
}
