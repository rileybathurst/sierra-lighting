import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

function Projects(props) {
  const yes = props.yes;
  // console.log(yes.length);
  const name = props.name;

  const map = yes.map((project, index) => {
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
          <h2><Link to={`/venue/${project.slug}`}>{project.title}</Link></h2>
          <p>{project.excerpt}</p>
        </div>
      </section>
    );
  });

  if (props.yes.length !== 0) {
    return (
      <>
        <div className="measure">
          <hr />
          <h3>Projects using {name}</h3>
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

{/* // * Break this up in a very large way almost to the point these could be components */ }

function Other(props) {

  console.log(props.needed.length);

  const map = props.other.nodes.map((light, index) => {
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
          <h2><Link to={`/light/${light.slug}`}>{light.name}</Link></h2>
          <p>{light.excerpt}</p>
        </div>
      </section>
    );
  });

  if (props.needed.length == 0) {
    return (
      <>
        <div className="measure">
          <hr />
          <h4>Other Lighting Styles</h4>
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


const LightView = ({ light, other }) => {
  return (
    <>
      <Seo
        title="Sierra Lighting"
        description={light.description}
        image={light.image.localFile.url}
      />
      <Header />
      <main>

        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link itemProp="item" to="/">
                <span itemProp="name">Home</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>

            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="first-capital">
              <Link itemProp="item" to="/lights">
                <span itemProp="name">Lights</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="2" />
            </li>

            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{light.name}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
          <hr />
        </div>

        <GatsbyImage
          image={
            light?.image?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt={light.image?.alternativeText}
          className="poster"
        />
        <article className="measure">
          <h1>{light.name}</h1>
          <p>{light.description}</p>
        </article>
      </main>

      <Projects
        yes={light.projects}
        name={light.name}
      />

      <Other
        needed={light.projects}
        other={other}
      />

      <Footer />
    </>
  );
};

export default LightView;
