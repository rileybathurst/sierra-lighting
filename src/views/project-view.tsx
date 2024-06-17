// TODO: this code seems like a mess
// TODO: remove all the if names

import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import StateAbbreviation from "../components/state-abbreviation";
import Card from "../components/card";
import Start from "../components/start";
import Hero from "../components/hero";

function Triptych(props) {
  if (props.triptych?.length > 0) {
    return (
      <>
        <div className="stork">
          <hr />
          <h3>{props.name} uses these lights</h3>
        </div>
        <section className="deck">
          {props.triptych.map((light) => (
            <Card
              key={light?.id}
              breadcrumb="light"
              {...light}
            />
          ))}
        </section>
      </>
    );
  }
  return null;
}

function Additional(props) {
  if (props.additional?.length > 0) {
    return (
      <div className="stork">
        <section className="">
          {props.additional.map((light) => (
            <div
              key={light?.id}
            >
              <Link to={`/light/${light.slug}`}>
                {light.name}
              </Link>
            </div>
          ))}
        </section>
      </div>
    );
  }
  return null;
}

function Gallery(props) {
  if (props.triptych?.length > 0) {
    return (
      <section className="deck poster">
        {props.triptych.map((image) => (
          <div key={image?.localFile?.url}>
            {/* // TODO: these should be expandable in some way or another */}
            <GatsbyImage
              image={
                image?.localFile?.childImageSharp?.gatsbyImageData
              }
              alt={image.alternativeText}
            />
          </div>
        ))}
      </section>
    );
  }
  return null;
}

// TODO: move this inline
function ReactDescription(props) {
  if (props.desc) {
    return (
      <ReactMarkdown className='react-markdown'>
        {props?.desc?.data?.description}
      </ReactMarkdown>
    );
  }
  return null;
}

// TDOO: move this inline
function Lights(props) {
  const yes = props.yes;
  const name = props.name;

  const map = yes.map((light) => {
    return (
      <Card
        key={light.id}
        breadcrumb="light"
        {...light}
      />
    );
  });

  if (props.yes.length !== 0) {
    return (
      <>
        <div className="stork">
          <hr />
          <h3>{name} uses these lights</h3>
        </div>

        <div className="deck">
          {map}
        </div>
      </>
    );
  }
  return null
}


function Other(props) {
  const map = props.other.nodes.map((project) => {

    return (
      <Card
        key={project.id}
        breadcrumb="project"
        {...project}
      />
    );
  });

  if (props.needed.length === 0) {
    return (
      <>
        <div className="stork">
          <hr />
          <h4>Other Projects</h4>
        </div>

        <div className="deck">
          {map}
        </div>
      </>
    );
  }
  return null
}

function IfVenue(props) {
  if (props?.venue) {
    return (
      <section className="attribute">
        <h3 className="crest">Venue</h3>
        <h4 className="range">
          <Link to={`/venue/${props?.venueSlug}`} className="link--subtle">
            {props?.name}
          </Link>
        </h4>
        {props?.area.map(area => (
          <p>
            <Link to={`/areas/${area.slug}`} className="link--subtle">
              {area.name}, <StateAbbreviation state={area.state} />
            </Link>
          </p>
        ))}
      </section>
    );
  }

  if (props.area.length > 0) {
    return (
      <section className="attribute">
        <h3 className="crest">Venue</h3>
        {props?.area.map(area => (
          <h4 className="range">
            <Link to={`/areas/${area.slug}`} className="link--subtle">
              {area.name}, <StateAbbreviation state={area.state} />
            </Link>
          </h4>
        ))}
      </section>
    );
  }
  return null
}

function IfVendor(props) {
  if (props.vendor.length > 0) {
    return (
      <section className="attribute">
        <h3 className="crest">Vendors</h3>
        {props?.vendor.map(vendor => (
          <>
            {/* // TODO these could kinda be attached so the hover state is nicer */}
            <h4 className="range">
              <Link to={`/vendor/${vendor.slug}`} className="link--subtle">
                {vendor.name}
              </Link>
            </h4>
            <p>
              <Link to={`/vendor/${vendor.slug}`} className="link--subtle">
                <span className="capitalize">{vendor.service}</span><br />
              </Link>
            </p>
          </>
        ))}
      </section>
    );
  }
  return null
}

function IfTeam(props) {
  if (props.team.length > 0) {
    return (
      <section className="attribute">
        <h3 className="crest">Team</h3>
        <div className="">
          {props?.team.map(team => (
            <h4 className="range last-ampersand inline" key={team.slug}>
              <Link to={`/team/${team.slug}`} className="link--subtle">
                {team.name}
              </Link>
            </h4>
          ))}
        </div>
      </section>
    );
  }
  return null
}

function Attributes(props) {
  if (props?.venue || props?.area?.length > 0 || props?.vendor?.length > 0 || props?.team?.length > 0) {

    // console.log(props?.venue);
    // console.log(props?.area);

    // return null;

    return (
      <>
        <hr className="stork" />
        <div className="attributes">

          <IfVenue
            venue={props?.venue}
            name={props?.venue?.name}
            venueSlug={props?.venue?.slug}
            area={props?.area}
          />

          {/* // TODO theres a vendor(s) but often the s is not needed */}
          <IfVendor vendor={props?.vendor} />

          <IfTeam team={props?.team} />
        </div>
      </>
    );
  }

  // console.log('no attributes');
  return null
}

const ProjectView = ({ project, triptych, additional, other }) => {
  return (
    <>
      <Header />

      <div className="stork">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/projects">
              <span itemProp="name">Projects</span></Link>&nbsp;/&nbsp;
            <meta itemProp="position" content="1" />
          </li>

          {/* // TODO: finish this */}
          {/* // ? does it go before or after the project title */}
          <li>
            {project.services.map((service, index) => (
              <>
                <Link to={`/${service.slug}`} key={index}>
                  {service.name}
                </Link>&nbsp;/&nbsp;
              </>
            ))}
          </li>

          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{project.title}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <Hero hero={project?.image} />
      {/*       <GatsbyImage
        image={project?.image?.localFile?.childImageSharp?.gatsbyImageData}
        alt={project.image?.alternativeText || project.title}
        className="poster"
      /> */}

      <main className="stork">
        <article className="single">
          <h1>{project.title}</h1>
          <ReactDescription desc={project?.description} />
        </article>

        <hr />
        <h3>Interested in a project like this</h3>
        <Start />
      </main>

      <Gallery triptych={project.gallery} />

      <Attributes
        venue={project?.venue}
        area={project?.areas}
        vendor={project?.vendors}
        team={project?.teams}
      // TODO: services
      />

      <Lights
        yes={project.lights}
        name={project.title}
      />

      <Triptych
        triptych={triptych}
        name={project.title}
      />

      <Additional
        additional={additional}
      />

      <Other
        needed={project.lights}
        other={other}
      />

      <Footer />
    </>
  );
};

export default ProjectView;

// TODO I've very started working on the gallery but it needs work