import * as React from "react"
import { Link } from "gatsby"
import Star from "../images/star";

import type TestimonialTypes from "../types/testimonial-types";

function Testimonial({ key, customer, position, review, vendor, stars, project }: TestimonialTypes) {
  return (
    <li
      // use key not ID https://gist.github.com/rileybathurst/7b853da163a9b8a7724262bbd583f510
      key={key}
      className='testimonial'
    >
      <figure>
        <blockquote>

          {stars && 
            <div className='testimonial--stars'>
              {Array.from({ length: stars }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          }

          {project &&
            <h3>
              <Link to={`/project/${project.slug}`}>{project.title}</Link>
            </h3>
          }

          <p className='testimonial--quote_mark range'>&ldquo;</p>
          <p>{review}</p>

          <figcaption>

            <h4>
              {customer} {position ? <span>- {position}</span> : null}
            </h4>

            {vendor ?
              <h5>
                <Link to={`/vendor/${vendor.slug}`}>{vendor.name}</Link>
              </h5>
              : null}

          </figcaption>
        </blockquote>
      </figure>
    </li>
  )
}

export default Testimonial