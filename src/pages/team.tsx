import { graphql, Link, useStaticQuery } from "gatsby";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import { SEO } from "../components/seo";

const TeamPage = () => {
  const { allStrapiTeam, strapiAbout } = useStaticQuery(graphql`
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
  `);

  type TeamTypes = {
    id?: React.Key;
    key?: React.Key;
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
  };

  return (
    <>
      <Header />
      <main className="above-deck">
        <h3>The {strapiAbout.businessName} Team</h3>
      </main>

      <section className="deck">
        {allStrapiTeam.nodes.map((team: TeamTypes) => (
          <Card
            key={team.id}
            title={team.name}
            slug={team.slug}
            image={team.avatar}
            breadcrumb="team"
            excerpt={team.bio.data.bio}
          />
        ))}
      </section>

      <section className="main">
        <hr />
        <h3>
          <Link to="/work">Apply now to work with us</Link>
        </h3>
      </section>

      <Footer />
    </>
  );
};

export default TeamPage;

export const Head = () => {
  return (
    <SEO
      title="Team"
      // TODO: add the query to the description
      description="The team who work for Sierra Lighting"
      // TODO:
      // image="https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-work--og_imge.jpg"
      url="team"
    />
  );
};
