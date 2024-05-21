import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Markdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import type { DeckType } from "../types/deck-type";
import Start from "../components/start";

interface TeamTypes {
  team: {
    id: string;
    name: string;
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
    projects: DeckType[];
  }
}
const TeamView = ({ team }: TeamTypes) => {
  return (
    <>
      <Header />

      <main className="stork team-page" itemScope itemType="https://schema.org/Person">
        <div className="avatar-wrapper">
          <GatsbyImage
            image={team?.avatar?.localFile?.childImageSharp?.gatsbyImageData}
            alt={team?.avatar?.alternativeText || team.name}
            className='avatar'
          />
        </div>
        <h1 itemProp="name">{team.name}</h1>

        {team.bio ?
          <Markdown
            className="react-markdown"
          >
            {team.bio.data.bio}
          </Markdown>
          : null
        }

        <hr />

        <h3>Would you like to work with {team.name}</h3>
        <Start />
      </main>

      {team.projects ?
        <>
          <div className="stork">
            <hr />
            <h3>Projects {team.name} has worked on</h3>
          </div>
          <div className="deck">
            {team.projects.map((project: DeckType) => (
              <Card
                key={project.id}
                card={project}
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
