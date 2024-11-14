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
          employmentType
          validThrough
          
          areas {
            name
            slug
            state
            postalCode
          }
        }
      }

      strapiAbout {
        businessName
        addressLocality
        addressRegion
        postalCode
      }

    }
  `);

  return data;
};