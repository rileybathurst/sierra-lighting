import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import IfHero from "../components/ifHero";

function ReactDescription(props) {
  if (props.bio) {
    return <ReactMarkdown children={props.bio.data.bio} remarkPlugins={[remarkGfm]} />;
  } else {
    return null;
  }
}

const TeamPage = () => {

  const { allStrapiTeam } = useStaticQuery(graphql`
query TeamPageQuery {
  allStrapiTeam {
    nodes {
      id
      name
      slug
      excerpt
      bio { data { bio } }

      avatar {
        localFile {
          childImageSharp {
            gatsbyImageData (
              breakpoints: [160, 320, 480]
              width: 160
            )
          }
          url
        }
        alternativeText
      }
    }
  }
}
`)

  return (
    <>
      <Seo
        title="Team | Sierra Lighting"
        description="A Those of us who work with Sierra Lighting"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
      />
      <Header />
      <main>

        {/* TODO: fix this */}
        <div className="measure">
          <h3>Team</h3>

          <ul className="team_cards">
            {allStrapiTeam.nodes.map(team => (
              <li key={team.id} className="team_card">
                <article className="single" itemScope itemType="https://schema.org/Person">
                  <IfHero hero={team?.avatar} />
                  <h1 itemProp="name"><Link to={team.slug}>{team.name}</Link></h1>
                  <ReactDescription bio={team.bio} />
                </article>
              </li>
            ))
            }
          </ul>
        </div>
      </main >

      < Footer />
    </>
  )
}

export default TeamPage
