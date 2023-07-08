import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";

function Console(props) {
  console.log(props.log);
  return null;
}


function LightGroup(props) {
  if (props.group) {
    return (
      <>
        <div>
          <Console log={props.group} />
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
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </>
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

function Outdoor(props) {
  if (props.outdoor) {
    return (
      <>Indoor-Outdoor</>
    )
  } else {
    return (
      <>Indoor</>
    )
  }
}

function Useage(props) {
  if (props.residentialchristmas && props.commercialchristmas && props.wedding) {
    return (
      <>Residential Christmas, Commercial Christmas, and Wedding</>
    )
  } else if (props.residentialchristmas && props.commercialchristmas) {
    return (
      <>Residential Christmas and Commercial Christmas</>
    )
  } if (props.residentialchristmas) {
    return (
      <>Residential Christmas</>
    )
  } else if (props.commercialchristmas) {
    return (
      <>Commercial Christmas</>
    )
  } else if (props.wedding) {
    return (
      <>Wedding</>
    )
  } else {
    return null;
  }
}

function Projects(props): React.JSX.Element | null {
  const yes = props.yes;
  // console.log(yes.length);
  const name = props.name;

  // ! what are these indexes for? and why am I going up?
  const map = yes.map((project, index) => {
    return (
      <div key={project.id}>
        <Card
          card={project}
          breadcrumb="project"
        />
      </div>
    );
  });

  if (props.yes.length !== 0) {
    return (
      <>
        <div className="measure">
          <hr />
          <h3>Projects Using {name}</h3>
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

  // console.log(props.needed.length);

  const map = props.other.nodes.map((light, index) => {
    return (
      <div key={light.id}>
        <Card
          card={light}
          breadcrumb="light"
        />
      </div>
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

        <section className="attribute">
          <h3 className="crest">Useage</h3>
          <h4 className="range">
            <Useage
              residentialchristmas={light.residentialchristmas}
              commercialchristmas={light.commercialchristmas}
              wedding={light.wedding}
            />
          </h4>
        </section>

        <section className="attribute">
          <h3 className="crest">Location</h3>
          <h4 className="range">
            <Outdoor outdoor={light.outdoor} />
          </h4>
        </section>

        <section className="attribute">
          <h3 className="crest">Group</h3>
          <h4 className="range">
            <Group group={light.light_groups} />
          </h4>
        </section>

      </div>

      <Projects
        yes={light.projects}
        name={light.name}
      />

      <LightGroup
        group={light.light_groups}
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
