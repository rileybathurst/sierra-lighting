// TODO: this code seems like a mess

import * as React from "react";
import { Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import StateAbbreviation from "../components/state-abbreviation";
import Card from "../components/card";

function ReactDescription(props) {
  if (props.desc) {
    return <ReactMarkdown children={props?.desc?.data?.description} />;
  } else {
    return null;
  }
}

function Lights(props) {
  const yes = props.yes;
  const name = props.name;

  const map = yes.map((light, index) => {
    return (
      <div key={index}>
        <Card
          card={light}
          breadcrumb="light"
        />
      </div>
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
  const map = props.other.nodes.map((project, index) => {

    return (
      <div key={index}>
        <Card
          card={project}
          breadcrumb="project"
        />
      </div>
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
            <Link to={`/area/${area.slug}`} className="link--subtle">
              {area.name}, <StateAbbreviation state={area.state} />
            </Link>
          </p>
        ))}
      </section>
    );
  } else if (props.area.length > 0) {
    return (
      <section className="attribute">
        <h3 className="crest">Venue</h3>
        {props?.area.map(area => (
          <h4 className="range">
            <Link to={`/area/${area.slug}`} className="link--subtle">
              {area.name}, <StateAbbreviation state={area.state} />
            </Link>
          </h4>
        ))}
      </section>
    );
  } else {
    return null
  }
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
                <span className="first-capital">{vendor.service}</span><br />
              </Link>
            </p>
          </>
        ))}
      </section>
    );
  } else {
    return null
  }
}

function IfTeam(props) {
  if (props.team.length > 0) {
    return (
      <section className="attribute">
        <h3 className="crest">Team</h3>
        {props?.team.map(team => (
          <h4 className="range last-ampersand" key={team.slug}>
            <Link to={`/team/${team.slug}`} className="link--subtle">
              {team.name}
            </Link>
          </h4>
        ))}
      </section>
    );
  } else {
    return null
  }
}

function IfAttributes(props) {
  if (props?.venue || props?.area?.length > 0 || props?.vendor?.length > 0 || props?.team?.length > 0) {

    // console.log(props?.venue);
    // console.log(props?.area);

    // return null;

    return (
      <>
        <hr className="measure" />
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
  } else {
    // console.log('no attributes');

    return null
  }
}

const ProjectView = ({ project, other }) => {
  return (
    <>
      <Seo
        title={`${project.title} | Sierra Lighting`}
        description={project.excerpt}
        image={project?.ogimage} // TODO this could have an if back to the regular image
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
          <ReactDescription desc={project?.description} />
        </article>

      </main>

      <IfAttributes
        venue={project?.venue}
        area={project?.areas}
        vendor={project?.vendors}
        team={project?.teams}
      />

      <Lights
        yes={project.lights}
        name={project.title}
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