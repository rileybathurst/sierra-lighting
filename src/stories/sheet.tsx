// this is the Sheet.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Sheet = () => {

    return (
        <a href={`/p/${faker.book.title()}`} className="sheet sheet__plan">
            <section className="name">
                <h3>{faker.person.fullName()}</h3>
                <p className="supra">Name</p>
            </section>
            <section className="address">
                {faker.location.streetAddress()}, {faker.location.city()}, {faker.location.state()}
                <p className="supra">Address</p>
            </section>
            <section className="jobber">
                {faker.number.int(10000)}
                <p className="supra">Jobber</p>
            </section>
        </a>
    );
};