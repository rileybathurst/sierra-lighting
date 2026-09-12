import * as React from 'react';
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image";

import { profanity } from '@2toad/profanity';

import Logo from "../images/logo";
import { useIsWithinBusinessHours } from './business-hours';
import Season from './season';
import { Phone } from './phone';
import Socials from './socials';
import { days } from './days';

const Footer = ({ quote, location }: { quote?: boolean; location?: Location }) => {

  console.log(location);

  // const isWithinBusinessHours = useIsWithinBusinessHours();

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

        // console.log(`Google Reviews: ${reviewCount} reviews, ${starRating} stars`);

        // Update your website's HTML elements
        // document.getElementById('google-count').innerText = `${reviewCount} reviews`;
        // document.getElementById('google-stars').innerText = `${starRating} / 5 Stars`;
      } catch (error) {
        console.error('Error fetching Google Places data:', error);
      }
    }

    fetchGoogleReviews();
  }, []);

  /*------------------------------------*/

  let showQuote = true;
  if (quote === false) {
    showQuote = false;
  }

  /*------------------------------------*/

  const isWithinBusinessHours = useIsWithinBusinessHours();

  /*------------------------------------*/

  const [canSend, setCanSend] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [emailProfanity, setEmailProfanity] = React.useState(false);
  const [messageProfanity, setMessageProfanity] = React.useState(false);
  const [referralProfanity, setReferralProfanity] = React.useState(false);
  const [addressLink, setAddressLink] = React.useState(false);

  function profanityCheck(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const value = e.target.value;
    const hasProfanity = profanity.exists(value);
    const name = e.target.name;

    if (name === "message") {
      setMessageProfanity(hasProfanity);
    } else if (name === "referral") {
      setReferralProfanity(hasProfanity);
    } else if (name === "email") {
      setEmailProfanity(hasProfanity);
    }

    setCanSend(!hasProfanity && !emailProfanity && !messageProfanity && !referralProfanity);

    return null;
  }

  function subject(e: React.ChangeEvent<HTMLInputElement>) {
    profanityCheck(e);

    setEmail(e.target.value);
    // console.log(e.target.value);

    return null;
  }

  function addressCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.includes("http") || value.includes("www")) {
      setCanSend(false);
      setAddressLink(true);
      return null;
    }

    setAddressLink(false);
    setCanSend(true);
    return null;
  }

  // * you can get around these checks without loading JS
  // theres an option to get more complex with netlify functions or captcha or something
  // but then were getting more and more complex
  // ? I could checck for JS? seems wierd a legit client wouldnt be using it

  /*------------------------------------*/

  const { allStrapiTeam, strapiAbout, strapiForm } = useStaticQuery(graphql`
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
        alternateName
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
        addressLink
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

  type TeamType = {
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
  };

  /*------------------------------------*/

  const featuredSocials = (strapiAbout?.social ?? [])
    .filter((social: { featured?: boolean }) => social.featured)
    .sort((a: { order?: number }, b: { order?: number }) => (a.order ?? 0) - (b.order ?? 0));

  const google = featuredSocials.find(
    (social: { site?: { service?: string } }) => social.site?.service === "google",
  );

  /*------------------------------------*/

  const footerLists = [
    {
      title: "christmas",
      body: [
        {
          text: "Christmas Light Installation",
          link: false,
        },
        {
          text: "Residential",
          link: "/residential",
        },
        {
          text: "Commercial",
          link: "/commercial",
        },
        {
          text: "Christmas Lights",
          link: "/christmas-lights",
        }
      ]
    },
    {
      title: "wedding",
      body: [
        {
          text: "Wedding Light Installation",
          link: "/wedding",
        },
        {
          text: "Wedding Lights",
          link: "/wedding/lights",
        },
        {
          text: "Venues",
          link: "/venue",
        },
        {
          text: "Vendors",
          link: "/vendor",
        }
      ]
    },
    {
      title: "additional-services",
      body: [
        {
          text: "Additional Lighting Services",
          link: false,
        },
        {
          text: "Social Events",
          link: "/social-events",
        },
        {
          text: "Commercial Events",
          link: "/commercial-events",
        },
        // TODO: this shouldnt be here its just as the list is currently shorter and needs to be redesigned
        {
          text: "Safety Practices",
          link: "/safety",
        }
      ]
    },
    {
      title: "work",
      body: [
        {
          text: "Our Work",
          link: false,
        },
        {
          text: "Projects",
          link: "/projects",
        },
        {
          text: "Process",
          link: "/process",
        },
        {
          text: "Service Areas",
          link: "/areas",
        }
      ]
    },
    {
      title: "contacts",
      body: [
        {
          text: "Contact Us",
          link: "/contact?=footer",
        },
        {
          text: "FAQs",
          link: "/faqs",
        },
        {
          text: "Testimonials",
          link: "/testimonials",
        },
        {
          text: "Affiliations",
          link: "/affiliations"
        }
      ]
    }
  ];

  return (
    <footer>
      <hr className="condor" />

      {showQuote && (
        <>
          <h3 className="stork">Request a Free Quote</h3>

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
              value={`${!isWithinBusinessHours ? "Outside Business Hours: " : ""}Contact Form from sierra.lighting ${email}`} />

            {!isWithinBusinessHours && (
              <input className="sr-only" type="hidden" name="hours" value={`${strapiForm.outsideHours}`} />
            )}

            <label>Name
              <input
                type="text"
                name="name"
                autoComplete="name"
              />
            </label>
            <label>Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                onChange={subject}
                className={emailProfanity ? "error" : ""}
              />
            </label>
            <label>Phone
              <input type="tel" name="tel" />
            </label>
            <div className='address-together'>
              <label className='address'>Address
                <input type="text" name="address" onChange={addressCheck} className={addressLink ? "error" : ""} />
              </label>

              <label className='zip'>City or Zip
                <input type="text" name="zip" />
              </label>
            </div>

            {addressLink && (
              <p className="error">
                {strapiForm.addressLink}
              </p>
            )}

            <label>How can we help?
              <textarea name="message" onChange={profanityCheck} className={messageProfanity ? "error" : ""} />
            </label>
            <label>How did you hear about us?
              <input type="text" name="referral" onChange={profanityCheck} className={referralProfanity ? "error" : ""} />
            </label>

            <label className='checkbox'>
              {strapiForm.minimum}
              <input type="checkbox" name="minimum" />
            </label>
            <p className="sr-only">
              <label>
                Don&#39;t fill this out if you&#39;re human:
                <input name="bot-field" />
              </label>
            </p>

            {(emailProfanity || messageProfanity || referralProfanity) && (
              <p className="error">
                {strapiForm.profanity}
              </p>
            )}

            <button
              type="submit"
              disabled={!canSend}
              className="button--left-align"
            >
              Send
            </button>
          </form>

          <section id="contact" className="stork">
            <hr />

            <h3 className="margin-block-end-vinson">Contact</h3>
            <div className="flex-column">
              <a href={`mailto:${strapiAbout.email}`}
                className="button button--left-align"
              >
                {strapiAbout.email}
              </a>
              <p>
                Call or Text:<br />
                <Phone phone={strapiAbout.telephone} leftAlign />
                <br />

                {/* // * elements of typograhic style 3.2 numerals, capitals & small caps */}
                <small>
                  {strapiForm.monitoring}&nbsp;
                  <span className="white-space-no-wrap">{Hours(strapiForm.opening)}&thinsp;and&thinsp;{Hours(strapiForm.closing)}&thinsp;<span className="all-small-caps">PST</span></span>,
                  &nbsp;<span className="white-space-no-wrap">{days(strapiForm.days)}</span>.&nbsp;
                </small>
              </p>
            </div>
            <hr />
          </section>
        </>
      )}

      <div id="team" className="stork">
        <h3 className="margin-block-end-vinson">
          <Link to="/team" className="link--subtle">Meet Our Team</Link>
        </h3>

        <h4>or&nbsp;
          <Link to="/work" className="link--subtle">Work with us</Link>
        </h4>

        <div className="team-heads spin">
          {allStrapiTeam.nodes.map((team: TeamType) => (
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

      <hr className="albatross" />

      <div className="footer_list">
        <ul className={Season()}>
          {footerLists.map((list) => (
            <li key={list.title}>
              <ul>
                {list.body.map((item) => (
                  <li key={item.text}>
                    {typeof item.link === "string" ? (
                      <Link to={item.link}>
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <hr className="albatross" />
      {featuredSocials.length > 0 && (
        <Socials services={featuredSocials} />
      )}

      {/* // TODO: I can design this better */}
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

      <hr className="stork" />

      <div className="footer-copyright">
        <h4 className="sr-only footer-copyright__mind-the-gap">
          <Link to="/">
            {strapiAbout.businessName}
          </Link>
        </h4>

        {location?.pathname === withPrefix("/") ? (
          <Logo />
        ) : (
          <Link to="/"
            // * ensures the link takes the full width of its container
            className="width-100"
          >
            <Logo />
          </Link>
        )}
        <p>&copy; {new Date().getFullYear()}</p>
        <h5>
          <a
            href="https://www.sierrachristmaslights.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link--subtle"
          >
            Formerly known as {strapiAbout.alternateName}
          </a>
        </h5>
        <button
          type="button"
          className="align-self-center"
          onClick={() => window.dispatchEvent(new Event("sierra:show-cookie-preferences"))}
        >
          Cookie Settings
        </button>
      </div>

    </footer>
  )
}

export default Footer
