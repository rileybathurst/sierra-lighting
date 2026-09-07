// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Buttons = () => {

  return (
    <main>
      <h2>Buttons</h2>
      <button type='button'>Load More</button>
      <button type='button' className="button-hover-storybook">Hovered state</button>
      <button type='button' className="button-focus-storybook">Focused state</button>
      <hr />
      <h3>Link Buttons</h3>
      <a href={faker.internet.url()} className="button">Link Button</a>
      <a href={faker.internet.url()} className="button button-hover-storybook">Link Hovered Button</a>
      <a href={faker.internet.url()} className="button button-focus-storybook">Link Focused Button</a>
      <hr />
      <h3>Disabled Buttons</h3>
      <button type='button' disabled>Disabled Button</button>
      <a href={faker.internet.url()}
        className="button button-disabled"
        aria-disabled="true"
      >
        Disabled Link Button
      </a>
    </main>
  );
};
