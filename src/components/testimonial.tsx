import { Link } from "gatsby";
import * as React from "react";
import Star from "../images/star";

import type TestimonialTypes from "../types/testimonial-types";

function Testimonial({
  customer,
  position,
  review,
  vendor,
  stars,
  project,
}: TestimonialTypes) {
  return (
    <li className="testimonial">
      <figure>
        <blockquote>
          {stars && (
            <div className="testimonial--stars">
              {Array.from(
                { length: stars },
                (_, starNumber) => starNumber + 1,
              ).map((starNumber) => (
                <Star key={`star-${starNumber}`} />
              ))}
            </div>
          )}

          {project && (
            <h3 className="kilimanjaro">
              <Link to={`/project/${project.slug}`}>{project.title}</Link>
            </h3>
          )}

          <p className="font-quote">&ldquo;</p>
          <p>{review}</p>

          <figcaption>
            <h4>
              {customer} {position ? <span>- {position}</span> : null}
            </h4>

            {vendor ? (
              <h5>
                <Link
                  to={`/vendor${vendor?.collaborator ? `/${vendor.collaborator.slug}` : ""}/${vendor.slug}`}
                >
                  {vendor.name}
                </Link>
              </h5>
            ) : null}
          </figcaption>
        </blockquote>
      </figure>
    </li>
  );
}

export default Testimonial;
