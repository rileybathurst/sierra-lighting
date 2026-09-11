// TODO: I think I can massivley simplify this by using extends and bringing differeent images and names in  as aliases in certain places
// TODO: needs alias for name and title as well as image, venueImage, and profile

import type { IGatsbyImageData } from "gatsby-plugin-image";

interface BaseCardTypes {
  // * key is passed to fufill React's requirement for list items
  // * id is passed through the spread
  // * removing the questions throws errors
  id?: React.Key;
  key?: React.Key;

  image: {
    localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
    alternativeText: string;
  };

  title: string;
  excerpt: string;

  areas?: {
    name: string;
    slug: string;
  }[];
  subAreas?: string;

  // ? where is this
  query?: string;

  // * this is for vendor as the breadcrumb needs a secondary layer
  collaborator?: {
    slug: string;
  };

  updatedAt?: string | number | undefined;
}

interface Link {
  slug: string;
  breadcrumb:
    | "venue"
    // * uncategorized vendors don't have the secondary slug
    | "vendor"
    | `vendor/${string}`
    | "service"
    | "project"
    | "light"
    | "areas"
    | "team";
  href?: never;
}

interface Href {
  slug?: never;
  breadcrumb?: never;
  href: string;
}

export type CardType = BaseCardTypes & Link;
export type CardHrefType = BaseCardTypes & Href;
export type CardProps = CardType | CardHrefType;
