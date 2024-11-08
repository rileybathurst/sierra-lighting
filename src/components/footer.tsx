import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image";

import Logo from "../images/logo";
import SocialIcons from "../components/social-icons";
import Season from './season';
import { Phone } from './phone';

const Footer = ({ quote }: { quote?: boolean }) => {

  let showQuote = true;
  if (quote === false) {
    showQuote = false;
  }

  const [email, setEmail] = useState('');

  interface SubjectType {
    target: {
      value: string;
    };
  }
  function subject(e: SubjectType) {
    setEmail(e.target.value);
    return null;
  }

  const data = useStaticQuery(graphql`
    query FooterQuery {
      allStrapiTeam {
        nodes {
          id
          name
          slug
    
          avatar {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  breakpoints: [128]
                  width: 128,
                  aspectRatio: 1
                )
              }
            }
            alternativeText
          }
    
        }
      }
    
      strapiAbout {
        businessName
        email
        telephone
      }
    
    }
  `)

  interface TeamType {
    id: string;
    name: string;
    slug: string;
    avatar: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      alternativeText: string;
    };
  }

  return (
    <footer>
      <hr className="stork" />

      {showQuote ? (
        <>
          <h3 className="stork">Start With A Free Quote</h3>

          <form
            name="contact"
            data-netlify="true"
            className="stork"
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
            <div className='address-together'>
              <label className='address'>Address
                <input type="text" name="address" />
              </label>
              <label className='zip'>City or Zip
                <input type="text" name="zip" />
              </label>
            </div>
            <label>Message
              <textarea name="message" />
            </label>
            <label>How did you hear about us?
              <input type="text" name="referral" />
            </label>

            {/* // TODO: this might be a query in the future if I keep changing it */}
            <label className='checkbox'>
              I understand there is a minimum of $700 for holiday lights and $1,000 for new wedding or event lighting clients
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


          <hr className='pelican' />
        </>
      ) : null
      }
      <div className="footer-container">

        <section id="contact" className="contact">

          <h3 className="crest">Contact</h3>
          <h4 className="range">Say Hello</h4>

          <div className="contact-info">
            <p>
              <a
                href={`mailto:${data.strapiAbout.email}`}
              // className='button'
              >
                {data.strapiAbout.email}
              </a>
            </p>
            <p>
              {/* // TODO: fix the styling */}
              Call or Text: <Phone phone={data.strapiAbout.telephone} />
            </p>
          </div>
        </section>

        <div id="team" className="team">
          <h3 className="crest">Who We Are</h3>
          <h4 className="range">
            <Link to="/team" className="link--subtle">Meet Our Team</Link>
          </h4>

          <h4>or&nbsp;
            <Link to="/work" className="link--subtle">Work with us</Link>
          </h4>

          <div className="team-heads spin">
            {data.allStrapiTeam.nodes.map((team: TeamType) => (
              <Link
                key={team.slug}
                to={`/team/${team.slug}`}
              >
                <GatsbyImage
                  image={team?.avatar?.localFile?.childImageSharp?.gatsbyImageData}
                  alt={team?.avatar?.alternativeText}
                />
                <p>{team.name}</p>
              </Link>
            ))
            }
          </div>

        </div>
      </div>

      <hr className="albatross" />

      <div className="footer_list">
        <ul className={Season()}>
          <li className="christmas">
            <ul>
              <li key="christmas" className="footer_list--no_link">
                <strong>Christmas</strong>
              </li>

              <li key="residential"><Link to="/residential">Residential</Link></li>
              <li key="commercial"><Link to="/commercial">Commercial</Link></li>
              <li key="christmas light">
                <Link to="/christmas-lights">
                  Christmas Lights
                </Link>
              </li>
            </ul>
          </li>


          <li className="wedding">
            <ul>
              {/* // TODO: make the top link a little more subtle */}
              <li key="wedding" className="link--subtle">
                <Link to="/wedding"><strong>Wedding</strong></Link>
              </li>
              <li key="wedding lights">
                <Link to="/wedding/lights">Wedding Lights</Link>
              </li>
              <li key="venues"><Link to="/venue">Venues</Link></li>
              <li key="vendors"><Link to="/vendor">Vendors</Link></li>
            </ul>
          </li>

          <li className="additional-services">
            <ul>
              <li key="services" className="footer_list--no_link">
                <strong>Services</strong>
              </li>
              <li key="permanent"><Link to="/patio">Patio Lighting</Link></li>
              <li key="events"><Link to="/social-events">Social Events</Link></li>
              <li key="commercial-events">
                <Link to="/commercial-events">Commercial Events</Link>
              </li>
            </ul>
          </li>

          <li id="work">
            <ul>
              <li key="work" className="footer_list--no_link">
                <strong>Our Work</strong>
              </li>
              <li key="projects"><Link to="/projects">Projects</Link></li>
              <li key="process"><Link to="/process">Process</Link></li>
              <li key="areas"><Link to="/areas">Service Areas</Link></li>
            </ul>
          </li>

          <li id="contacts">
            <ul>
              {/* // TODO: contact also needs the subtle link */}
              <li key="contact" className="">
                <Link to="/contact"><strong>Contact</strong></Link>
              </li>
              {/* <li key="work"><Link to="/work">Work with us</Link></li> */}
              <li key="faqs"><Link to="/faqs">FAQs</Link></li>
              <li key="testimonials"><Link to="/testimonials">Testimonials</Link></li>
              <li key="affiliations"><Link to="/affiliations">Affiliations</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      <hr className="albatross" />
      <SocialIcons />

      <hr className="condor" />

      <div className="footer-copyright">
        <h4 className="sr-only footer-copyright__mind-the-gap">
          <Link to="/">
            {data.strapiAbout.businessName}
          </Link>
        </h4>

        {/* // TODO: current link */}
        <Link to="/">
          <Logo />
        </Link>
        <p>&copy; {new Date().getFullYear()}</p>
        <h5 className="crest">
          <a
            href="https://www.sierrachristmaslights.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link--subtle"
          >
            Formerly known as Sierra Christmas Lights
          </a>
        </h5>
      </div>

    </footer>
  )
}

export default Footer
