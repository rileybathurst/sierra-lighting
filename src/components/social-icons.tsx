// ! these are all broken
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
    if (!yelpFormatted) {
      yelpFormatted = yelp;
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
    if (!facebookFormatted) {
      facebookFormatted = facebook;
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
    if (!instagramFormatted) {
      instagramFormatted = instagram;
    }
  }

  let nextdoorFormatted = '';
  if (nextdoor) {
    if (nextdoor.includes('nextdoor.com/pages/')) {
      nextdoorFormatted = nextdoor.split('nextdoor.com/pages/')[1];
    }
    if (nextdoor.includes('/')) {
      nextdoorFormatted = nextdoorFormatted.split('/')[0];
    }
    if (!nextdoorFormatted) {
      nextdoorFormatted = nextdoor;
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
    if (!pinterestFormatted) {
      pinterestFormatted = pinterest;
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
    if (!tiktokFormatted) {
      tiktokFormatted = tiktok;
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
    if (!linkedinFormatted) {
      linkedinFormatted = linkedin;
    }
  }

  const socialIcons = [

    yelp ? (
      {
        name: "yelp",
        url: `https://www.yelp.com/biz/${yelpFormatted}`,
        icon: <YelpIcon businessName={businessName} />
      }
    ) : null
    ,
    facebook ? (
      {
        name: "facebook",
        url: `https://www.facebook.com/${facebookFormatted}`,
        icon: <FacebookIcon businessName={businessName} />
      }
    ) : null
    ,
    instagram ? (
      {
        name: "instagram",
        url: `https://www.instagram.com/${instagramFormatted}`,
        icon: <InstagramIcon businessName={businessName} />
      }
    ) : null
    ,
    nextdoor ? (
      {
        name: "nextdoor",
        url: `https://nextdoor.com/pages/${nextdoorFormatted}/recommend/`,
        icon: <NextdoorIcon businessName={businessName} />
      }
    ) : null
    ,
    pinterest ? (
      {
        name: "pinterest",
        url: `https://www.pinterest.com/${pinterestFormatted}`,
        icon: <PinterestIcon businessName={businessName} />
      }
    ) : null
    ,
    tiktok ? (
      {
        name: "tiktok",
        url: `https://www.tiktok.com/@${tiktokFormatted}`,
        icon: <TikTokIcon businessName={businessName} />
      }
    ) : null
    ,
    linkedin ? (
      {
        name: "linkedin",
        url: `https://www.linkedin.com/company/${linkedinFormatted}`,
        icon: <LinkedinIcon businessName={businessName} />
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

  // console.log(socialIcons.map((icon) => icon.name));
  // console.log(businessName)

  return (
    <ul id="footer-social" className="footer-social">
      {socialIcons.map((socialIcon: SocialTypes) => (
        <li key={socialIcon.name}>
          <a
            href={socialIcon.url}
            title={`${businessName} ${socialIcon.name.charAt(0).toUpperCase() + socialIcon.name.slice(1)}`}
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
