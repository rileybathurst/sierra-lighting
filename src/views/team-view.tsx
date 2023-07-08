import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";

// ! this currently isnt changing anything
function IfHero(props) {
  if (props.hero) {
    const biggy = props.hero?.localFile?.childImageSharp?.gatsbyImageData?.width;
    // this isnt dry but variables didnt like me so I ditched them

    if (biggy <= 960) {
      return (
        <GatsbyImage
          image={props?.hero?.localFile?.childImageSharp?.gatsbyImageData}
          alt={props?.hero?.alternativeText}
          className=''
        />
      );
    } else {
      return (
        <GatsbyImage
          image={props?.hero?.localFile?.childImageSharp?.gatsbyImageData}
          alt={props?.hero?.alternativeText}
          className=''
        />
      )
    }
  } else {
    return null;
  }
}

function ReactDescription(props) {
  if (props.bio) {
    return <ReactMarkdown children={props.bio.data.bio} remarkPlugins={[remarkGfm]} />;
  } else {
    return null;
  }
}

function IfProjects(props) {
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

function WideVsTall(props) {
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
          alt={props?.hero?.alternativeText}
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
          alt={props?.hero?.alternativeText}
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
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/team">
              <span itemProp="name">Team</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{team.name}</span>
            <meta itemProp="position" content="3" />
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
        {team.projects.map((project) => (
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
