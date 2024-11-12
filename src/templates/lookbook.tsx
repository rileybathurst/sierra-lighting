import React from 'react';
import { graphql } from 'gatsby'

type LookbookTemplateTypes = {
  data: {
    allStrapiLookbook: {
      id: React.Key;
    }[];
    strapiService: {
      id: React.Key;
      name: string;
    };
  };
}
const LookbookTemplate = ({ data }: LookbookTemplateTypes) => {

  return (
    <>
      {/* test {data.strapiService.id} */}
      <hr />
      {/* this isnt looped */}
      {/* {data.allStrapiLookbook.id} */}
    </>
  );
};

export default LookbookTemplate;

export const query = graphql`
  query LookbookTemplateQuery($slug: String!) {

    strapiService(slug: {eq: $slug}) {
      id
    }
  }
`;

/* allStrapiLookbook
    #(filter: { services: { elemMatch: { slug: { eq: $slug } } } })
{
      nodes {
    id
  }
} */