import React from "react";
import PropTypes from "prop-types";

import "./story.css";

export const Honey = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-Honey--primary"
    : "storybook-Honey--secondary";
  return (
    <>
      <p>--honey hue: 35;</p>

      {/* // TODO this can be super optimized which I am not doing now */}

      {/* // TODO needs contrast ratios */}

      <p>
        This is based on&nbsp;
        <a href="https://twitter.com/Mantia/status/570687359328645120?s=20&t=SDi-mrZULTZkWiXZELXXsA">
          Louie Colors
        </a>
      </p>
      <ul>
        <li>--louie-a: 12%; // 1</li>
        <li>--louie-b: 25%; // 2</li>
        <li>--louie-c: 37%; // 3</li>
        <li>--louie-d: 50%; // 4</li>
        <li>--louie-e: 63%; // 5</li>
        <li>--louie-f: 75%; // 6</li>
        <li>--louie-g: 87%; // 7</li>
        <li>--louie-h: 100%; // 8</li>
      </ul>

      <p>
        In general this means
        <br />
        a - h is more saturated as it goes along
        <br />
        1 - 8 is lighter as it goes along
        <br />
        There are problems. 8 can not be used as lightness as this is 100% which
        is always white
        <br />I am currently using 97.5 for this instead of 100 but this could
        use tweaking
      </p>

      <section className="colorblock__section">
        A Series
        <div className="colorblock__row">
          <article>
            <div
              className="colorblock"
              type="Honey"
              {...props}
              style={{ backgroundColor: `hsl(var(--honey), 12%, 50%))` }}
            ></div>
            {label}-a-4
          </article>

          <article>
            <div
              className="colorblock"
              type="Honey"
              {...props}
              style={{ backgroundColor: `hsl(var(--honey), 12%, 97.5%)` }}
            ></div>
            {label}-a-8
          </article>
        </div>
      </section>

      <section className="colorblock__section">
        F Series
        <div
          className="colorblock"
          type="Honey"
          {...props}
          style={{ backgroundColor: `hsl(var(--honey), 75%, 87%)` }}
        ></div>
        {label}-f-7
      </section>

      <section className="colorblock__section">
        H Series
        <div className="colorblock__row">
          <article>
            <div
              className="colorblock"
              type="Honey"
              {...props}
              style={{ backgroundColor: `var(--honey-h-1)` }}
            ></div>
            {label}-h-1
          </article>

          <article>
            <div
              className="colorblock"
              type="Honey"
              {...props}
              style={{ backgroundColor: `hsl(var(--honey), 100%, 25%)` }}
            ></div>
            {label}-h-2
          </article>

          <article>
            <div
              className="colorblock"
              type="Honey"
              {...props}
              style={{ backgroundColor: `hsl(var(--honey), 100%, 50%)` }}
            ></div>
            {label}-h-4
          </article>

          <article>
            <div
              className="colorblock"
              type="Honey"
              {...props}
              style={{ backgroundColor: `hsl(var(--honey), 100%, 97.5%)` }}
            ></div>
            {label}-h-8
          </article>
        </div>
      </section>
    </>
  );
};

Honey.propTypes = {
  primary: PropTypes.bool,
};

Honey.defaultProps = {
  primary: false,
};
