import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

import IfHero from "../components/ifHero";

function ReactDescription(props) {
  if (props.bio) {
    return <ReactMarkdown children={props.bio.data.bio} />;
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

      <main className="measure">
        <article className="single" itemScope itemType="https://schema.org/Person">
          <div className="team-header">
            <h1 itemProp="name">{team.name}</h1>
            <div className="team-heads">
              {/*               <GatsbyImage
                image={
                  team?.avatar?.localFile?.childImageSharp?.gatsbyImageData
                }
                alt={team.avatar?.alternativeText}
                className="poster"
                itemProp="image"
              /> */}
              <IfHero hero={team?.avatar} />
            </div>
          </div>

          <ReactDescription bio={team.bio} />



        </article>
      </main>
      <Footer />
    </>
  );
};

export default TeamView;
