// TODO: add something about themes

import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image'

// https://www.npmjs.com/package/react-responsive-masonry
// https://www.npmjs.com/package/@types/react-responsive-masonry

// TODO: add the progressive enhancment of grid-lanes when it is supported by all browsers, and use the masonry layout as a fallback
// https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Masonry_layout
// https://caniuse.com/css-grid-lanes
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Header from '../components/header'
import Footer from '../components/footer'
import Start from '../components/start'
import { SEO } from '../components/seo'
import { Breadcrumbs, Breadcrumb } from 'react-aria-components'
import { logPinterestEntry } from '../components/log-pinterest-entry'

type LinkedLookImageTypes = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData & {
        images: {
          sources?: {
            srcSet: string
          }[]
        }
      };
      resize: {
        aspectRatio: number;
      };
    }
  }
  alternativeText: string
}
type LinkedLooklightsTypes = {
  slug: string
  name: string
}

const getLargestImageFromSrcSet = (
  sources?: { srcSet: string }[]
) => {
  return sources?.[0]?.srcSet
    ?.split(',')
    .at(-1)
    ?.trim()
    ?.split(' ')[0]
}

function LinkedLook({ image, lights }: { image: LinkedLookImageTypes, lights: LinkedLooklightsTypes[] }) {

  // TODO: testing
  console.log(image.localFile.childImageSharp.gatsbyImageData.images.sources)

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
        {/* // TODO: testiing */}
        {/* <span>{image.localFile.childImageSharp.gatsbyImageData.images.sources}</span> */}
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
              {/* // TODO: testiing */}
              {/* <button
                key={light.slug}
                type="button"
                onClick={() => {
                  const pinterestImage = getLargestImageFromSrcSet(
                    image.localFile.childImageSharp.gatsbyImageData.images.sources
                  )

                  if (pinterestImage) {
                    void logPinterestEntry(pinterestImage)
                  }
                }}
              >
                Pin
              </button> */}
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
    <React.Fragment>
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
    </React.Fragment>
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
            absolutePath
            childImageSharp {
              gatsbyImageData
              resize {
                aspectRatio
              }
            }
            url
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
