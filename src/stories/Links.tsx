import React from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";

import "./story.css";
import "./links.css";

export const Links = () => {
  return (
    <>
      Links on regular background
      <hr />
      <p>
        lorem <a href={faker.internet.url()}>ipsum</a> dolor sit amet
      </p>
      <p>
        lorem&nbsp;
        <a href={faker.internet.url()} className="a-hover">
          hover
        </a>
        &nbsp;dolor sit amet
      </p>
      <p>
        lorem&nbsp;
        <a href={faker.internet.url()} className="a-focus">
          focus
        </a>
        &nbsp;dolor sit amet
      </p>
      <hr />
      <p>
        <a href={faker.internet.url()} className="hover-back">
          hover back
        </a>
      </p>
      <p>
        <a href={faker.internet.url()} className="hover-back hover-back__hover">
          hover back hover
        </a>
      </p>
      {/* // TODO this isnt right theres a change on hover */}
      <p>
        <a href={faker.internet.url()} className="bigboy">
          big boy
        </a>
      </p>
      {/* .hover-back, .bigboy a, .contact-info a */}
    </>
  );
};
