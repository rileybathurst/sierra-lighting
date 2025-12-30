import type { ImageType } from "../types/image-type";

export type CollageType = {
    services: {
        id: React.Key;
        name: string;
        slug: string;
        hero_light: ImageType;
        hero_dark: ImageType;
    }[]
};