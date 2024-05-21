import React from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
// import { Buffer } from "buffer"; // ? maybe

export const Svgs = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-Svgs--primary"
    : "storybook-Svgs--secondary";

  // https://next.fakerjs.dev/api/image#datauri

  // console.log(faker.image.dataUri());
  // console.log(faker.image.dataUri({ type: "svg-base64" }));

  // can you just math some points?
  // faker.number.int({ min: 10, max: 100 })

  /*   <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,30
    A 20,20 0,0,1 50,30
    A 20,20 0,0,1 90,30
    Q 90,60 50,90
    Q 10,60 10,30 z" />
</svg> */

  /* <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">

  sets of 2 points at a time
  faker.number.int({ min: 10, max: 100, multipleOf: 2 }) // 4

  <polygon points="0,100 50,25 50,75 100,0" />
  </svg> */

  const twos = faker.number.int({ min: 2, max: 8, multipleOf: 2 });

  const points = Array.from({ length: twos }, () => {
    return `${faker.number.int({ min: 10, max: 100 })},${faker.number.int({
      min: 10,
      max: 100,
    })}`;
  }).join(" ");

  console.log(points);

  const dataURI =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iIzFBMzc2MSIgZD0iTTE3Ljc4IDI1LjY1Yy44OS0uODkgMi4zNS0uODkgMy4yNSAwTDQwIDQ0LjU5bDE4Ljk3LTE4Ljk1Yy44OS0uODkgMi4zNS0uODkgMy4yNCAwbDIuNDMgMi40M2MuODkuODkuODkgMi4zNSAwIDMuMjVMNDEuNjIgNTQuMzVjLS45Ljg5LTIuMzUuODktMy4yNSAwTDE1LjM1IDMxLjMzYy0uODktLjg5LS44OS0yLjM1IDAtMy4yNWwyLjQzLTIuNDN6Ii8+PC9zdmc+";
  // faker.image.dataUri();
  // faker.image.dataUri({ type: "svg-base64" }); // * breaks the storybook // Buffer is not defined

  // data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22640%22%20height%3D%22480%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%237b21fa%22%2F%3E%3Ctext%20x%3D%22320%22%20y%3D%22240%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E640x480%3C%2Ftext%3E%3C%2Fsvg%3E

  const svg = atob(dataURI.replace(/data:image\/svg\+xml;base64,/, ""));
  console.log(svg);

  return (
    <>
      <h2>Svgs</h2>
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="green"
      >
        <title>{faker.animal.bird()}</title>
        <rect width="20" height="20" />
      </svg>

      <h2>Linked SVG</h2>
      <a href={faker.animal.bird()}>
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="green"
        >
          <title>{faker.animal.bird()}</title>
          <rect width="20" height="20" fill={faker.image.dataUri()} />
          <rect width="20" height="20" />
        </svg>
      </a>

      <hr />

      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <title>{faker.animal.bird()}</title>
        <polygon points={points} />
      </svg>
    </>
  );
};

Svgs.propTypes = {
  primary: PropTypes.bool,
};

Svgs.defaultProps = {
  primary: false,
};
