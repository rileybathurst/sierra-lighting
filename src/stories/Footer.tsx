// this is the Name.tsx file
import React from 'react';
import { FooterList } from './footer-list';

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
          I understand there is a minimum of $700 for christmas or holiday lights and $1,000 for new wedding or event lighting clients
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

        <section className="contact">

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

        <div className="team">
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

      <FooterList />

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