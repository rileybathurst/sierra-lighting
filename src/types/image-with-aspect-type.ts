import type { IGatsbyImageData } from "gatsby-plugin-image";

// TODO: theres 2 urls here and Im not sure If i need both
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
  url?: string;
  alternativeText: string;
  caption?: string;
};

export type { ImageWithAspectType };
