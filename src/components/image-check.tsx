import React from 'react';
import Card from '../components/card';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

type ImageCheckTypes = {
    excerpt: string,
    breadcrumb: string,
    query: string,
    name: string,
    slug: string,

    image: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            }
        },
        alternativeText: string
    },

    residentialHero?: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            }
        },
        alternativeText: string
    },
    commercialHero?: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            }
        },
        alternativeText: string
    },
}
const ImageCheck = ({ breadcrumb, excerpt, query, image, name, slug, residentialHero, commercialHero }: ImageCheckTypes) => {

    let cardImage = image;
    if (query === 'residential' && residentialHero) {
        cardImage = residentialHero;
    } else if (query === 'commercial' && commercialHero) {
        cardImage = commercialHero;
    }

    return (
        <Card
            name={name}
            slug={slug}
            excerpt={excerpt ?? ''}
            breadcrumb={breadcrumb}
            query={query}

            image={cardImage}
        />
    )
}

export default ImageCheck;