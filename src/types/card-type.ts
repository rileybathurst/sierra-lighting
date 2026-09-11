// TODO: I think I can massivley simplify this by using extends and bringing differeent images and names in  as aliases in certain places
// TODO: needs alias for name and title as well as image, venueImage, and profile

import type { IGatsbyImageData } from "gatsby-plugin-image";

interface BaseCardTypes {
  // * key is passed to fufill React's requirement for list items
  // * id is passed through the spread
  // * removing the questions throws errors
  id?: React.Key;
  key?: React.Key;
  title: string;
  href?: string;
  slug?: string; // ? can this be set to a few specifics like 'venue', 'vendor', 'service'?
  excerpt: string;
  areas?: {
    name: string;
    slug: string;
  }[];
  subAreas?: string;
  breadcrumb?: string;
  query?: string;

  collaborator?: {
    slug: string;
  };

  updatedAt?: string | number | undefined;
}

interface Image {
  image: {
    localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
    alternativeText: string;
  };
  venueImage?: never;
  profile?: never;
}
interface VenueImage {
  image?: never;
  venueImage: {
    localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
    alternativeText: string;
  };
  profile?: never;
}
interface Profile {
  image?: never;
  venueImage?: never;
  profile: {
    localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
    alternativeText: string;
  };
}
type ImageOrVenueImageOrProfile = Image | VenueImage | Profile;

export type CardType = BaseCardTypes & ImageOrVenueImageOrProfile;
