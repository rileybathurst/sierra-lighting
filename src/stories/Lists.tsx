// TODO: look at safety page the vertical rythm is a mess
// ? where are all these used throw some aliases on there

// this is the Name.jsx file
import React from "react";
import { faker } from "@faker-js/faker";

export const Lists = () => {
  return (
    <div className="">
      Lists
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <hr className="" />
      List Style None
      <ul className="list-style-none">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <hr className="" />
      Inset List Style None
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
    </div>
  );
};
