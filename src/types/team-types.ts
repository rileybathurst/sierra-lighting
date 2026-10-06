import type { ImageType } from "./image-type";

type TeamTypes = {
  id?: React.Key;
  key?: React.Key;
  name: string;
  slug: string;
  bio: {
    data: {
      bio: string;
    };
  };
  avatar: ImageType;
};

export type { TeamTypes };
