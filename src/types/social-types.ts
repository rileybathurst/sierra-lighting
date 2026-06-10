export type SocialTypes = {
  id: React.Key;
  username: string;
  site: {
    id: React.Key;
    service: string;
    link: string;
    svg: string;
  };
};
