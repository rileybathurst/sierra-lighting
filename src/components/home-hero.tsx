// * Compoment this one as it has an additional query

import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

// light to dark switch
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
  }, [matches, query]);

  return matches;
}

function SchemeImage({ light, dark, title }) {
  let isSiteDark = useMediaQuery("(prefers-color-scheme: dark)");

  if (light.localFile?.alternativeText === undefined) {
    console.warn('hero in light has no alt text')
  }

  if (dark.localFile?.alternativeText === undefined) {
    console.warn('hero in dark has no alt text')
  }

  return (
    <>
      {isSiteDark && <GatsbyImage
        image={dark.localFile?.childrenImageSharp[0]?.gatsbyImageData}
        alt={dark?.localFile?.alternativeText || title}
        className='poster'
      />}
      {isSiteDark || <GatsbyImage
        image={light.localFile?.childrenImageSharp[0]?.gatsbyImageData}
        alt={light?.localFile?.alternativeText || title}
        className='poster'
      />}
    </>
  );
}

const HomeHero = () => {

  const data = useStaticQuery(graphql`
    query HeroQuery {
      strapiSeason {
        wedding
      }

      xmas: allStrapiProject(
        filter: {
          hero: {eq: true},
          services: {elemMatch: {slug: {in: ["residential", "commercial"]}}}
          darkImage: {id: {ne: null}},
        },
        limit: 1
        ) {
        nodes {
          id
          title
          slug
          services {
            slug
          }

          image {
            localFile {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }
          
          darkImage {
            localFile {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }
        }
      }

      wedding: allStrapiProject(
        filter: {
          hero: {eq: true},
          services: {elemMatch: {slug: {eq: "wedding"}}},
          darkImage: {id: {ne: null}}
        },
        limit: 1
      ) {
        nodes {
          id
          title
          slug
          services {
            slug
          }

          image {
            localFile {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          
          darkImage {
            localFile {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }

    }
  `)

  return (
    <div className="home-hero">
      {data.strapiSeason.wedding === true ? (
        <>
          {data.wedding.nodes.map(project => (
            <Link to={`/project/${project.slug}`} key={project.id}>
              <SchemeImage
                light={project.image}
                dark={project.darkImage}
                title={project.title}
              />
              <p>{project.title} See the Project</p>
            </Link>
          ))}
        </>
      ) : (
        <>
          {data.xmas.nodes.map(project => (
            <Link to={`/project/${project.slug}`} key={project.id}>
              <SchemeImage
                light={project.image}
                dark={project.darkImage}
                title={project.title}
              />
              <p>{project.title} See the Project</p>
            </Link>
          ))}
        </>
      )}
    </div>
  )
}

export default HomeHero;