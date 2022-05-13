import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

function ReactDescription(props) {
  if (props.desc) {
    return <ReactMarkdown children={props.desc.data.description} />;
  } else {
    return null;
  }
}

function Lights(props) {
  const yes = props.yes;
  const name = props.name;

  const map = yes.map((light, index) => {
    return (
      <section className="card" key={index}>
        <GatsbyImage
          image={
            light?.image?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt={light.alternativeText}
        />
        <div className="paper"></div>
        <div className="content">
          <hr />
          <h2>
            <Link to={`/light/${light.slug}`}>
              {light.name}
            </Link>
          </h2>
          <p>{light.excerpt}</p>
        </div>
      </section>
    );
  });

  if (props.yes.length !== 0) {
    return (
      <>
        <div className="measure">
          <hr />
          <h3>{name} uses these lights</h3>
        </div>

        <div className="deck">
          {map}
        </div>
      </>
    );
  } else {
    return null
  }
}


function Other(props) {

  console.log(props.needed.length);

  const map = props.other.nodes.map((project, index) => {
    return (
      <section className="card" key={index}>
        <GatsbyImage
          image={
            project?.image?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt={project.alternativeText}
        />
        <div className="paper"></div>
        <div className="content">
          <hr />
          <h2>
            <Link to={`/project/${project.slug}`}>
              {project.title}
            </Link>
          </h2>
          <p>{project.excerpt}</p>
        </div>
      </section>
    );
  });

  if (props.needed.length == 0) {
    return (
      <>
        <div className="measure">
          <hr />
          <h4>Other Projects</h4>
        </div>

        <div className="deck">
          {map}
        </div>
      </>
    );
  } else {
    return null
  }
}

const ProjectView = ({ project, other }) => {
  return (
    <>
      <Seo
        title={`${project.name} | Sierra Lighting`}
        description={project.excerpt}
        image={project?.image.localFile.url}
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
            <Link itemProp="item" to="/projects">
              <span itemProp="name">Projects</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="2" />
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{project.title}</span>
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

      <Lights
        yes={project.lights}
        name={project.title}
      />

      <Other
        needed={project.lights}
        other={other}
      />

      {/* <div className="measure">
        <hr />

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
      </div> */}

      <Footer />
    </>
  );
};

export default ProjectView;
