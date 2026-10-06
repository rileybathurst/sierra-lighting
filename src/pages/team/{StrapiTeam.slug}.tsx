import { graphql, Link, Script } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import Markdown from "react-markdown";
import Card from "../../components/card";
import Footer from "../../components/footer";

import Header from "../../components/header";
import SEO from "../../components/seo";
import Start from "../../components/start";
import type { CardType } from "../../types/card-type";
import type { HeroSEOImageType } from "../../types/hero-seo-image-type";

type TeamCardType = CardType & {
  bio?: {
    data?: {
      bio?: string | null;
    } | null;
  } | null;
};

export const query = graphql`
  query TeamQuery($slug: String!) {
    strapiTeam(slug: { eq: $slug }) {
      ...teamFragment
    }

    allStrapiTeam(filter: {slug: {ne: $slug}}) {
      nodes {
        ...teamFragment
      }
    }

    strapiAbout {
      url
      businessName
    }
  }
`;

type TeamTypes = {
  data: {
    strapiTeam: {
      id: React.Key;
      title: string;
      slug: string;
      excerpt: string;
      bio: TeamCardType["bio"];
      image: HeroSEOImageType;
      projects: CardType[];
    };
    allStrapiTeam: {
      nodes: TeamCardType[];
    };
    strapiAbout: {
      url: string;
      businessName: string;
    };
  };
};
const TeamPage = ({ data }: TeamTypes) => {
  return (
    <>
      <Header />

      {/* // ? whats team-page doing? */}
      <main className="team-page">
        <div className="avatar-wrapper">
          <GatsbyImage
            image={
              data.strapiTeam?.image?.localFile?.childImageSharp
                ?.gatsbyImageData
            }
            alt={
              data.strapiTeam?.image?.alternativeText || data.strapiTeam.title
            }
            className="avatar"
          />
        </div>
        <h1>{data.strapiTeam.title}</h1>

        {data.strapiTeam.bio?.data?.bio ? (
          <div className="react-markdown">
            <Markdown>{data.strapiTeam.bio.data.bio}</Markdown>
          </div>
        ) : null}

        <hr />

        <h3>Would you like to work with {data.strapiTeam.title}</h3>
        <Start path={data.strapiTeam.slug} />
      </main>

      {/* // * lets get rid of this and try other team members we dont really apply work to people
{data.strapiTeam.projects ? (
        <>
          <div className="above-deck">
            <hr />
            <h3>Projects {data.strapiTeam.title} has worked on</h3>
          </div>
          <div className="deck">
            {data.strapiTeam.projects.map((project: CardType) => (
              <Card key={project.id} {...project} breadcrumb="project" />
            ))}
          </div>
        </>
      ) : null} */}

      <hr />
      <section>
        <h3 className="above-deck">Other Team Members</h3>
        <div className="deck">
          {data.allStrapiTeam.nodes.map((team: TeamCardType) => (
            <Card
              key={team.id}
              title={team.title}
              slug={team.slug}
              image={team.image}
              breadcrumb="team"
              excerpt={team.bio?.data?.bio ?? ""}
            />
          ))}
        </div>
      </section>

      <hr />

      <Breadcrumbs>
        <Breadcrumb>
          <Link to="/team">Team</Link>
        </Breadcrumb>
        <Breadcrumb>{data.strapiTeam.title}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default TeamPage;

export const Head = ({ data }: TeamTypes) => {
  return (
    <SEO
      title={`${data.strapiTeam.title}`}
      description={data.strapiTeam?.excerpt}
      image={data.strapiTeam?.image}
      url={`/team/${data.strapiTeam.slug}`}
      breadcrumbs={[
        {
          name: "Team",
          item: "/team",
        },
        {
          name: data.strapiTeam.title,
          item: `/team/${data.strapiTeam.title}`,
        },
      ]}
    >
      {/* // TODO: jobTitle */}
      {/* // TODO: locality is there */}
      {/* works for has to be an org but that needs an address so normally use local bus */}
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "${data.strapiTeam.title}",
            "url": "${data.strapiAbout.url}/team/${data.strapiTeam.title}",
            "image": "${data.strapiTeam.image?.localFile?.url}",
            "description": "${data.strapiTeam?.excerpt}",
            "jobTitle": "Team Member",
            "worksFor": {
              "@type": "Organization",
              "name": "${data.strapiAbout.businessName}",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Truckee",
                "addressRegion": "CA",
                "postalCode": "96161",
                "addressCountry": "US"
              }
            }
          }
        `}
      </Script>
    </SEO>
  );
};
