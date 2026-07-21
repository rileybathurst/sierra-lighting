// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Attribute } from './Attribute';
import { Footer } from './Footer';
import { faker } from "@faker-js/faker";
import { Start } from './start';
import { Poster } from './poster';
import { Testimonial } from './Testimonial';
import { Deck } from './Deck';
import { Breadcrumbs } from './Breadcrumbs';

export const Project = () => {

  return (
    <>
      <Header />
      <Poster />
      <main className='stork'>
        <article>

          <h1>Project</h1>
          {faker.datatype.boolean() && <h2 className="font-serif">{faker.person.firstName()} & {faker.person.firstName()}</h2>}

          <div className="react-markdown">
            <p>{faker.lorem.lines()}</p>
          </div>
        </article>
        <hr />
        <h3>Interested in a project like this</h3>
        <Start />
      </main>

      {faker.datatype.boolean() && (
        <React.Fragment>
          <hr className="pelican" />
          <div className="stork">
            <Testimonial />
          </div>
        </React.Fragment>
      )}

      <hr className="pelican" />
      <Attribute />

      <div className="stork">
        <hr />
        <h3>
          {faker.music.album()} uses these lights</h3>
      </div>

      <Deck />

      <hr className="pelican" />

      <Breadcrumbs />

      <Footer />
    </>
  );
};