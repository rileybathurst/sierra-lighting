// this is the Name.tsx file
import React from 'react';
import { faker } from "@faker-js/faker";
import { Logo } from './Logo';
import { Poster } from './poster';
import { Start } from './start';

type mastheadTypes = {
  nestedAlbatross?: boolean;
}
export const Masthead = (nestedAlbatross: mastheadTypes) => {

  return (
    <div className={nestedAlbatross && 'albatross'}>
      <div
        className={`masthead ${faker.datatype.boolean() ? "wedding" : "xmas"}`}
      >
        <div className="large-visibility logo">
          <Logo />
        </div>

        <h2>
          {faker.company
            .catchPhrase()
            .split(" ")
            .map((word) => (
              <React.Fragment key={word}>
                {word}
                <br className="medium-up" />
              </React.Fragment>
            ))}
        </h2>

        <div className="images">
          <Poster />
        </div>

        <section className="text">
          <div className="background">{/* stay gold */}</div>
          <div className="react-markdown">{faker.lorem.paragraphs(2)}</div>
          <Start />
        </section>
      </div>
    </div>
  );
};