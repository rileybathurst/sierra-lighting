// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Testimonial } from './Testimonial';

export const Testimonials = () => {

  return (
    <main className="stork">

      <h1 className="crest">Reviews</h1>
      <h2 className="ridge">Testimonials</h2>

      {/* // TODO: strapi this */}
      <p>Welcome to our testimonials page, where our satisfied customers speak for us! At Sierra Lighting, we pride ourselves on providing exceptional products/services and ensuring that our clients' experiences exceed expectations, year after year! Don't just take our word for it, hear directly from those who have experienced the quality, reliability, and excellence we deliver firsthand. Dive into the testimonials below to discover why our customers choose us and why you should too!</p>

      <ul className='testimonials'>
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
          <Testimonial key={faker.number.int()} />
        ))}
      </ul>
      <hr />
      <h3 className="crest">
        Help us you buy submitting your own review
      </h3>

      <p>
        <a href="https://g.page/r/CXdQyNRhzs8YEBA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-back hover-back--inline">
          Google Review
        </a><em>- preferred</em>
      </p>
      <p>
        <a href="https://www.yelp.com/biz/sierra-lighting-calpine"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-back">
          Yelp
        </a>
      </p>
      <p><a
        href="https://nextdoor.com/login/?next=/pages/sierra-lighting-truckee-ca/recommend/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover-back">
        NextDoor
      </a>
      </p>

      <form
        className="stork"
        name="testimonial"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/form-success"
      >

        <input type="hidden" name="form-name" value="testimonial" />

        <input type="hidden" name="subject"
          value="Testimonial Form from sierra.lighting" />

        <p className="sr-only">
          <label>
            Don&#39;t fill this out if you&#39;re human:
            <input name="bot-field" />
          </label>
        </p>

        <label>Name
          <input type="text" name="name" />
        </label>
        <label>Stars (out of five)
          <input type="number" min="0" max="5" name="stars" />
        </label>
        <label>Title
          <input type="text" name="title" />
        </label>
        <label>Review
          <textarea name="review" />
        </label>
        <label>Email
          <input type="email" name="email" />
        </label>
        <button type="submit">Send</button>
      </form>
    </main>
  );
};