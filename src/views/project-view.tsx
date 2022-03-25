import * as React from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

export function NorthTahoeEvents() {
  return <StaticImage
    src="https://sierralighting.s3.us-west-1.amazonaws.com/North_Tahoe_Events-4-web-tagged.jpg"
    alt="christmas lighting display at North Tahoe Events center"
    className="northtahoeevents" />
}

function ReactDescription(props) {
  if (props.desc) {
    return <ReactMarkdown children={props.desc.data.description} />;
  } else {
    return null;
  }
}

const ProjectView = ({ project, other }) => {
  return (
    <>
      <Seo title="Sierra Lighting" />
      <Header />



      <div className="measure">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
          </li>

          &nbsp;/&nbsp;

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/project">
              <span itemProp="name">Projects</span></Link>
            <meta itemProp="position" content="2" />
          </li>

          &nbsp;/&nbsp;

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to={`/project/${project.slug}`}>
              <span itemProp="name">{project.title}</span></Link>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
        <hr />
      </div>

      <GatsbyImage
        image={
          project?.image?.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        alt={project.image?.alternativeText}
        className="poster"
      />

      <main className="measure">
        <article className="single">
          <h1>{project.title}</h1>
          <ReactDescription desc={project.description} />
        </article>
      </main>

      <div className="measure">
        <hr />

        {/* 📣 these will be cards */}
        <h4>
          <Link to="/projects">Other Projects</Link>
        </h4>
      </div>
      <div className="deck">
        {other.edges.map((other) => (
          <div key={other.id} className="card">
            <GatsbyImage
              image={
                other?.node?.image?.localFile?.childImageSharp
                  ?.gatsbyImageData
              }
              alt={other?.node?.alternativeText}
            />
            <div className="paper"></div>
            <div className="content">
              <hr />
              <h3 className="crest">Byline</h3>
              <h2 className="mixta">
                <Link to={`/project/${other.node.slug}`}>
                  {other?.node?.title}
                </Link>
              </h2>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ProjectView;
