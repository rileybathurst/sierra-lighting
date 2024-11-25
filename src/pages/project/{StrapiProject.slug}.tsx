// TODO: run this through gatsby-node to get the service in the url

import * as React from "react"
import { graphql } from "gatsby"
import ProjectView from "../../views/project-view"
import SEO from "../../components/seo"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import type { CardType } from "../../types/card-type"

export const query = graphql`
  query ProjectQuery($slug: String!) {
    strapiProject(slug: { eq: $slug }) {
      id
      title
      description {
        data {
          description
        }
      }
      excerpt
      slug
      ogimage

      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }

      gallery {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        alternativeText
      }

      lights {
        ...lightCard
      }

      area {
        name
        state
        slug
      }

      teams {
        id
        name
        slug
      }

      vendors {
        id
        name
        slug
        service
      }
      
      venue {
        id
        name
        slug 
        
        area {
          id
          name
          state
          slug
        }
      }

      services {
        name
        slug
      }

      

    }

    triptych: allStrapiLight(limit: 3, filter: {projects: {elemMatch: {slug: {eq: $slug}}}}) {
      nodes {
        ...lightCard
      }
    }

    additional: allStrapiLight(skip: 3, filter: {projects: {elemMatch: {slug: {eq: $slug}}}}) {
      nodes {
        id
        name
        slug
      }
    }

    allStrapiProject(filter: {slug: {nin: [$slug] }}) {
      nodes {
        title
        id
        slug
        excerpt

        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                breakpoints: [111, 165, 222, 444, 880]
                width: 222
              )
            }
          }
          alternativeText
        }
      }
    }

  }
`

/* 
! testing removed

testimonial {
  id
  customer
  position
  review
  vendor {
    name
    slug
  }
} */

type ProjectPageTypes = {
  data: {
    strapiProject: {
      id: React.Key;
      title: string;
      description: {
        data: {
          description: string;
        };
      };
      excerpt: string;
      slug: string;
      ogimage: string;
      image: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
          url: string;
        };
        alternativeText: string;
      };
      gallery: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
          url: string;
        };
        alternativeText: string;
      }[];

      lights: CardType[];

      areas: {
        name: string;
        state: 'california' | 'nevada';
        slug: string;
      }[];

      teams: {
        id: React.Key;
        name: string;
        slug: string;
      }[];

      vendors: {
        name: string;
        slug: string;
        service: string;
      }[];

      venue: {
        name: string;
        slug: string;
      };

      services: {
        name: string;
        slug: string;
      }[];
    }

    triptych: {
      nodes: []
    }
    additional: {
      nodes: []
    }
    allStrapiProject: {
      nodes: []
    }
  }
}

// console.log(data)

const ProjectPage = ({ data }: ProjectPageTypes) => {

  return (
    <ProjectView
      project={data.strapiProject}
      triptych={data.triptych.nodes}
      additional={data.additional.nodes}
      other={data.allStrapiProject}
    />
  );
};

export default ProjectPage;

type ProjectPageHeadTypes = {
  data: {
    strapiProject: {
      title: string;
      excerpt: string;
      ogimage: string;
      slug: string;
    }
  }
}
export const Head = ({ data }: ProjectPageHeadTypes) => {
  return (
    <SEO
      title={`${data.strapiProject.title}`}
      description={data.strapiProject?.excerpt}
      image={data.strapiProject?.ogimage}
      url={`project/${data.strapiProject.slug}`}
      breadcrumbs={[
        {
          name: 'Project',
          item: 'project'
        },
        {
          name: data.strapiProject.slug,
          item: `project/${data.strapiProject.slug}`
        }
      ]}
    />
  )
}