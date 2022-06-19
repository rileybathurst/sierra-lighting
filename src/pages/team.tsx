import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby';
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
  return (
    <>
      <Seo
        title="Team | Sierra Lighting"
        description="A Those of us who work with Sierra Lighting"
        image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
      />
      <Header />
      <main>

        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Team</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
          <hr />
        </div>

        {/* fix this */}
        <div className="measure">
          <h3>Team</h3>
          <StaticQuery
            query={query}
            render={data => (
              <ul className="team_cards">
                {
                  data.allStrapiTeam.nodes.map(team => (
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
            )}
          />
        </div>
      </main >

      < Footer />
    </>
  )
}

export default TeamPage

const query = graphql`
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
`
