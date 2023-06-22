import { IGatsbyImageData } from "gatsby-plugin-image"

export interface CardType {
  id: React.Key;

  image?: { localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }; alternativeText: string };
  venueImage?: { localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }; alternativeText: string };
  profile?: { localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }; alternativeText: string };

  slug: any;
  excerpt: string

  name?: string;
  title?: string;
  byline?: string;
}
