// this is the Name.tsx file

import { faker } from "@faker-js/faker";
import React, { useState } from "react";

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

export const Buttons = () => {

  const [stars, setStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);
  const positive = stars === 5;
  const negative = stars > 0 && !positive;

  return (
    <main>
      <h2>Buttons</h2>
      <button type="button">Load More</button>
      <button type="button" className="button-hover-storybook">
        Hovered state
      </button>
      <button type="button" className="button-focus-storybook">
        Focused state
      </button>
      <hr />
      <h3>Link Buttons</h3>
      <a href={faker.internet.url()} className="button">
        Link Button
      </a>
      <a href={faker.internet.url()} className="button button-hover-storybook">
        Link Hovered Button
      </a>
      <a href={faker.internet.url()} className="button button-focus-storybook">
        Link Focused Button
      </a>
      <hr />
      <h3>Disabled Buttons</h3>
      <button type="button" disabled>
        Disabled Button
      </button>
      <a
        href={faker.internet.url()}
        className="button button-disabled"
        aria-disabled="true"
      >
        Disabled Link Button
      </a>

      <hr />
      <h3>Feedback Stars</h3>

      <div className="feedback-stars">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            title={`${rating} Star Button`}
            className={`feedback-star ${rating <= stars ? "active" : ""} ${rating <= hoveredStars ? "hover" : ""}`}
            onClick={() => setStars(rating)}
            onMouseOver={() => setHoveredStars(rating)}
            onFocus={() => setHoveredStars(rating)}
          >
            <Star />
          </button>
        ))}
      </div>
    </main>
  );
};
