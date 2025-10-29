// TODO: loop this properly

import React from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";

import Star from "../images/star";

interface TestimonialProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: string;
  label?: string;
}

export const Testimonial = ({
  primary,
  backgroundColor,
  size,
  label,
}: TestimonialProps = {}) => {
  return (
    <li className="testimonial">
      <figure>
        <blockquote>
          {/* // TODO: this isnt really an either or */}
          {faker.datatype.boolean() ? (
            <ul className="testimonial--stars">
              <li>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </li>
            </ul>
          ) : (
            <h3>
              <a href={faker.internet.url()}>project name</a>
            </h3>
          )}
          <p className="testimonial--quote_mark range">&quot;</p>
          <p>{faker.lorem.paragraph()}</p>
          <figcaption>
            <h4>
              {faker.datatype.boolean()
                ? faker.person.fullName()
                : faker.person.firstName()}
            </h4>
            <p>
              <strong>{faker.company.name()}</strong>
              {faker.datatype.boolean() ? "- Position" : null}
            </p>
          </figcaption>
        </blockquote>
        {/* // TODO: project */}
        {/* // TODO: services or is that in the org */}
      </figure>
    </li>
  );
};

