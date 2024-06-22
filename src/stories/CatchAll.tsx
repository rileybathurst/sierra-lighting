// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

import { Header } from './Header';
import { Deck } from './Deck';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';

interface CatchAllProps {
  primary?: boolean;
  onClick?: () => void;
}

export const CatchAll = ({
  primary = false,
  ...props
}: CatchAllProps) => {

  return (
    <>
      <Header />

      <main className='stork'>
        {/* // TODO: there are thin fonts we use where are they? */}
        <h1 className="denali">
          404 - {faker.company.buzzNoun()}<br />
          {faker.company.buzzPhrase()}
        </h1>
        <h2 className="elbrus">Oops! Looks like this page has left the party.</h2>
        <p>Want to brighten up?<br />
          <a href="/">Head to our home page.</a>
        </p>
        <hr />
        <h3 className='elbrus'>Other {faker.company.buzzNoun()} include</h3>
      </main>

      {/* // TODO: use params to lock this to 3 cards */}
      <Deck />

      <hr className="stork" />

      <Breadcrumbs />

      <Footer />
    </>
  );
};