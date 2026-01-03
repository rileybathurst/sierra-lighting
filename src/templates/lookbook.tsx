import React from 'react';
import { Link, graphql } from 'gatsby'
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image'

// https://www.npmjs.com/package/react-responsive-masonry
// https://www.npmjs.com/package/@types/react-responsive-masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Header from '../components/header'
import Footer from '../components/footer'
import Start from '../components/start'
import { SEO } from '../components/seo'
import { Breadcrumbs, Breadcrumb } from 'react-aria-components'

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
          {lights.map((light) => (
            <li key={light.slug}>
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
      slug: string;
      lookbooks: {
        id: string
        spread: boolean
        order: number
        flex: boolean
        image: LinkedLookImageTypes
        lights: LinkedLooklightsTypes[]
      }[]
    };
    strapiLookbookDescription: {
      excerpt: string
    }
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

  return (
    <>
      <Header largeLogo={true} />

      <main className="stork">

        <h1>{new Date().getFullYear()} {data.strapiService.name} Lookbook</h1>
        <p>{data.strapiLookbookDescription.excerpt}</p>
        <Start
          className="button--left-align"
          path={`lookbook-${data.strapiService.slug}`}
        />
        <hr />
      </main>

      <section className="albatross look5">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 1, 740: 2, 960: 3 }}
        >
          <Masonry className="test">
            {data.strapiService.lookbooks
            .toReversed()
            .map((lookbook: LookbookTypes) => (
              <LinkedLook
                key={lookbook.id}
                image={lookbook.image}
                lights={lookbook.lights}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to={`/${data.strapiService.slug}`}>{data.strapiService.name}</Link></Breadcrumb>
        <Breadcrumb>Lookbook</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default LookbookTemplate;

export const Head = ({ data }: LookbookTemplateTypes) => {
  return (
    <SEO
      title={`${data.strapiService.name} Lookbook`}
      description={data.strapiLookbookDescription.excerpt}
      breadcrumbs={[
        {
          name: data.strapiService.name,
          item: data.strapiService.slug
        }, {
          name: 'Lookbook',
          item: 'lookbook'
        }
      ]}
    />
  )
}

export const query = graphql`
  query LookbookTemplateQuery($slug: String!) {

    strapiService(slug: {eq: $slug}) {
      id
      name
      slug
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

    strapiLookbookDescription {
      excerpt
    }
  }
`;
