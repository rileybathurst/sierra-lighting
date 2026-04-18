import React from "react";
import { faker } from "@faker-js/faker";

export const Typography = () => {
  return (
    <section className="stork">
      <h1>h1 - everest</h1>
      <h2>h2 - aconcagua</h2>
      <h3>h3 - denali</h3>
      <h4>h4 - kilimanjaro</h4>
      <h5>h5 - elbrus</h5>
      <h6>h6 - vinson</h6>
      <p>p - vinson</p>
      <p>{faker.lorem.paragraph()}</p>
      <small>small - kosciuszko</small>
      {/* // TODO: lighter weight heading something about boxer weights */}
      <hr />

      {/* // TODO: */}
      <p className="font-sans">font-sans</p>
      <p className="font-serif">font-serif</p>
      <p className="font-quote">&ldquo;font-quote</p>

      {/* // TODO: document this */}
      <p>
        Mixta should only be used on major headings
      </p>

      <hr />


      <h4>font weights</h4>
      <h4>h4 - standard</h4>

      <ul className="kilimanjaro">
        <li className="bridger">Bridger - 900</li>
        <li className="cruiser">Cruiser - 800</li>
        <li className="heavy">heavy - 700</li>
        <li className="middle">middle - 600</li>
        <li className="welter">welter - 500</li>
        <li className="light">light - 400</li>
        <li className="feather">feather - 300</li>
        <li className="bantam">bantam - 200</li>
        <li className="fly">fly - 100</li>
      </ul>

    </section>
  );
};