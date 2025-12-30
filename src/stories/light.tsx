// this is the Light.tsx file
import React from 'react';
import { Topbar } from './Topbar';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { Hero } from './hero';
import { Start } from './start';
import { faker } from '@faker-js/faker';
import { Deck } from './Deck';
import { Breadcrumbs } from './Breadcrumbs';
import { FAQ } from './faq';
import { Collage } from './collage';

export const Light = () => {

    return (
        <>
            <Topbar />
            <Menu />

            <Hero />

            <main>
                <article className="stork">
                    <h1 className="denali">
                        {faker.music.artist()}
                        {faker.datatype.boolean() ? ' for Christmas Lighting' : ' for Wedding Lighting'}
                    </h1>

                    {faker.datatype.boolean() ? (
                        <React.Fragment>
                            <h3 className="kilimanjaro">Also known as:</h3>
                            <ul>
                                {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
                                    <li key={faker.music.artist()}>{faker.music.artist()}</li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ) : null}

                    <p>{faker.lorem.paragraph()}</p>
                    <hr />
                    <Start />
                </article>
            </main>

            <hr className="stork" />

            {/* // TODO: this isnt a card but its a little something closer to the idea, needs a new name possibly on a layering device, make it a component */}
            {faker.datatype.boolean() ? (
            <section className="stork">
                <h3 className="crest">We use {faker.music.artist()} for</h3>
                <ul className="list-style-none">
                    {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
                        <li key={faker.music.genre()}>
                            <h3 className="kilimanjaro capitalize">
                                <a href={faker.music.genre()}>{faker.music.genre()} lighting</a>
                            </h3>
                            {/* // * this seems overkill the description of wedding doesnt help */}
                            {faker.datatype.boolean() ?
                                <div className="react-markdown">
                                    {faker.lorem.paragraph()}
                                </div>
                            : null}
                        </li>
                    ))}
                </ul>

                {/* // TODO: this should be in it's own section */}
                <FAQ />
            </section>
            ) : (

                <React.Fragment>
                    <h3 className="stork crest">We use {faker.music.artist()} for</h3>
                    {/* // ? testing is it better to have the full component here */}
                    <Collage />
                </React.Fragment>
            )}

            <div>
                <hr className="stork" />
                <h3 className="stork">Other Lights in {faker.music.genre()}</h3>
                <Deck />
            </div>

            <div className="stork">
                <hr />
                <h3>Projects Using {faker.music.artist()}</h3>
            </div>
            <Deck />

            <hr className="stork" />

            <Breadcrumbs />

            <Footer />
        </>
    );
};