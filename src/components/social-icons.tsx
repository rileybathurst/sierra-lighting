// TODO: ? what is going on why are these different

import React from "react";

import FacebookIcon from "../images/facebook-icon";
import InstagramIcon from "../images/instagram-icon";
import PinterestIcon from "../images/pinterest-icon";

const SocialIcons = () => (
  <ul id="footer-social" className="footer-social">
    <li key="yelp">
      <a
        // TODO: move the link to strapi
        href="https://www.yelp.com/biz/sierra-lighting-calpine/"
        title="Sierra Lighting yelp"
      >
        <svg fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 53.69">
          <title>Sierra Lighting yelp</title>
          <path
            className="cls-1"
            d="M29.4,43.35l10.45,5.1a2.4,2.4,0,0,1-.47,4.48L28.1,55.74a2.39,2.39,0,0,1-3-2.06,20.48,20.48,0,0,1,.94-8.94A2.4,2.4,0,0,1,29.4,43.35Z"
            transform="translate(-25 -18.15)"
          />
          <path
            className="cls-1"
            d="M33.58,64.86l7.78-8.63a2.39,2.39,0,0,1,4.17,1.68l-.4,11.62a2.4,2.4,0,0,1-2.8,2.28A20.75,20.75,0,0,1,34,68.44,2.4,2.4,0,0,1,33.58,64.86Z"
            transform="translate(-25 -18.15)"
          />
          <path
            className="cls-1"
            d="M52,53.37,63.08,57a2.4,2.4,0,0,1,1.42,3.31A20.72,20.72,0,0,1,59,67.35a2.39,2.39,0,0,1-3.56-.57l-6.16-9.86A2.4,2.4,0,0,1,52,53.37Z"
            transform="translate(-25 -18.15)"
          />
          <path
            className="cls-1"
            d="M63.26,46.32l-11.17,3.2a2.4,2.4,0,0,1-2.65-3.64L56,36.24a2.38,2.38,0,0,1,3.56-.46,20.47,20.47,0,0,1,5.29,7.27A2.4,2.4,0,0,1,63.26,46.32Z"
            transform="translate(-25 -18.15)"
          />
          <path
            className="cls-1"
            d="M37.15,19.2a33,33,0,0,0-5.74,2.12,2.39,2.39,0,0,0-1,3.35L41.29,43.59a2.39,2.39,0,0,0,4.47-1.2V20.55a2.39,2.39,0,0,0-2.57-2.39A33.5,33.5,0,0,0,37.15,19.2Z"
            transform="translate(-25 -18.15)"
          />
        </svg>
      </a>
    </li>

    <li key="facebook">
      <a
        href="https://www.facebook.com/sierralighting/"
        title="Sierra Lighting facebook"
      >
        <FacebookIcon />
      </a>
    </li>

    <li key="instagram">
      <a
        href="https://www.instagram.com/sierralighting/"
        title="Sierra Lighting instagram"
      >
        <InstagramIcon />
      </a>
    </li>

    <li key="nextdoor">
      <a
        href="https://nextdoor.com/pages/sierra-lighting-truckee-ca/recommend/"
        title="Sierra Lighting nextdoor"
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 129.78 99.06"

        >
          <title>Sierra Lighting nextdoor</title>
          <g id="LG_GRN_LOGO" data-name="LG GRN LOGO">
            <path
              className="cls-1"
              d="M80.94,0c-17.82,0-33,8.18-41.52,20.7-.71,1-1.92,3.27-3.54,3.28-7.79.06-8.27-9.55-8.52-18.12A2.4,2.4,0,0,0,25,3.57L2.42,3.42A2.39,2.39,0,0,0,0,5.82v0C.52,26.79,4.37,41,29.74,46.67a3.05,3.05,0,0,1,2.36,3v47A2.37,2.37,0,0,0,34.47,99h22a2.39,2.39,0,0,0,2.39-2.39h0V48.12c0-10.79,7.65-23,22.16-23,13.81,0,22.15,12.24,22.15,23V96.67a2.39,2.39,0,0,0,2.39,2.39h21.91a2.39,2.39,0,0,0,2.38-2.39V44.52C129.79,19.58,108.51,0,80.94,0Z"
              transform="translate(-0.02)"
            />
          </g>
        </svg>
      </a>
    </li>

    <li key="pinterest">
      <a
        href="https://www.pinterest.com/sierralighting/"
        title="Sierra Lighting pinterest"
      >
        <PinterestIcon />
      </a>
    </li>

    <li key="tiktok">
      <a
        // TODO: move the link to strapi
        href="https://www.tiktok.com/@sierralighting"
        title="Sierra Lighting tiktok"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" fillRule="evenodd" clipRule="evenodd" >
          <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z" />
        </svg>
      </a>
    </li>

    <li key="linkedin">
      <a
        // TODO: move the link to strapi
        href="https://www.linkedin.com/company/sierralighting/"
        title="Sierra Lighting linkedin"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.6 127.9">
          <title>Sierra Lighting linkedin</title>
          <g>
            <path d="M63.6,0c18.2,0,36.3,0.1,54.5,0c4.8,0,8.8,3.4,9.4,7.7c0.1,0.5,0.1,0.9,0.1,1.4c0,36.6,0,73.1,0,109.7
		c0,4.9-3.9,8.9-8.7,9.1c-0.3,0-0.6,0-1,0c-36.3,0-72.5,0-108.8,0c-4.6,0-8-2.4-9.2-6.6c-0.3-0.9-0.4-1.8-0.4-2.7
		c0-36.5,0-72.9,0-109.4c0-5.2,3.9-9.2,9.1-9.3c4.4-0.1,8.8,0,13.2,0C35.8,0,49.7,0,63.6,0z M67.9,55.8c0-2.2-0.1-4.4,0-6.6
		c0-1.1-0.3-1.4-1.4-1.4c-5.2,0.1-10.4,0-15.6,0c-1.6,0-1.6,0-1.6,1.6c0,19.4,0,38.9,0,58.3c0,1.2,0.4,1.6,1.6,1.6
		c5.4-0.1,10.8,0,16.2,0c1.6,0,1.6,0,1.6-1.6c0-9.8,0-19.6,0-29.3c0-2,0.1-4.1,0.5-6.1c0.7-4.1,2.6-7.5,7.1-8.6
		c1.3-0.3,2.8-0.4,4.1-0.4c4.6,0.1,7.4,2.2,8.4,6.6c0.6,2.5,0.8,5,0.8,7.6c0.1,10.1,0.1,20.1,0,30.2c0,1.2,0.4,1.6,1.6,1.6
		c5.4-0.1,10.8,0,16.2,0c1.2,0,1.6-0.3,1.6-1.5c0-11.7,0.1-23.3-0.1-35c-0.1-3.9-0.6-7.8-1.5-11.6c-1.6-6.8-5.5-11.8-12.5-13.7
		c-2.4-0.7-4.9-0.8-7.4-1.1c-4.2-0.5-8.2,0.4-11.9,2.4C72.5,50.4,70,52.9,67.9,55.8z M18.4,78.5c0,9.8,0,19.6,0,29.3
		c0,1,0.2,1.4,1.3,1.4c5.6,0,11.2,0,16.8,0c1,0,1.3-0.4,1.3-1.3c0-19.6,0-39.2,0-58.8c0-1.1-0.4-1.3-1.4-1.3c-5.5,0-11,0.1-16.5,0
		c-1.2,0-1.5,0.4-1.4,1.5C18.4,59.1,18.4,68.8,18.4,78.5z M28,39.6c6.2,0,11.1-4.9,11.1-11c0-6.2-4.9-11.2-11.1-11.2
		c-6.2,0-11.1,4.9-11.1,11.2C16.9,34.7,21.8,39.6,28,39.6z"/>
          </g>
        </svg>
      </a>
    </li>

    <li key="google">
      <a
        href="https://www.google.com/search?q=Sierra+Lighting&stick=H4sIAAAAAAAAAONgU1IxqLA0Tk5JNTYwNjczNDUyTrEyqDC0SE5LTjUzTDFJtjA1MDdfxMofnJlaVJSo4JOZnlGSmZcOAJFLoIE6AAAA&hl=en&mat=CSa70iERji14ElYBT5f1Biig-LefnPIA2s1eNG0ZzZGdQt2meRxFSV85z3ttHEqYoQNfFZirKPqeXst7BPk8hnT7ZF2bQDTki4jjxtEXP4fp0wRhriCRZqnz0UUHceUEYA&authuser=0#mpd=~ftux/tutorial"
        title="Sierra Lighting google"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"  >
          <title>Sierra Lighting google</title>
          <g>
            <path d="M389.3,299c-2.5,0-4.6,0-6.7,0c-40.2,0-80.3,0-120.5,0c-6.9,0-7,0-7-6.8c0-27.5,0.1-55-0.1-82.5c0-5,1.5-6.6,6.6-6.6
		c73.8,0.1,147.7,0.1,221.5,0c4.2,0,6.4,1.2,7,5.6c7.5,51.4,4.4,101.9-15.9,150.2c-31.4,74.7-88.1,118.8-167.2,134
		c-54.5,10.5-107.8,5.4-158-19.2C69.5,434.9,22.4,371.1,9,283.5c-7.5-49.1,0.1-96.6,22.3-141C70.5,63.9,134.3,17.5,221,4.8
		c72.3-10.6,137.4,8,193.7,55.4c9.4,8,7.7,6.2,0.5,13.5c-20,20.1-40.1,40-60.2,60c-1.3,1.3-2.6,2.5-4.2,4c-2-1.7-3.8-3.1-5.5-4.6
		c-50-43.2-128.4-43.2-181.1,0.3c-30.5,25.2-49.3,57.3-54.6,96.5c-6.2,46.2,7.2,86.8,38.3,121.3c24.9,27.5,56.2,44.1,93.3,47.1
		c45.5,3.7,86.9-6.7,119.7-40.7c14.4-15,23.4-33.1,27.9-53.4C389.1,302.7,389.1,301.2,389.3,299z"/>
          </g>
        </svg>
      </a>
    </li>
  </ul>
);

export default SocialIcons;
