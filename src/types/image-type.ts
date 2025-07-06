import type { IGatsbyImageData } from "gatsby-plugin-image";

type ImageType = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    url?: string;
  };
  alternativeText: string;
  caption?: string;
};

export type { ImageType };
