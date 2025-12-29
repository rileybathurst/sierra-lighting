import React from "react";
import { faker } from "@faker-js/faker";

import Star from "../images/star";

export const Testimonial = () => {
  return (
    <li className="testimonial">
      <figure>
        <blockquote>

          {/* stars */}
          {faker.datatype.boolean() ? (
            <ul className="testimonial--stars">
              <li>
                {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map((_) => (
                  <Star key={faker.animal.type()} />
                ))}
              </li>
            </ul>
          ) : (
            
            <h3>
              {/* project name */}
              <a href={faker.internet.url()}>project name</a>
            </h3>
          )}
          <p className="testimonial--quote_mark range">&quot;</p>
          
          {/* testimonial */}
          <p>{faker.lorem.paragraph()}</p>

          {/* name */}
          <figcaption>
            <h4>
              {faker.datatype.boolean()
                ? faker.person.fullName()
                : faker.person.firstName()}
            </h4>

            {/* company and position */}
            {faker.datatype.boolean() ? (
            <p>
              <strong>{faker.company.name()}</strong>
              {faker.datatype.boolean() ? ` - ${faker.person.jobTitle()}` : null}
            </p>
            ) : null}

          </figcaption>
        </blockquote>
        {/* // TODO: project */}
        {/* // TODO: services or is that in the org */}
      </figure>
    </li>
  );
};

