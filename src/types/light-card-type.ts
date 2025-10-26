import React from 'react';
import type { IGatsbyImageData } from "gatsby-plugin-image";

type LightCardType = {
	id: React.Key;
	name: string;
	slug: string;
	excerpt?: string;

	image: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
        alternativeText: string;
    };
};

export type { LightCardType };
