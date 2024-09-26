import React from "react";
import PropTypes from "prop-types";

import { faker } from "@faker-js/faker";

export const Attribute = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-Attribute--primary"
    : "storybook-Attribute--secondary";
  return (
    <div className="attributes">
      {Array.from({ length: faker.number.int({ min: 0, max: 4 }) }).map((_) => (
        <section key={faker.number.int()} className="attribute">
          <p className="crest">{faker.music.genre()}</p>
          {Array.from({ length: faker.number.int({ min: 1, max: 2 }) }).map(
            (_) => (
              <h3 key={faker.number.int()} className="range">
                <a href={faker.music.artist()} className="link--subtle">
                  {faker.music.artist()}
                </a>
              </h3>
            )
          )}
        </section>
      ))}
    </div>
  );
};

Attribute.propTypes = {
  primary: PropTypes.bool,
};

Attribute.defaultProps = {
  primary: false,
};
