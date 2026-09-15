// this is the Name.tsx file

import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import React from "react";
import { Card } from "./Card";
import { Footer } from "./Footer";
import { Header } from './Header';
import { Slider } from "./slider";
import { Start } from "./start";
import { Suite } from "./suite";
import { Masthead } from "./masthead";
import { Qualities } from "./qualities";

export const Index = () => {
  return (
    <React.Fragment>
      <Header />

      <main className="albatross margin-block-start-0">
        <Masthead
        // nestedAlbatross
        />
        <Qualities
        // nestedAlbatross
        />
      </main>

      {/* // TODO: move this outside the loop but needs a little more designing */}
      <section className="albatross">
        <h3 className="aconcagua">
          <a href="/process">Learn more about our process</a>
        </h3>
        <p>
          Ready to bring your vision to life? Get started with a free estimate
          today and let us illuminate your home or business with an
          unforgettable lighting display!
        </p>
        <hr />
      </section>

      <section id="testimonial-slider">
        <h4 className="stork denali">Thanks From Our Customers</h4>
        <Slider />
        <h3 className="stork elbrus margin-block-end-aconcagua">
          <a href="/testimonials">Read More Reviews</a>
        </h3>

        <hr />
      </section>

      <Suite />


      <div className="stork">
        {/* // TODO: fix the spacing in a better way */}
        <p>&nbsp;</p>
        <Start />
      </div>

      <hr className="albatross " />

      {/* areas */}
      <main className="albatross">
        <div className="stork">
          <hgroup>
            <h1 className="margin-block-end-vinson">Service Areas</h1>
            <p className="margin-block-end-kilimanjaro">
              Don't see your town on the list? Don't worry, we serve the entire
              Reno Tahoe area.
            </p>
          </hgroup>
        </div>
        <div className="areas__page">
          <section className="deck">
            {Array.from({ length: faker.number.int({ min: 1, max: 6 }) }).map(
              () => (
                <Card key={faker.string.uuid()} />
              ),
            )}
          </section>
        </div>
      </main>

      <Footer />
    </React.Fragment >
  );
};

Index.propTypes = {
  primary: PropTypes.bool,
};

Index.defaultProps = {
  primary: false,
};
