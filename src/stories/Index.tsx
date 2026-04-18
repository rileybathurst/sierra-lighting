// this is the Name.tsx file
import React from 'react';
import PropTypes from 'prop-types';

// import { Menu } from './Menu';
import { Footer } from './Footer';
// import { Header } from './Header';
import { Logo } from './Logo';
import { Poster } from './poster';
import { Start } from './start';
import { Card } from './Card';

import { faker } from '@faker-js/faker';
import { Suite } from './suite';
import { Slider } from './slider';

export const Index = () => {
  return (
    <React.Fragment>
      {/* <Header
        // largeLogo={false}
      /> */}

      <main className="albatross margin-block-start-0">
        <div className={`hero-3 ${faker.datatype.boolean() ? 'wedding' : 'xmas'}`}>
          <div className="large logo">
            <Logo />
          </div>

          <h2>
            {faker.company.catchPhrase().split(' ').map((word) => (
              <React.Fragment key={word}>
                {word}
                <br className="medium-up" />
              </React.Fragment>
            ))}
          </h2>

          <div className="images">
            <Poster />
          </div>

          <section className="text">
            <div className="background">
              {/* stay gold */}
            </div>
            <div className="react-markdown">
              {faker.lorem.paragraphs(2)}
            </div>
            <Start />
          </section>
        </div>

        <section className="qualities albatross">
          {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
            <section key={faker.string.uuid()}>
              <h3 className='capitalize'>{faker.company.buzzAdjective()}</h3>
              <p>{faker.lorem.paragraphs(1)}</p>
            </section>
          ))}
          <hr />
        </section>

        {/* // TODO: move this outside the loop but needs a little more designing */}
        <section className="albatross">
          <h3 className="aconcagua">
            <a href="/process">Learn more about our process</a>
          </h3>
          <p>Ready to bring your vision to life? Get started with a free estimate today and let us illuminate your home or business with an unforgettable lighting display!</p>
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

      </main>

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
            <h1>Service Areas</h1>
            <p className="margin-block-end-kilimanjaro">Don't see your town on the list? Don't worry, we serve the entire Reno Tahoe area.</p>
          </hgroup>
        </div>
        <div className="areas__page">
          <section className="deck">
            {Array.from({ length: faker.number.int({ min: 1, max: 6 }) }).map(() => (
              <Card
                key={faker.string.uuid()}
              />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

Index.propTypes = {
  primary: PropTypes.bool,
};

Index.defaultProps = {
  primary: false,
};