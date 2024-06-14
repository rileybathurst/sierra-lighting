// TODO: I dont think this is quite right

import React from "react";
import PropTypes from "prop-types";

var convert = require("color-convert");

import "./story.css";
import "./body.css";

function HSLBody() {
  var bd = document.body;
  let bdStyles = window.getComputedStyle(bd);
  let bdBack = bdStyles.getPropertyValue("background-color");
  // console.log(bdBack); // rgb(255, 253, 250)

  // create rgb variables
  const rLong = bdBack.split(",")[0];
  let r = rLong.replace("rgb(", "");

  const g = bdBack.split(",")[1];
  const bLong = bdBack.split(",")[2];
  const b = bLong.replace(")", "");

  /*   console.log(r);
  console.log(g);
  console.log(b); */

  /*   let test = convert.rgb.hsl(140, 200, 100);
  console.log(test); */

  let convertHSL = convert.rgb.hsl(r, g, b); // 213,36,5
  // console.log(convertHSL);
  // should be 215, 37, 5 but multiple conversions will get you this so its ok

  let h = convertHSL[0];
  let s = convertHSL[1];
  let l = convertHSL[2];

  let hsl = `hsl(${h}, ${s}%, ${l}%)`;

  return <>{hsl}</>;
}

export const Body = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-Body--primary"
    : "storybook-Body--secondary";
  return (
    <>
      {/* Im not happy with this yet<br /><br /> */}
      <section className="">
        {/* light__test */}
        body &#123;
        <br />
        <span>&nbsp;&nbsp;background: </span>
        <span>
          <HSLBody />
        </span>
        <br />
        &nbsp;&nbsp;color: hsl(215, 12%, 12%);
        <br />
        &nbsp;&nbsp;
        <span className="selection__test">selection: hsl(35, 100%, 50%);</span>
        <br />
        &nbsp;&nbsp;
        <a href="#" className="light__link">
          Link: hsl(35, 100%, 30%);
        </a>
        <br />
        &nbsp;&nbsp;
        <span className="hover__test">
          Link Hover: hsl(35, 100%, 50%); - this has 2.16:1 contrast to the
          background
        </span>
        <br />
        &#125;
      </section>
      <hr />
    </>
  );
};

Body.propTypes = {
  primary: PropTypes.bool,
};

Body.defaultProps = {
  primary: false,
};
