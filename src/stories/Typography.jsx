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
    <section className="measure">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>
        Yes, Yes, without the oops! So you two dig up, dig up dinosaurs? We
        gotta burn the rain forest, dump toxic waste, pollute the air, and rip
        up the OZONE! 'Cause maybe if we screw up this planet enough, they won't
        want it anymore! Hey, take a look at the earthlings. Goodbye!
      </p>
      <p>
        What do they got in there? King Kong? Must go faster. I was part of
        something special. God help us, we're in the hands of engineers. They're
        using our own satellites against us. And the clock is ticking. I gave it
        a cold? I gave it a virus. A computer virus.
      </p>
      <hr />
      <p>
        <span className="crest">Crest</span>
        <br />
        <span className="range">Range</span>
        <br />
      </p>

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
