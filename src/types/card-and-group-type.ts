import type { CardType } from "./card-type";

type CardAndGroupType = {
  card: CardType;
  id: React.Key;
  name: string;
  slug: string;
  light_groups: {
    id: React.Key;
    name: string;
    slug: string;
    excerpt: string;
  }[];
};

export default CardAndGroupType;
