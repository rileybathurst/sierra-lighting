import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";

function LightGroup(props) {
  if (props.group) {
    return (
      <div>
        {props.group.map((index) => {
          return (
            <div key={index.id}>
              <hr className="measure" />
              <h3 className="measure">
                Other Lights in {index.name}
              </h3>

              <div className="deck">
                {index.lights.map((light) => (
                  <div key={light.id}>
                    <Card
                      card={light}
                      breadcrumb="light"
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return null
  }
}

function Group(props) {
  if (props.group) {
    return (
      <ul className="listed">
        {props.group.map((index) => {
          return (
            <li key={index.id} className="first-capital">
              <Link to={`/light-group/${index.slug}`}>
                {index.name}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return null
  }
}

function Projects(props: React.JSX.Element | null) {
  if (props.projects.length !== 0) {
    return (
      <>
        <div className="measure">
          <hr />
          <h3>Projects Using {props.name}</h3>
        </div>

        <div className="deck">
          {props.projects.map((project) => (
            <div key={project.id}>
              <Card
                card={project}
                breadcrumb="project"
              />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return null
  }
}

{/* // * Break this up in a very large way almost to the point these could be components */ }
function Other(props) {

  if (props.needed.length == 0) {
    return (
      <>
        <div className="measure">
          <hr />
          <h4>Other Lighting Styles</h4>
        </div>

        <div className="deck">
          <div key={light.id}>
            <Card
              card={light}
              breadcrumb="light"
            />
          </div>
        </div>

        <div className="measure">
          <p className="crest">Even More?</p>
          <h5 className="range"><Link to="/lights" className="link--subtle">View all other lights</Link></h5>
        </div>
      </>
    );
  } else {
    return null
  }
}

function Aliases(props) {
  if (props.aliases) {

    const obj = JSON.parse(props.aliases);
    var values = Object.values(obj);

    return (
      <>
        {/* // TODO: more design here */}
        <h3 className="kilimanjaro">Also known as:</h3>
        <ul>
          {values.map((index) => {
            return (
              <li key={index} className="first-capital">
                {index}
              </li>
            )
          })}
        </ul>
        <hr />
      </>
    )

  } else {
    return null
  }
}

const LightView = ({ light, other }) => {
  return (
    <>
      {/* // TODO: needs the aliases in the SEO */}
      <Seo
        title={`${light.name} | Sierra Lighting`}
        description={light?.excerpt}
        image={light?.image?.localFile?.url}
      />

      <Header />

      <main>

        <div className="measure">
          <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">

            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="first-capital">
              <Link itemProp="item" to="/lights">
                <span itemProp="name">Lights</span></Link>&nbsp;/&nbsp;
              <meta itemProp="position" content="1" />
            </li>

            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{light.name}</span>
              <meta itemProp="position" content="2" />
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
          {/* // TODO: this could be using a js length test for the lower clamp */}
          <h1 className="clamp-denali_everest">{light.name}</h1>

          <Aliases aliases={light?.alias?.internal.content} />

          <p>{light.description}</p>
        </article>
      </main>

      <hr className="measure" />
      <div className="attributes">

        <section className="attribute" >
          <h3 className="crest">Group</h3>
          <h4 className="range">
            <Group group={light.light_groups} />
          </h4>
        </section >

        <section className="attribute">
          <h3 className="crest">Useage</h3>
          <h4 className="range">
            <ul>
              {light.services.map((service) => {
                return (
                  <li key={service.id} className="first-capital">
                    <Link to={`/${service.slug}`}>
                      {service.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </h4>
        </section>



      </div >

      {/* // TODO: this isnt working on wedding */}
      {/* https://sierra.lighting/lights/wedding/ */}
      <Projects
        projects={light.projects}
        name={light.name}
      />

      <LightGroup
        group={light.light_groups}
      />

      {/*// TODO I keep breaking things and rebuilding 
      <Other
        needed={light.projects}
        other={other}
      /> */}

      <Footer />
    </>
  );
};

export default LightView;
