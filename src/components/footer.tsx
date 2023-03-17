import React, { useState } from 'react';
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Logo from "../images/logo";
import SocialIcons from "../components/social-icons";
import FooterList from "../lists/footer-list";
import Season from './season';

// I dont have all of these and it might fix the caching issue
function IfTeamImage(props) {

  if (props.teamImage) {
    return (
      <GatsbyImage
        image={
          props.teamImage
        }
        alt={props.alt}
      />
    )
  } else {
    return null
  }
}

// ? I believe this was the jobber form which I couldnt get working
/* function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
} */

/* const handleSubmit = (event) => {
  event.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": event.target.getAttribute("name"),
      ...name,
    }),
  })
    .then(() => navigate("/thank-you/"))
    .catch((error) => alert(error));
}; */

const Footer = () => {

  // ? this seems a weird way to do this as it could just be hard coded
  const [email, setEmail] = useState('info@sierra.lighting');

  function subject(e) {
    setEmail(e.target.value);
    return null;
  }

  return (
    <footer>{/* itemScope itemType="https://schema.org/LocalBusiness" */}
      <div className="measure">
        <hr />
      </div>
      <div className="footer-container">
        <section id="contact" className="contact">

          <h3 className="crest">Contact</h3>
          <h4 className="range">Say Hello</h4>

          <div className="contact-info">
            <p><a href="mailto:info@sierra.lighting"><span itemProp="email">info@sierra.lighting</span></a></p>
            <p><a href="tel:+1-775-525-1898">Nevada Number: <span itemProp="telephone">(775) 525-1898</span></a></p>
            <p><a href="tel:+1-530-414-9899">California Number: <span itemProp="telephone">(530) 414-9899</span></a></p>
          </div>
        </section>

        <div id="team" className="team measure">
          <h3 className="crest">Who We Are</h3>
          <h4 className="range">
            <Link to="/team" className="link--subtle">Meet Our Team</Link>
          </h4>

          <h4>or <Link to="/work" className="link--subtle">Work with us</Link></h4>

          <div className="team-heads spin">
            <StaticQuery
              query={query}
              render={data => (
                <>
                  {
                    data.residential.nodes.map(team => (

                      // I think the only reason for this div is the key?
                      // <div >
                      <Link to={`/team/${team.slug}`} key={team.slug}>
                        <IfTeamImage
                          teamImage={team?.avatar?.localFile?.childImageSharp?.gatsbyImageData}
                          alt={team?.avatar?.alternativeText}
                        />
                        <p itemScope itemProp="Person" itemType="https://schema.org/Person">
                          <span itemProp="name">{team.name}</span>
                          {/* // ? should this have a last name even if its only sr */}
                        </p>
                      </Link>
                      // </div>

                    ))
                  }
                </>
              )}
            />
          </div>


        </div>
      </div>

      <div className="measure inherit">
        <hr />
      </div>

      <form
        name="contact"
        data-netlify="true"
        className="measure"
        netlify-honeypot="bot-field"
        method="POST"
        action="/form-success"
      >

        <input type="hidden" name="form-name" value="contact" />

        <input type="hidden" name="subject"
          value={`Contact Form from sierra.lighting ${email}`} />

        <label>Name
          <input type="text" name="name" />
        </label>
        <label>Email
          <input type="email" name="email" onChange={subject} />
        </label>
        <label>Phone
          <input type="tel" name="tel" />
        </label>
        <label>Message
          <textarea name="message" />
        </label>
        <p className="sr-only">
          <label>
            Don&#39;t fill this out if you&#39;re human:
            <input name="bot-field" />
          </label>
        </p>
        <button type="submit">Send</button>
      </form>

      <div className="measure">
        <hr />
      </div>

      {/* // TODO front page only flex arrangment */}
      <SocialIcons />

      <div className="measure">
        <hr />
      </div>

      <div className="measure">
        <Season season="wedding">
          <div className="footer_list whichseason_wedding">
            <FooterList />
          </div>
        </Season>

        <Season season="holiday">
          <div className="footer_list whichseason_holiday">
            <FooterList />
          </div>
        </Season>

        <hr />
      </div>

      <div className="footer-copyright">
        <h4 className="sr-only footer-copyright__mind-the-gap" itemProp="name">
          <Link to="/" title="to the front page">
            Sierra Lighting
          </Link>
        </h4>

        <Link to="/">
          <Logo />
        </Link>
        {/* // TODO 2023 This dissappears */}
        <h5 className="crest">
          <a href="https://www.sierrachristmaslights.com/" target="_blank" rel="noopener noreffer"
            className="link--subtle">
            Formally known as Sierra Christmas Lights
          </a>
        </h5>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>

    </footer>
  )
}

export default Footer

const query = graphql`
query FooterQuery {
  residential: allStrapiTeam
  (limit: 3) {
    nodes {
      name
      slug

      avatar {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        alternativeText
      }

    }
  }
}
`

// alternativeText