// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

export const Lists = ({ primary }) => {
  const mode = primary
    ? "storybook-Lists--primary"
    : "storybook-Lists--secondary";
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
      <hr className="stork" />
      <div className="attributes">
        <section className="attribute">
          <h3 className="crest">Useage</h3>
          <ul>
            <li className="range ">
              <a href="#">Wedding</a>
            </li>
            <li className="range attribute">
              <a href="#">Social Events</a>
            </li>
          </ul>
        </section>
      </div>
      <hr className="stork" />
    </div>
  );
};

Lists.propTypes = {
  primary: PropTypes.bool,
};

Lists.defaultProps = {
  primary: false,
};
