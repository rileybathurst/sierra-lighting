import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata";
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
  const [email, setEmail] = useState('');

  function subject(e) {
    setEmail(e.target.value);
    return null;
  }

  const { allStrapiTeam } = useStaticQuery(graphql`
  query FooterQuery {
    allStrapiTeam
    (limit: 3) {
      nodes {
        id
        name
        slug
  
        avatar {
          localFile {
            childImageSharp {
              gatsbyImageData(
                breakpoints: [128]
                width: 128
              )
            }
          }
          alternativeText
        }
  
      }
    }
  }
  `)

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
            {/* // TODO: query this stuff */}
            <p><a href={`mailto:${useSiteMetadata().email}`}><span itemProp="email">{useSiteMetadata().email}</span></a></p>
            <p><a href={`tel:${useSiteMetadata().telephone}`}>Phone: <span itemProp="telephone">{useSiteMetadata().telephone}</span></a></p>
            {/* <p><a href="tel:+1-530-414-9899">California Number: <span itemProp="telephone">(530) 414-9899</span></a></p> */}
          </div>
        </section>

        <div id="team" className="team measure">
          <h3 className="crest">Who We Are</h3>
          <h4 className="range">
            <Link to="/team" className="link--subtle">Meet Our Team</Link>
          </h4>

          <h4>or <Link to="/work" className="link--subtle">Work with us</Link></h4>

          <div className="team-heads spin">
            {allStrapiTeam.nodes.map(team => (
              <Link to={`/team/${team.slug}`} key={team.slug}>
                <IfTeamImage
                  teamImage={team?.avatar?.localFile?.childImageSharp?.gatsbyImageData}
                  alt={team?.avatar?.alternativeText}
                />
                <p itemScope itemProp="Person" itemType="https://schema.org/Person">
                  <span itemProp="name">{team.name}</span>
                </p>
              </Link>
            ))
            }
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
        <label className='checkbox'>I understand there is a minimum of $1,000 for new clients
          <input type="checkbox" name="minimum" />
        </label>
        <p className="sr-only">
          <label>
            Don&#39;t fill this out if you&#39;re human:
            <input name="bot-field" />
          </label>
        </p>
        <button type="submit">Send</button>
      </form>


      <hr className="measure" />

      {/* // TODO front page only flex arrangment */}
      <SocialIcons />

      <hr className="pelican" />

      <div className="footer_list">
        <Season>
          <FooterList />
        </Season>
      </div>

      <hr className="pelican" />

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
