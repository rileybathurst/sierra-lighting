// this is the Name.jsx file
import React, { useState } from "react";
import PropTypes from "prop-types";

/* type FigureImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

interface FigureProps {
  image?: FigureImage;
  caption?: string;
  focused?: boolean;
} */

export const TeamHeads = ({
  primary,
  image,
  caption = `Photo by <a href="https://unsplash.com/@sorasagano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sora Sagano</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
  focused = false,
}) => {
  const mode = primary
    ? "storybook-TeamHeads--primary"
    : "storybook-TeamHeads--secondary";
  return (
    <>
      <div id="team" className="team stork">
        <h3 className="crest">Who We Are</h3>
        <h4 className="range">
          <a href="/team" className="link--subtle">
            Meet Our Team
          </a>
        </h4>

        <h4>
          or{" "}
          <a href="/work" className="link--subtle">
            Work with us
          </a>
        </h4>

        <div className="team-heads spin">
          <a href="/team/">
            {/* // TODO images are a pian so I havent done this yet */}
            {/* <img src={team.image} alt="adam" /> */}
            <p>adam</p>
          </a>
        </div>
      </div>
    </>
  );
};

TeamHeads.propTypes = {
  primary: PropTypes.bool,
};

TeamHeads.defaultProps = {
  primary: false,
};
