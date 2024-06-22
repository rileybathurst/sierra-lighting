// TODO: move the link to strapi
// TODO: do some work on the real colors

import React from "react";

import FacebookIcon from "../images/facebook-icon";
import InstagramIcon from "../images/instagram-icon";
import PinterestIcon from "../images/pinterest-icon";
import YelpIcon from "../images/yelp-icon";
import NextdoorIcon from "../images/nextdoor-icon";
import TikTokIcon from "../images/tiktok-icon";
import LinkedinIcon from "../images/linkedin-icon";
import GoogleIcon from "../images/google-icon";

function SocialIcons() {

  const socialIcons = [
    {
      name: "yelp",
      url: "https://www.yelp.com/biz/sierra-lighting-calpine/",
      icon: <YelpIcon />
    },
    {
      name: "facebook",
      url: "https://www.facebook.com/sierralighting/",
      icon: <FacebookIcon />
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/sierralighting/",
      icon: <InstagramIcon />
    },
    {
      name: "nextdoor",
      url: "https://nextdoor.com/pages/sierra-lighting-truckee-ca/recommend/",
      icon: <NextdoorIcon />
    },
    {
      name: "pinterest",
      url: "https://www.pinterest.com/sierralighting/",
      icon: <PinterestIcon />
    },
    {
      name: "tiktok",
      url: "https://www.tiktok.com/@sierralighting",
      icon: <TikTokIcon />
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/company/sierralighting/",
      icon: <LinkedinIcon />
    },
    {
      name: "google",
      url: "https://www.google.com/search?q=Sierra+Lighting&stick=H4sIAAAAAAAAAONgU1IxqLA0Tk5JNTYwNjczNDUyTrEyqDC0SE5LTjUzTDFJtjA1MDdfxMofnJlaVJSo4JOZnlGSmZcOAJFLoIE6AAAA&hl=en&mat=CSa70iERji14ElYBT5f1Biig-LefnPIA2s1eNG0ZzZGdQt2meRxFSV85z3ttHEqYoQNfFZirKPqeXst7BPk8hnT7ZF2bQDTki4jjxtEXP4fp0wRhriCRZqnz0UUHceUEYA&authuser=0#mpd=~ftux/tutorial",
      icon: <GoogleIcon />
    }
  ];

  return (
    <ul id="footer-social" className="footer-social">
      {socialIcons.map((socialIcon) => (
        <li key={socialIcon.name}>
          <a
            href={socialIcon.url}
            title={`Sierra Lighting ${socialIcon.name}`}
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
