import React from "react";
import { faker } from "@faker-js/faker";

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


      <p>
        link subtle&nbsp;
        <a href={faker.internet.url()} className="link--subtle">
          active
        </a>
        &nbsp;removes the color<br />
        used for a top of the footer makes sense there
      </p>
    </>
  );
};
