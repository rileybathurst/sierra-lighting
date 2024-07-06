import * as React from "react"
import { Link } from "gatsby"

interface TestimonialTypes {
  id: React.Key;
  customer: string;
  position?: string;
  review: string;
  vendor?: {
    name: string;
    slug: string;
  };
}
function Testimonial({ id, customer, position, review, vendor }: TestimonialTypes) {
  return (
    <li
      key={id}
      className='testimonial'
    >
      <figure>
        <blockquote>

          <p className='testimonial--quote_mark range'>&ldquo;</p>
          <p itemProp="reviewBody">{review}</p>

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