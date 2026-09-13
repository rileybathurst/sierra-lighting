// TODO: add something about themes
// the import problem is mostly alaphbetical which I'm OK with I just need to automate it

import { graphql, Link } from "gatsby";
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

// https://www.npmjs.com/package/react-responsive-masonry
// https://www.npmjs.com/package/@types/react-responsive-masonry

import { Breadcrumb, Breadcrumbs } from "react-aria-components";
// TODO: add the progressive enhancment of grid-lanes when it is supported by all browsers, and use the masonry layout as a fallback
// https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Masonry_layout
// https://caniuse.com/css-grid-lanes
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Footer from "../components/footer";
import Header from "../components/header";
import { PinterestHref } from "../components/pinterest-href";
import { SEO } from "../components/seo";
import Start from "../components/start";

type LinkedLookImageTypes = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData & {
        images: {
          sources?: {
            srcSet: string;
          }[];
        };
      };
      resize: {
        aspectRatio: number;
      };
    };
  };
  alternativeText: string;
};
type LinkedLooklightsTypes = {
  slug: string;
  name: string;
};

/* const getLargestImageFromSrcSet = (
  sources?: { srcSet: string }[]
) => {
  return sources?.[0]?.srcSet
    ?.split(',')
    .at(-1)
    ?.trim()
    ?.split(' ')[0]
} */

function LinkedLook({
  image,
  lights,
}: {
  image: LinkedLookImageTypes;
  lights: LinkedLooklightsTypes[];
}) {
  const [isFirstLightActive, setIsFirstLightActive] = React.useState(false);

  if (lights.length === 1) {
    return (
      <Link to={`/light/${lights[0].slug}`} className="look">
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText}
        />
        <p>{lights[0].name}</p>
      </Link>
    );
  }
  if (lights.length > 1) {
    return (
      <div
        className={`look ${isFirstLightActive ? "first-light-active" : undefined}`}
      >
        <Link
          to={`/light/${lights[0].slug}`}
          onMouseEnter={() => setIsFirstLightActive(true)}
          onMouseLeave={() => setIsFirstLightActive(false)}
          onFocus={() => setIsFirstLightActive(true)}
          onBlur={() => setIsFirstLightActive(false)}
        >
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.alternativeText}
          />
        </Link>
        <ul className="lookbook-list">
          {lights.map((light, index) => (
            <li key={light.slug}>
              <Link
                to={`/light/${light.slug}`}
                className={
                  index === 0 && isFirstLightActive
                    ? "first-light-active"
                    : undefined
                }
              >
                <span>{light.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  console.warn(image.alternativeText, "No lights available for this look");
  return (
    <div className="look">
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
        id: React.Key;
        spread: boolean;
        order: number;
        flex: boolean;
        image: LinkedLookImageTypes;
        lights: LinkedLooklightsTypes[];
      }[];
    };
    strapiLookbookDescription: {
      excerpt: string;
    };
  };
};
const LookbookTemplate = ({ data }: LookbookTemplateTypes) => {
  // usePinterestButton();

  type LookbookTypes = {
    id: React.Key;
    spread: boolean;
    order: number;
    flex: boolean;
    image: LinkedLookImageTypes;
    lights: LinkedLooklightsTypes[];
  };

  return (
    <React.Fragment>
      <Header largeLogo={true} />

      <main>
        <h1>
          {new Date().getFullYear()} {data.strapiService.name} Lookbook
        </h1>
        <p>{data.strapiLookbookDescription.excerpt}</p>
        <Start
          className="button--left-align"
          path={`lookbook-${data.strapiService.slug}`}
        />
        <hr />
      </main>

      <section className="albatross look5">
        <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 740: 2, 960: 3 }}>
          {/* this thing is kinda ugly and has no hover state or anything */}
          <Masonry className="masonry">
            {data.strapiService.lookbooks
              .toReversed()
              .map((lookbook: LookbookTypes) => (
                <div key={lookbook.id} className="pinterest-wrapper">
                  <LinkedLook
                    key={lookbook.id}
                    image={lookbook.image}
                    lights={lookbook.lights}
                  />
                  {/* // * putting piunterest here linked all the looks */}
                  <PinterestHref
                    imageSources={
                      lookbook.image.localFile.childImageSharp.gatsbyImageData
                        .images.sources
                    }
                  />
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      <hr />

      <Breadcrumbs>
        <Breadcrumb>
          <Link to={`/${data.strapiService.slug}`}>
            {data.strapiService.name}
          </Link>
        </Breadcrumb>
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
          item: data.strapiService.slug,
        },
        {
          name: "Lookbook",
          item: "lookbook",
        },
      ]}
    />
  );
};

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
