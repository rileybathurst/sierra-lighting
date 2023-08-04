import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { CardType } from "../types/card";

function ReactDescription(props: { bio: { data: { bio: string; }; }; }) {
  if (props.bio) {
    return <ReactMarkdown children={props.bio} remarkPlugins={[remarkGfm]} />;
  } else {
    return null;
  }
}

function IfProjects(props: {
  projects: string;
  name: string;
}) {
  if (props.projects.length > 0) {
    return (
      <div className="measure">
        <hr />
        <h2>Projects {props.name} has worked on</h2>
      </div>
    );
  } else {
    return null;
  }
}

const TeamView = ({ team }) => {
  return (
    <>
      {/* // TODO image and description */}
      <Seo
        title={`${team.name} | Sierra Lighting`}
        description={team?.excerpt}
        image={team?.avatar?.localFile?.url}
      />
      <Header />

      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/team">
              <span itemProp="name">Team</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{team.name}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="measure team-page" itemScope itemType="https://schema.org/Person">
        <div className="avatar-wrapper">
          <GatsbyImage
            image={team?.avatar?.localFile?.childImageSharp?.gatsbyImageData}
            alt={team?.avatar?.alternativeText || team.name}
            className='avatar'
          />
        </div>
        <h1 itemProp="name">{team.name}</h1>
        <ReactDescription bio={team.bio.data.bio} />
      </main>

      <IfProjects projects={team.projects} name={team.name} />
      <div className="deck">
        {team.projects.map((project: CardType) => (
          <div key={project.id}>
            <Card
              card={project}
              breadcrumb="project"
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default TeamView;
