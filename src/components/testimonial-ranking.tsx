
import { Props } from '@storybook/addon-docs';
import React, { useState, useRef, useEffect } from 'react';
import Star from "../images/star";

function TestimonialRanking(props) {
  const count = [];
  const stars = props.stars;

  if (stars > 1) {

    let i = 0;
    do {
      i += 1;
      // console.log(i);
      // console.log(stars);
      count.push(i);
    } while (i < stars);

    return (
      <ul className="testimonial--stars">
        {count.map(x =>
          <li key={x}>
            {/* {x} */}
            <Star />
          </li>)}
        {/* {props.stars} */}
      </ul>
    );
  } else {
    return null;
  }
}

export default TestimonialRanking
