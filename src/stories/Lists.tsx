// TODO: look at safety page the vertical rythm is a mess
// ? where are all these used throw some aliases on there

import { faker } from "@faker-js/faker";
// this is the Name.jsx file
import React from "react";

export const Lists = () => {
  return (
    <main>
      <h3>Lists</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <hr />
      <h3>List Style None</h3>
      <ul className="list-style-none">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <hr />
      <h3>Inset List Style None</h3>
      <ul className="list-style-none">
        <li>Item 1</li>
        <li>
          Item 2
          <ul>
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
        </li>
        <li>Item 3</li>
      </ul>
      <hr />
      <h3>Words</h3>
      <ul>
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
          <li>{faker.lorem.words()}</li>
        ))}
      </ul>
      <hr />
      {/* // * permanent uses this so im thinking about this */}
      <h3>Paragraphs</h3>
      <p>Paragraph to show spacing{faker.lorem.paragraph()}</p>
      <ul>
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
          <li>
            {faker.lorem.paragraph()}
            {faker.datatype.boolean() && <ul>
              {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => (
                <li>{faker.lorem.paragraph()}</li>
              ))}
            </ul>}
          </li>
        ))}
      </ul>
      <hr />
      {/* // * this doesnt seem to get effected but it does from strapi */}
      {/*       <div className="react-markdown">
        <ul>
          {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
            <li>{faker.lorem.paragraph()}</li>
          ))}
        </ul>
      </div>
      <hr /> */}
      {/* // * fix residential template styling for process */}
      {faker.lorem.paragraph()}
      <ol>
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
          <li>
            <span className="ol-title">{faker.music.artist()}</span>
            <p>{faker.lorem.paragraph()}</p>
          </li>
        ))}
      </ol>

    </main>
  );
};
