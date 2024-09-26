import { graphql, useStaticQuery } from "gatsby";

export const useStrapiJob = () => {
  const data = useStaticQuery(graphql`
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

      strapiAbout {
        businessName
      }

    }
  `);

  return data;
};