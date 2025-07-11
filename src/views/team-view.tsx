import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Markdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Start from "../components/start";
import type { CardType } from "../types/card-type";

interface TeamTypes {
  team: {
    id: React.Key;
    name: string;
    slug: string;
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
      };
    };
    projects: CardType[];
  }
}
const TeamView = ({ team }: TeamTypes) => {
  return (
    <>
      <Header />

      <main className="stork team-page">
        <div className="avatar-wrapper">
          <GatsbyImage
            image={team?.avatar?.localFile?.childImageSharp?.gatsbyImageData}
            alt={team?.avatar?.alternativeText || team.name}
            className='avatar'
          />
        </div>
        <h1>{team.name}</h1>

        {team.bio ?
          <div className="react-markdown">
            <Markdown>
              {team.bio.data.bio}
            </Markdown>
          </div>
          : null
        }

        <hr />

        <h3>Would you like to work with {team.name}</h3>
        <Start
          path={team.slug}
        />
      </main>

      {team.projects ?
        <>
          <div className="stork">
            <hr />
            <h3>Projects {team.name} has worked on</h3>
          </div>
          <div className="deck">
            {team.projects.map((project: CardType) => (
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
        <Breadcrumb>{team.name}</Breadcrumb>
      </Breadcrumbs>

      <Footer />
    </>
  );
};

export default TeamView;
