import type { ImageType } from "./image-type";

interface BaseCardTypes {
  // * key is passed to fufill React's requirement for list items
  // * id is passed through the spread
  // * removing those 2 questions throws errors
  id?: React.Key;
  key?: React.Key;

  image: ImageType;

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
export type CardTypeOmitBreadcumb = Omit<CardType, "breadcrumb">;
export type CardHrefType = BaseCardTypes & Href;
export type CardProps = CardType | CardHrefType;
