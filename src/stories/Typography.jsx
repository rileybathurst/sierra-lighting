import React from "react";
import PropTypes from "prop-types";

import "./story.css";
// import './typography.css';

export const Typography = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-Typography--primary"
    : "storybook-Typography--secondary";
  return (
    <section className="stork">
      <h1>h1 - everest</h1>
      <h2>h2 - aconcagua</h2>
      <h3>h3 - denali</h3>
      <h4>h4 - kilimanjaro</h4>
      <h5>h5 - elbrus</h5>
      <h6>h6 - vinson</h6>
      <p>p - vinson</p>
      <p>
        Yes, Yes, without the oops! So you two dig up, dig up dinosaurs? We
        gotta burn the rain forest, dump toxic waste, pollute the air, and rip
        up the OZONE! 'Cause maybe if we screw up this planet enough, they won't
        want it anymore! Hey, take a look at the earthlings. Goodbye!
      </p>
      <small>small - kosciuszko</small>
      <hr />

      {/* // TODO: */}
      <p className="font-sans">font-sans</p>
      <p className="font-serif">font-serif</p>
      <p className="font-quote">&ldquo;font-quote</p>

      {/* // TODO: document this */}
      <p>
        Mixta should only be used on major headings prefereably with an eyebrow
      </p>
    </section>
  );
};

Typography.propTypes = {
  primary: PropTypes.bool,
};

Typography.defaultProps = {
  primary: false,
};
