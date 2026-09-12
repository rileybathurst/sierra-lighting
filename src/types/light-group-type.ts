import type { CardType } from "./card-type";

export type LightGroupType = {
  id: React.Key;
  name: string;
  slug: string;
  excerpt: string;
  services: {
    id: React.Key;
    name: string;
    slug: string;
  }[];
  weddingOrder: number;
  xmasOrder: number;
  lights: CardType[];
};
