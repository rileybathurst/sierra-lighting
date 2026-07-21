import React from 'react';
import { faker } from '@faker-js/faker';
import PropTypes from 'prop-types';
import { Deck } from './Deck';
import { Header } from './Header';
import { Footer } from './Footer';

export const ListofDecks = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>Title</h1>
        <p className="margin-block-end-denali">{faker.lorem.sentence()}</p>
      </main>
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="above-deck">
            <hr />
            <h3>{faker.location.country()}</h3>
            {/* * same spacing as between cards */}
            <p className="">{faker.lorem.sentence()}</p>
          </div>
          <Deck />
          {faker.datatype.boolean() && (
            <h4 className="main">
              <a href={faker.location.country()}>
                Explore more from {faker.location.country()}
              </a>
            </h4>
          )}
        </React.Fragment>
      ))}
      <Footer />
    </React.Fragment>
  );
};

ListofDecks.propTypes = {
  primary: PropTypes.bool,
};

ListofDecks.defaultProps = {
  primary: false,
};