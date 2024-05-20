import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Start from "../components/start";

function LightGroup(props) {
  if (props.group) {
    return (
      <div>
        {props.group.map((index) => {
          return (
            <div key={index.id}>
              <hr className="stork" />
              <h3 className="stork">
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
        <div className="stork">
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
        <div className="stork">
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

        <div className="stork">
          <p className="crest">Even More?</p>
          <h5 className="range"><Link to="/lights" className="link--subtle">View all other lights</Link></h5>
        </div>
      </>
    );
  }
  return null
}

interface AliasTypes {
  aliases: string[];
}
function Aliases({ aliases }: AliasTypes) {
  if (aliases) {
    return (
      <>
        {/* // TODO: more design here */}
        <h3 className="kilimanjaro">Also known as:</h3>
        <ul>
          {aliases.map((aka) => {
            return (
              <li key={aka} className="first-capital">
                {aka}
              </li>
            )
          })}
        </ul>
        <hr />
      </>
    );
  }

  return null
}

const LightView = ({ light, other }) => {

  // Aliases
  // this combines with a specific regex in strapi
  // console.log(light.alias);
  const aka = light.alias.split('\n').map(line => line.replace('- ', ''));
  // console.log(aka); // ["cafe lights", "bistro lights"]

  return (
    <>
      <Header />

      <main>

        <div className="stork">
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

        <div className="light-hero poster">
          <GatsbyImage
            image={
              light?.image?.localFile?.childImageSharp
                ?.gatsbyImageData
            }
            alt={light.image?.alternativeText}
          />
          <GatsbyImage
            image={
              light?.detail?.localFile?.childImageSharp
                ?.gatsbyImageData
            }
            alt={light.detail?.alternativeText}
            className="detail"
          />
        </div>

        <article className="stork">
          {/* // TODO: this could be using a js length test for the lower clamp */}
          <h1 className="clamp-denali_everest">{light.name}</h1>

          <Aliases aliases={aka} />

          <p>{light.description}</p>
          <hr />
          <Start />
        </article>
      </main>

      <hr className="stork" />
      <div className="attributes">

        {/*         <section className="attribute" >
          <h3 className="crest">Group</h3>
          <h4 className="range">
            <Group group={light.light_groups} />
          </h4>
        </section > */}

        <section className="attribute">
          <h3 className="crest">Useage</h3>
          <ul className="">
            {light.services.map((service) => {
              return (
                <li key={service.id} className="range first-capital">
                  <Link to={`/${service.slug}`}>
                    {service.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

      </div >

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
