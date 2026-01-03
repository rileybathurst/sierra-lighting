// nice start but now organize by light group

import React from 'react';
import { Link, graphql } from "gatsby";
// import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';
import type { CardType } from '../types/card-type';
import Card from '../components/card';
import Start from '../components/start';
import { Breadcrumbs, Breadcrumb } from 'react-aria-components';

type ServiceProjectsTypes = {
    data: {
        strapiService: {
            id: string;
            name: string;
            slug: string;
            excerpt: string;
            projects: CardType[];
        };
    };
}

const ServiceLightView = ({ data }: ServiceProjectsTypes) => {

    return (
        <>
            <Header />

            <main>
                <h1>Projects for {data.strapiService.name}</h1>
                <p>{data.strapiService.excerpt}</p>
                <Start />
                <hr />

            </main>

            <section className='deck' >
                {data.strapiService.projects
                .toReversed()
                .map((project) => (
                    <Card
                        key={project.id}
                        {...project}
                        breadcrumb='projects'
                    />
                ))}
            </section>

            <hr className='stork' />

            <Breadcrumbs>
                <Breadcrumb><Link to={`/${data.strapiService.slug}`}>{data.strapiService.name} Lighting</Link></Breadcrumb>
                <Breadcrumb>Lights</Breadcrumb>
            </Breadcrumbs>

            <Footer />
        </>
    );
};

export default ServiceLightView;

export const query = graphql`
    query ServiceProjectsTemplate(
        $slug: String!,
    ) {

        strapiService(slug: {eq: $slug}) {
            id
            name
            slug
            excerpt

            projects {
                ...projectCard
            }
        }

    }
`

export const Head = ({ data }: ServiceProjectsTypes) => {
    return (
        <SEO
            title={`${data.strapiService.name} projects completed by Sierra Lighting`}
            // description={data.strapiService.excerpt}
            url={`${data.strapiService.slug}/projects`}
            breadcrumbs={[
                {
                    name: data.strapiService.name,
                    item: data.strapiService.slug
                },
                {
                    name: `${data.strapiService.name} Projects`,
                    item: `${data.strapiService.slug}/projects`
                }
            ]}
        // TODO: image
        />
    )
}
