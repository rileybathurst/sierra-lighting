import type { ImageType } from "./image-type";

export type SuiteType = {
    services: {
        id: React.Key;
        name: string;
        slug: string;
        hero_light: ImageType;
        hero_dark: ImageType;
    }[]
};