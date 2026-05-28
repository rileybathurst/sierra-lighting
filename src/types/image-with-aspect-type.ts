import type { IGatsbyImageData } from "gatsby-plugin-image";

type ImageWithAspectType = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
      resize: {
        aspectRatio: number;
      };
    };
    url?: string;
  };
  alternativeText: string;
  caption?: string;
};

export type { ImageWithAspectType };
