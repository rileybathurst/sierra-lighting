
import React from 'react';
import Star from "../images/star";

function TestimonialRanking(props) {
  const count = [];
  const stars = props.stars;

  if (stars > 1) {
    let i = 0;
    do {
      i += 1;
      count.push(i);
    } while (i < stars);

    return (
      <ul className="testimonial--stars">
        {count.map(x =>
          <li key={x}>
            {/* // TODO: move sr-only a11y work here */}
            <Star />
          </li>)}
      </ul>
    );
  }
  return null;
}

export default TestimonialRanking
