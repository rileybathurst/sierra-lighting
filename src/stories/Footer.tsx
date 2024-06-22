// this is the Name.tsx file
import React from 'react';

interface FooterProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Footer = ({
  primary = false,
  ...props
}: FooterProps) => {

  return (
    <footer>
      <hr className="stork" />

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
          value={`Contact Form from sierra.lighting email`} />

        <label>Name
          <input type="text" name="name" />
        </label>
        <label>Email
          <input type="email" name="email" />
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
      <div className="footer-container">

        <section id="contact" className="contact">

          <h3 className="crest">Contact</h3>
          <h4 className="range">Say Hello</h4>

          <div className="contact-info">
            <p>
              <a href={`mailto:data.strapiAbout.email`}>
                data.strapiAbout.email
              </a>
            </p>
            <p>
              {/* // TODO: I think this is wrong if its not broken up correctly */}
              <a href={`teldata.strapiAbout.telephone`}>
                Call or Text: data.strapiAbout.telephone
              </a>
            </p>
          </div>
        </section>

        <div id="team" className="team">
          <h3 className="crest">Who We Are</h3>
          <h4 className="range">
            <a href="/team" className="link--subtle">Meet Our Team</a>
          </h4>

          <h4>or&nbsp;
            <a href="/work" className="link--subtle">Work with us</a>
          </h4>

          <div className="team-heads spin">
            {/* {data.allStrapiTeam.nodes.map((team: TeamType) => (
              <Link
                key={team.slug}
                to={`/team/${team.slug}`}
              >
                <GatsbyImage
                  image={team?.avatar?.localFile?.childImageSharp?.gatsbyImageData}
                  alt={team?.avatar?.alternativeText}
                />
                <p>{team.name}</p>
              </a>
            ))
            } */}
          </div>

        </div>
      </div>

      <hr className="albatross" />

      <div className="footer_list">
        <ul>
          <li className="christmas">
            <ul>
              <li key="christmas" className="footer_list--no_link">
                <strong>Christmas</strong>
              </li>

              <li key="residential"><a href="/residential">Residential</a></li>
              <li key="commercial"><a href="/commercial">Commercial</a></li>
              <li key="christmas light">
                <a href="/christmas-lights">
                  Christmas Lights
                </a>
              </li>
            </ul>
          </li>


          <li className="wedding">
            <ul>
              {/* // TODO: make the top link a little more subtle */}
              <li key="wedding" className="link--subtle">
                <a href="/wedding"><strong>Wedding</strong></a>
              </li>
              <li key="wedding lights">
                <a href="/wedding/lights">Wedding Lights</a>
              </li>
              <li key="venues"><a href="/venue">Venues</a></li>
              <li key="vendors"><a href="/vendor">Vendors</a></li>
            </ul>
          </li>

          <li className="additional-services">
            <ul>
              <li key="services" className="footer_list--no_link">
                <strong>Services</strong>
              </li>
              <li key="permanent"><a href="/patio">Patio Lighting</a></li>
              <li key="events"><a href="/social-events">Social Events</a></li>
              <li key="commercial-events">
                <a href="/commercial-events">Commercial Events</a>
              </li>
            </ul>
          </li>

          <li id="work">
            <ul>
              <li key="work" className="footer_list--no_link">
                <strong>Our Work</strong>
              </li>
              <li key="projects"><a href="/projects">Projects</a></li>
              <li key="process"><a href="/process">Process</a></li>
              <li key="areas"><a href="/areas">Service Areas</a></li>
            </ul>
          </li>

          <li id="contacts">
            <ul>
              {/* // TODO: contact also needs the subtle link */}
              <li key="contact" className="">
                <a href="/contact"><strong>Contact</strong></a>
              </li>
              {/* <li key="work"><a href="/work">Work with us</a></li> */}
              <li key="faqs"><a href="/faqs">FAQs</a></li>
              <li key="testimonials"><a href="/testimonials">Testimonials</a></li>
              <li key="affiliations"><a href="/affiliations">Affiliations</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <hr className="albatross" />
      {/* <SocialIcons /> */}

      <hr className="condor" />

      <div className="footer-copyright">
        <h4 className="sr-only footer-copyright__mind-the-gap">
          <a href="/">
            {/* {data.strapiAbout.businessName} */}
          </a>
        </h4>

        {/* // TODO: current link */}
        <a href="/">
          {/* <Logo /> */}
        </a>
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
  );
};