// * Compoment this one as it has an additional query
// ! fix the images by query

import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Village from "../images/village";
import WeddingCannopy from "../images/weddingcannopy";
import OutdoorWedding from "../images/outdoorwedding";

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

// * This might get a touch more complex with seasons
function HeroImage() {
  let isSiteDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
      {isSiteDark && <WeddingCannopy />}
      {isSiteDark || <OutdoorWedding />}
    </>
  );
}

const HomeHero = () => {

  const data = useStaticQuery(graphql`
    query HeroQuery {
      strapiSeason {
        wedding
      }

      allStrapiProject(limit: 2, filter: {hero: {eq: true}}) {
        nodes {
          id
          title
          slug
          wedding_season
          image {
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
  // const weddingHero = allStrapiProject.nodes.map

  let season = data.strapiSeason
  let allProjects = data.allStrapiProject.nodes

  let weddingHero = allProjects.filter(project => project.wedding_season === true)
  let holidayHero = allProjects.filter(project => project.wedding_season === false)

  return (
    <>
      <div className="village-container">
        {season.wedding === true ? (
          <>
            {weddingHero.map(project => (
              <Link to={`/project/${project.slug}`} key={project.id}>
                <HeroImage />
                <p>{project.title} See the Project</p>
              </Link>
            ))}
          </>
        ) : (
          <>
            {holidayHero.map(project => (
              <Link to={`/project/${project.slug}`} key={project.id}>
                <Village />
                <p>{project.title} See the Project</p>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default HomeHero;