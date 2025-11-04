import type { CardType } from "./card-type";

export type LightGroupType = {
	id: string;
	name: string;
	slug: string;
	excerpt: string;
	services: {
		id: string;
		name: string;
		slug: string;
	}[];
	weddingOrder: number;
	xmasOrder: number;
	lights: CardType[];
};
