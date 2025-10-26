import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { type IGatsbyImageData } from "gatsby-plugin-image";
import { SEO } from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";

const TeamPage = () => {

  const data = useStaticQuery(graphql`
    query TeamPageQuery {
      allStrapiTeam {
        nodes {
          ...teamFragment
        }
      }

      strapiAbout {
        businessName
      }
    }
  `)

  type TeamTypes = {
    id: React.Key;
    name: string;
    slug: string;
    bio: {
      data: {
        bio: string;
      };
    };
    avatar: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      alternativeText: string;
    };
  }

  return (
    <>
      <Header />
      <main>
        <h3 className="stork">The {data.strapiAbout.businessName} Team</h3>
      </main >

      <section
        className="deck"
      >
        {data.allStrapiTeam.nodes.map((team: TeamTypes) => (
          <Card
            key={team.id}
            id={team.id}
            title={team.name}
            slug={team.slug}
            image={team.avatar}
            breadcrumb="team"
            excerpt={team.bio.data.bio}
          />
        ))
        }
      </section>

      <section className="stork">
        <hr />
        <h3>
          <Link to="/work">
            Apply now to work with us
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
      title='Team'
      // TODO: add the query to the description
      description="The team who work for Sierra Lighting"
      image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
      url="team"
    />
  )
}
