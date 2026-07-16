// TODO: theres better ways to do this than hooks

import { graphql, useStaticQuery } from "gatsby";

export const useStrapiFaq = () => {
  const { allStrapiFar } = useStaticQuery(graphql`
    query {
      allStrapiFar {
        nodes {
          id
          question
          answer
        }
      }
    }
  `);

  return allStrapiFar;
};