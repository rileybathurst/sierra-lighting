import { graphql, useStaticQuery } from "gatsby";

export const useStrapiJob = () => {
  const { allStrapiJob } = useStaticQuery(graphql`
    query {
      allStrapiJob {
        nodes {
          id
          title
          updatedAt
          description {
            data {
              description
            }
          }
        }
      }
    }
  `);

  return allStrapiJob;
};