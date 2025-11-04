import type { IGatsbyImageData } from "gatsby-plugin-image";

interface BaseCardTypes {
  id: React.Key;
  slug: string; // ? can this be set to a few specifics like 'venue', 'vendor', 'service'?
  excerpt: string;
  areas?: {
    name: string;
    slug: string;
  }[];
  subAreas?: string;
  breadcrumb: string;

  updatedAt?: string | number | undefined;
}

interface Title {
  title: string;
  name?: never;
}
interface Name {
  title?: never;
  name: string;
}
type TitleOrName = Title | Name;

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

export type CardType = BaseCardTypes & TitleOrName & ImageOrVenueImageOrProfile;
