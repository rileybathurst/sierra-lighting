// this is the Plan.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Plan = () => {

    return (
        <React.Fragment>
            header
            <hr />

            <main>
                <h1 className="plan-jobber">
                    {faker.datatype.boolean() ?
                        faker.number.int(10000) :
                        <span className="error">Missing Jobber</span>
                    }
                </h1>

                <h2 className='plan-name'>{faker.person.fullName()}</h2>

                <address className="capitalize">
                    <span className="kilimanjaro">{faker.location.streetAddress()}</span><br />
                    {faker.location.city() ?? "No area name available"},&nbsp;
                    {faker.location.state() ?? "No state available"}, {faker.location.zipCode()}
                </address>

                <hr />

                <p>
                    {faker.datatype.boolean() ? (
                            `Timer ${faker.datatype.boolean() ? ` ${faker.number.int(10)} Hours` : ' timer fallback digital or equivalent'}`
                        ) : <span className="error">Missing Timer Info</span>
                    }
                </p>

                <hr />


                {faker.datatype.boolean() ? (
                    <React.Fragment>
                        <h2>Notes</h2>
                        {faker.datatype.boolean() ? (
                            <p className='error'>There are Notes instead of Block Notes</p>
                        ) : null}
                        <pre>{faker.lorem.lines()}</pre>
                    </React.Fragment>
                ) : null}

                <div className='storybook-image'
                    style={{ width: '100%', height: '20rem' }}
                />

                <hr />

                <p>Created at {faker.date.past().toLocaleDateString('en-US')}</p>
                {faker.datatype.boolean() ?
                    <p>Updated at {faker.date.recent().toLocaleDateString('en-US')}</p>
                : null}
            </main>
            <hr />
            footer
        </React.Fragment>
    );
};