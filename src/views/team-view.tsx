import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { CardType } from "../types/card";

function ReactDescription(props: { bio: { data: { bio: string; }; }; }) {
  if (props.bio) {
    return <ReactMarkdown children={props.bio.data.bio} remarkPlugins={[remarkGfm]} />;
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

function WideVsTall(props: { width: number; height: number; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; bio: any; hero: { localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData; }; }; alternativeText: string; }; }) {
  if (props.width >= props.height) {
    // console.log('wide');
    return (
      <section className="wide">
        <div>
          <h1 itemProp="name">{props.name}</h1>
          <ReactDescription bio={props.bio} />
        </div>
        <GatsbyImage
          image={props?.hero?.localFile?.childImageSharp?.gatsbyImageData}
          alt={props?.hero?.alternativeText || props.name}
          className=''
        />
      </section>
    )
  } else {
    // console.log('tall');
    return (
      <section className="tall">
        <div className="tall__text">
          <h1 itemProp="name">{props.name}</h1>
          <ReactDescription bio={props.bio} />
        </div>
        <GatsbyImage
          image={props?.hero?.localFile?.childImageSharp?.gatsbyImageData}
          alt={props?.hero?.alternativeText || props.name}
          className=''
        />
      </section>
    )
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
        <WideVsTall
          height={team?.avatar?.localFile?.childrenImageSharp[0]?.original?.height}
          width={team?.avatar?.localFile?.childrenImageSharp[0]?.original?.width}
          url={team?.avatar?.localFile?.url}
          name={team.name}
          bio={team.bio}
          hero={team?.avatar}
        />
      </main>

      <IfProjects projects={team.projects} name={team.name} />

      {/* // TODO this needs an if */}
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
