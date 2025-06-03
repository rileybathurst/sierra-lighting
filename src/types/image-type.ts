import type { IGatsbyImageData } from "gatsby-plugin-image";

type ImageType = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    url?: string;
  };
  alternativeText: string;
};

export type { ImageType };
