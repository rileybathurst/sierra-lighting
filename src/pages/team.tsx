import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Markdown from "react-markdown";
import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

const TeamPage = () => {

  const { allStrapiTeam } = useStaticQuery(graphql`
    query TeamPageQuery {
      allStrapiTeam {
        nodes {
          ...teamFragment
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main>

        <div className="stork">
          <h3>The Sierra Lighting Team</h3>

          <ul className="team_deck">
            {allStrapiTeam.nodes.map(team => (
              <li key={team.id} className="team_card">
                <article className="single" itemScope itemType="https://schema.org/Person">
                  <div className="poster">
                    <GatsbyImage
                      image={team.avatar?.localFile?.childImageSharp?.gatsbyImageData}
                      alt={team.avatar?.alternativeText}
                    />
                  </div>
                  <h1 itemProp="name">
                    <Link to={team.slug}>
                      {team.name}
                    </Link>
                  </h1>
                  {team.bio ?
                    <Markdown>
                      {team.bio.data.bio}
                    </Markdown>
                    : null
                  }
                </article>
              </li>
            ))
            }
          </ul>
        </div >
      </main >

      <section className="stork">
        <hr />
        <h3>
          <Link to="/work">
            Work with us
          </Link>
        </h3>
      </section>

      < Footer />
    </>
  )
}

export default TeamPage

export const Head = () => {
  return (
    <SEO
      title={`Team`}
      description="A Those of us who work with Sierra Lighting"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
      url="team"
    />
  )
}
