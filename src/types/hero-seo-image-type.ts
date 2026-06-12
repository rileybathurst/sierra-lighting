import type { IGatsbyImageData } from "gatsby-plugin-image";

export type HeroSEOImageType = {
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
