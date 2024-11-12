import React from 'react';
import { Link, graphql } from 'gatsby'
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Header from '../components/header'
import Footer from '../components/footer'
import Start from '../components/start'

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

type LookbookTemplateTypes = {
  data: {
    strapiService: {
      id: React.Key;
      name: string;
      lookbooks: {
        id: string
        spread: boolean
        order: number
        flex: boolean
        image: LinkedLookImageTypes
        lights: LinkedLooklightsTypes[]
      }[]
    };
  };
}
const LookbookTemplate = ({ data }: LookbookTemplateTypes) => {

  type LookbookTypes = {
    id: string
    spread: boolean
    order: number
    flex: boolean
    image: LinkedLookImageTypes
    lights: LinkedLooklightsTypes[]
  }

  // console.log(data.strapiService.lookbooks);

  return (
    <>
      <Header largeLogo={true} />

      <main className="stork">
        {/* // TODO wedding needs to become a variable */}
        <h2 className="crest">{data.strapiService.name}</h2>
        <h1 className="range">2024 Lookbook</h1>
        <Start className="button--left-align" />
        <hr />
      </main>

      <section className="albatross look5">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 1, 740: 2, 960: 3 }}
        >
          <Masonry className="test">
            {data.strapiService.lookbooks.map((lookbook: LookbookTypes) => (
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
  );
};

export default LookbookTemplate;

export const query = graphql`
  query LookbookTemplateQuery($slug: String!) {

    strapiService(slug: {eq: $slug}) {
      id
      name
      lookbooks {
        id
        lights {
          slug
          name
        }
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
  }
`;
