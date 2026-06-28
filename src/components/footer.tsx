import * as React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image";

import { profanity } from '@2toad/profanity';

import Logo from "../images/logo";
import { isWithinBusinessHours } from './business-hours';
import Season from './season';
import { Phone } from './phone';
import Socials from './socials';
import { days } from './days';

const Footer = ({ quote }: { quote?: boolean }) => {

  const [reviewCount, setReviewCount] = React.useState<number | null>(null);
  const [starRating, setStarRating] = React.useState<number | null>(null);

  // TODO: I tried implementing caching on this and was getting stuck
  React.useEffect(() => {
    const placeId = 'ChIJKUUETZhHmYARR--Ow646_BU';
    const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error('Missing GATSBY_GOOGLE_MAPS_API_KEY');
      return;
    }

    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${apiKey}`;

    async function fetchGoogleReviews() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        const reviewCount = data.userRatingCount;
        const starRating = data.rating;

        setReviewCount(reviewCount ?? null);
        setStarRating(starRating ?? null);

        console.log(`Google Reviews: ${reviewCount} reviews, ${starRating} stars`);

        // Update your website's HTML elements
        // document.getElementById('google-count').innerText = `${reviewCount} reviews`;
        // document.getElementById('google-stars').innerText = `${starRating} / 5 Stars`;
      } catch (error) {
        console.error('Error fetching Google Places data:', error);
      }
    }

    fetchGoogleReviews();
  }, []);

  let showQuote = true;
  if (quote === false) {
    showQuote = false;
  }

  // ? the next step would be detecting links but start with profanity checks
  const [canSend, setCanSend] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [emailProfanity, setEmailProfanity] = React.useState(false);
  const [messageProfanity, setMessageProfanity] = React.useState(false);
  const [referralProfanity, setReferralProfanity] = React.useState(false);

  interface SubjectType {
    target: {
      value: string;
    };
  }
  function subject(e: SubjectType) {
    // TODO: working on this testing the contact.csv first
    profanity.exists(e.target.value) && console.log("Profanity detected");
    setCanSend(!profanity.exists(e.target.value));

    setEmailProfanity(profanity.exists(e.target.value));

    setEmail(e.target.value);
    // console.log(e.target.value);

    return null;
  }

  function profanityCheck(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const value = e.target.value;
    const hasProfanity = profanity.exists(value);
    const name = e.target.name;

    if (name === "message") {
      setMessageProfanity(hasProfanity);
    } else if (name === "referral") {
      setReferralProfanity(hasProfanity);
    }

    setCanSend(!hasProfanity && !emailProfanity && !messageProfanity && !referralProfanity);

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

        social {
          id
          username
          featured
          order

          site {
            id
            service
            link
            icon
          }
        }
      }

      strapiForm {
        opening
        closing
        monitoring
        minimum
        profanity
        outsideHours
        days {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
    }
  `)

  /*------------------------------------*/

  function Hours(time: string): JSX.Element {
    const hour = Number(time.split(":")[0]);
    const minute = time.split(":")[1];
    const minuteStr = minute !== "00" ? `:${minute}` : "";

    if (hour >= 12) {
      return <>{hour - 12}{minuteStr} <span className="all-small-caps">PM</span></>;
    } else {
      return <>{hour}{minuteStr} <span className="all-small-caps">AM</span></>;
    }
  }

  /*------------------------------------*/

  interface TeamType {
    id: React.Key;
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

  /*------------------------------------*/

  const featuredSocials = (data?.strapiAbout?.social ?? [])
    .filter((social: { featured?: boolean }) => social.featured)
    .sort((a: { order?: number }, b: { order?: number }) => (a.order ?? 0) - (b.order ?? 0));

  const google = featuredSocials.find((social: { site: { service: string } }) => social.site.service === "google");

  /*------------------------------------*/

  return (
    <footer>
      <hr className="stork" />

      {showQuote && (
        <>
          <h3 className="stork">Start With A Free Quote</h3>

          {/* // ? should i be sanitizing inputs here */}
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            method="POST"
            action="/form-success"
            className="stork"
          >

            <input type="hidden" name="form-name" value="contact" />

            <input type="hidden" name="subject"
              value={`${!isWithinBusinessHours() ? "Outside Business Hours: " : ""}Contact Form from sierra.lighting ${email}`} />

            {!isWithinBusinessHours() && (
              <input className="sr-only" type="hidden" name="hours" value={`${data.strapiForm.outsideHours}`} />
            )}

            <label>Name
              <input type="text" name="name" />
            </label>
            <label>Email
              <input type="email" name="email" onChange={subject} className={emailProfanity ? "error" : ""} />
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
              <textarea name="message" onChange={profanityCheck} className={messageProfanity ? "error" : ""} />
            </label>
            <label>How did you hear about us?
              <input type="text" name="referral" onChange={profanityCheck} className={referralProfanity ? "error" : ""} />
            </label>

            {/* // TODO: this might be a query in the future if I keep changing it */}
            <label className='checkbox'>
              {data.strapiForm.minimum}
              <input type="checkbox" name="minimum" />
            </label>
            <p className="sr-only">
              <label>
                Don&#39;t fill this out if you&#39;re human:
                <input name="bot-field" />
              </label>
            </p>

            {!canSend && (
              <p className="error">
                {data.strapiForm.profanity}
              </p>
            )}

            <button type="submit" disabled={!canSend}>Send</button>
          </form>

          <hr className='pelican' />
        </>
      )}
      <div className="footer-container">

        <section id="contact" className="contact">

          <h3>Contact</h3>

          {/* // TODO: this changes twice on hover and reverts back its just a mess of overlapping styles */}
          <div className="contact-info">
            {/* // ? why does this need a <p> */}
            <p>
              <a href={`mailto:${data.strapiAbout.email}`}>
                {data.strapiAbout.email}
              </a>
            </p>
            <p>
              {/* // TODO: fix the styling and put this in strapi */}
              Call or Text: <Phone phone={data.strapiAbout.telephone} />

              {/* // * elements of typograhic style 3.2 numerals, capitals & small caps */}
              <small>
                {data.strapiForm.monitoring}&nbsp;
                <span className="white-space-no-wrap">{Hours(data.strapiForm.opening)}&thinsp;and&thinsp;{Hours(data.strapiForm.closing)} <span className="all-small-caps">PST</span></span>,
                &nbsp;<span className="white-space-no-wrap">{days(data.strapiForm.days)}</span>.&nbsp;
              </small>
            </p>
          </div>
        </section>

        <div id="team" className="team">
          <h3>
            <Link to="/team" className="link--subtle">Team</Link>
          </h3>

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

      {/* // TODO: use grid-row as soon as it hits baseline */}
      {/* // TODO: put all this data in an arraay and make it way more readable */}
      {/* use strapi services etc to bring in some */}
      <div className="footer_list">
        <ul className={Season()}>
          <li className="christmas">
            <ul>
              <li key="christmas" className="footer_list--no_link">
                <strong>Christmas Light Installation</strong>
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
                {/* // TODO: tidy up the long titles */}
                <Link to="/wedding"><strong>Wedding Light Installation</strong></Link>
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
                <strong>Additional Lighting Services</strong>
              </li>
              {/* <li key="patio"><Link to="/patio">Patio Lighting <span className='sr-only'>Lighting Installation</span></Link></li> */}
              {/* // ? why have i removed the sr */}
              <li key="events"><Link to="/social-events">Social Events {/* <span className='sr-only'>Lighting Installation</span> */}</Link></li>
              <li key="commercial-events">
                <Link to="/commercial-events">Commercial Events {/* <span className='sr-only'>Lighting Installation</span> */}</Link>
              </li>

              {/* // TODO: this shouldnt be here its just as the list is currently shorter and needs to be redesigned */}
              <li key="safety"><Link to="/safety">Safety Practices</Link></li>
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
                <Link to="/contact?=footer"><strong>Contact</strong></Link>
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
      {featuredSocials.length > 0 && (
        <Socials services={featuredSocials} />
      )}

      {/* // * this doesnt show on local due to the API */}
      {starRating &&
        <p className="albatross text-align-center margin-block-start-denali">
          <a href={`${google?.site.link}${google?.username}`}
            target="_blank" rel="noopener noreferrer"
          >
            Google Star Rating: {starRating} from {reviewCount} reviews
          </a>
        </p>
      }

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
            {/* // TODO: I think i have a query for this */}
            Formerly known as Sierra Christmas Lights
          </a>
        </h5>
      </div>

    </footer>
  )
}

export default Footer
