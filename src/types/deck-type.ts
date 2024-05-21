import type { CardType } from "./card-type";

export interface DeckType {
  id: React.Key;
  card: CardType;
  breadcrumb: string;

  // ts is asking for this from somewhwere?
  slug?: string; // Add the missing 'slug' property
  excerpt?: string; // Add the missing 'excerpt' property
}
