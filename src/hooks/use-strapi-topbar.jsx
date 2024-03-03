import { graphql, useStaticQuery } from "gatsby";

export const useStrapiTopBar = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiTopbar {
        title
      }
    }
  `);

  return data.strapiTopbar.title;
};
