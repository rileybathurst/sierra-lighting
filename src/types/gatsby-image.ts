import type { IGatsbyImageData } from "gatsby-plugin-image";

type GatsbyImageType = {
  localFile: {
    url: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  alternativeText: string;
};

export type { GatsbyImageType };
