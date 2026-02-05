import React from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";

import "./story.css";

export const Links = () => {
  return (
    <>
      <p>
        lorem <a href={faker.internet.url()}>ipsum</a> dolor sit amet
      </p>
      <p>
        lorem&nbsp;
        <a href={faker.internet.url()} className="a-hover-storybook">
          hover
        </a>
        &nbsp;dolor sit amet
      </p>
      <p>
        lorem&nbsp;
        <a href={faker.internet.url()} className="a-focus-storybook">
          focus
        </a>
        &nbsp;dolor sit amet
      </p>
    </>
  );
};
