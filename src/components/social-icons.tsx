// TODO: do some work on the real colors
// TODO: if a profile string or the full url

import React from "react";

import FacebookIcon from "../images/facebook-icon";
import InstagramIcon from "../images/instagram-icon";
import PinterestIcon from "../images/pinterest-icon";
import YelpIcon from "../images/yelp-icon";
import NextdoorIcon from "../images/nextdoor-icon";
import TikTokIcon from "../images/tiktok-icon";
import LinkedinIcon from "../images/linkedin-icon";
import GoogleIcon from "../images/google-icon";

type SocialTypes = {
  name: string;
  url: string;
  icon: JSX.Element;
}

type SocialIconsTypes = {
  businessName: string;
  yelp?: string;
  facebook?: string;
  instagram?: string;
  nextdoor?: string;
  pinterest?: string;
  tiktok?: string;
  linkedin?: string;
  google?: string;
}
function SocialIcons({ businessName, yelp, facebook, instagram, nextdoor, pinterest, tiktok, linkedin, google }: SocialIconsTypes) {

  let yelpFormatted = '';
  if (yelp) {
    if (yelp.includes('yelp.com/biz/')) {
      yelpFormatted = yelp.split('yelp.com/biz/')[1];
    }
    if (yelp.includes('/')) {
      yelpFormatted = yelpFormatted.split('/')[0];
    }
  }

  let facebookFormatted = '';
  if (facebook) {
    if (facebook.includes('facebook.com/')) {
      facebookFormatted = facebook.split('facebook.com/')[1];
    }
    if (facebook.includes('/')) {
      facebookFormatted = facebookFormatted.split('/')[0];
    }
  }

  let instagramFormatted = '';
  if (instagram) {
    if (instagram.includes('instagram.com/')) {
      // instagramFormatted = instagramFormatted.replace('instagram.com/', '');
      instagramFormatted = instagram.split('instagram.com/')[1];
    }
    if (instagram.includes('/')) {
      instagramFormatted = instagramFormatted.split('/')[0];
    }
  }
  // console.log(instagramFormatted)

  let nextdoorFormatted = '';
  if (nextdoor) {
    if (nextdoor.includes('nextdoor.com/pages/')) {
      nextdoorFormatted = nextdoor.split('nextdoor.com/pages/')[1];
    }
    if (nextdoor.includes('/')) {
      nextdoorFormatted = nextdoorFormatted.split('/')[0];
    }
  }

  let pinterestFormatted = '';
  if (pinterest) {
    if (pinterest.includes('pinterest.com/')) {
      pinterestFormatted = pinterest.split('pinterest.com/')[1];
    }
    if (pinterest.includes('/')) {
      pinterestFormatted = pinterestFormatted.split('/')[0];
    }
  }

  let tiktokFormatted = '';
  if (tiktok) {
    if (tiktok.includes('tiktok.com/@')) {
      tiktokFormatted = tiktok.split('tiktok.com/@')[1];
    }
    if (tiktok.includes('/')) {
      tiktokFormatted = tiktokFormatted.split('/')[0];
    }
  }

  let linkedinFormatted = '';
  if (linkedin) {
    if (linkedin.includes('linkedin.com/company/')) {
      linkedinFormatted = linkedin.split('linkedin.com/company/')[1];
    }
    if (linkedin.includes('/')) {
      linkedinFormatted = linkedinFormatted.split('/')[0];
    }
  }

  const socialIcons = [

    yelp ? (
      {
        name: "yelp",
        url: `https://www.yelp.com/biz/${yelpFormatted}/`,
        icon: <YelpIcon />
      }
    ) : null
    ,
    facebook ? (
      {
        name: "facebook",
        url: `https://www.facebook.com/${facebookFormatted}/`,
        icon: <FacebookIcon />
      }
    ) : null
    ,
    instagram ? (
      {
        name: "instagram",
        url: `https://www.instagram.com/${instagramFormatted}/`,
        icon: <InstagramIcon />
      }
    ) : null
    ,
    nextdoor ? (
      {
        name: "nextdoor",
        url: `https://nextdoor.com/pages/${nextdoorFormatted}/recommend/`,
        icon: <NextdoorIcon />
      }
    ) : null
    ,
    pinterest ? (
      {
        name: "pinterest",
        url: `https://www.pinterest.com/${pinterestFormatted}/`,
        icon: <PinterestIcon />
      }
    ) : null
    ,
    tiktok ? (
      {
        name: "tiktok",
        url: `https://www.tiktok.com/@${tiktokFormatted}/`,
        icon: <TikTokIcon />
      }
    ) : null
    ,
    linkedin ? (
      {
        name: "linkedin",
        url: `https://www.linkedin.com/company/${linkedinFormatted}/`,
        icon: <LinkedinIcon />
      }
    ) : null
    ,
    google ? (
      {
        name: "google",
        url: google,
        icon: <GoogleIcon />
      }
    ) : null
  ].filter(Boolean) as SocialTypes[];

  return (
    <ul id="footer-social" className="footer-social">
      {socialIcons.map((socialIcon: SocialTypes) => (
        <li key={socialIcon.name}>
          <a
            href={socialIcon.url}
            title={`${businessName} ${socialIcon.name}`}
            target="_blank"
            rel="noreferrer"
          >
            {socialIcon.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons;
