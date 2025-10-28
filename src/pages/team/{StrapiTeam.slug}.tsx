import * as React from "react"
import { graphql, Script } from "gatsby"
import SEO from "../../components/seo"

import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Markdown from "react-markdown";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Start from "../../components/start";

import type { CardType } from "../../types/card-type";

export const query = graphql`
  query TeamQuery($slug: String!) {
    strapiTeam(slug: { eq: $slug }) {
      ...teamFragment

      projects {
        ...projectCard
      }
    }

    strapiAbout {
      url
      businessName
    }
  }
`

type TeamTypes = {
  data: {
    strapiTeam: {
      id: React.Key;
      name: string;
      slug: string;
      excerpt: string;
      bio: {
        data: {
          bio: string;
        };
      };
      avatar: {
        alternativeText: string;
        localFile: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
          url: string;
        };
      };
      projects: CardType[];
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

      <main className="stork team-page">
        <div className="avatar-wrapper">
          <GatsbyImage
            image={data.strapiTeam?.avatar?.localFile?.childImageSharp?.gatsbyImageData}
            alt={data.strapiTeam?.avatar?.alternativeText || data.strapiTeam.name}
            className='avatar'
          />
        </div>
        <h1>{data.strapiTeam.name}</h1>

        {data.strapiTeam.bio ?
          <div className="react-markdown">
            <Markdown>
              {data.strapiTeam.bio.data.bio}
            </Markdown>
          </div>
          : null
        }

        <hr />

        <h3>Would you like to work with {data.strapiTeam.name}</h3>
        <Start
          path={data.strapiTeam.slug}
        />
      </main>

      {data.strapiTeam.projects ?
        <>
          <div className="stork">
            <hr />
            <h3>Projects {data.strapiTeam.name} has worked on</h3>
          </div>
          <div className="deck">
            {data.strapiTeam.projects.map((project: CardType) => (
              <Card
                key={project.id}
                {...project}
                breadcrumb="project"
              />
            ))}
          </div>
        </>
        : null
      }

      <hr className="stork" />

      <Breadcrumbs>
        <Breadcrumb><Link to="/team">Team</Link></Breadcrumb>
        <Breadcrumb>{data.strapiTeam.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default TeamPage;


export const Head = ({ data }: TeamTypes) => {
  return (
    <SEO
      title={`${data.strapiTeam.name}`}
      // TODO image
      description={data.strapiTeam?.excerpt}
      image={data.strapiTeam?.avatar?.localFile?.url}
      url={`/team/${data.strapiTeam.slug}`}
      breadcrumbs={[
        {
          name: "Team",
          item: "/team",
        },
        {
          name: data.strapiTeam.name,
          item: `/team/${data.strapiTeam.slug}`,
        },
      ]}
    >

      {/* // TODO: jobTitle */}
      {/* // TODO: move the organization to seo file */}
      {/* // TODO: locality is there */}
      {/* works for has to be an org but that needs an address so normally use local bus */}
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "${data.strapiTeam.name}",
            "url": "${data.strapiAbout.url}/team/${data.strapiTeam.slug}",
            "image": "${data.strapiTeam.avatar?.localFile?.url}",
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
  )
}
